import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    highContrast: false,
    reducedMotion: false,
    dyslexiaFriendly: false,
    largeText: false,
    screenReaderMode: false
  });

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getItem('accessibility-preferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }

    // Detect system preferences
    const mediaQueries = {
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      largeText: window.matchMedia('(prefers-reduced-data: reduce)')
    };

    Object.entries(mediaQueries).forEach(([key, mq]) => {
      if (mq.matches) {
        setPreferences(prev => ({ ...prev, [key]: true }));
      }
      
      mq.addEventListener('change', (e) => {
        setPreferences(prev => ({ ...prev, [key]: e.matches }));
      });
    });

    return () => {
      Object.values(mediaQueries).forEach(mq => {
        mq.removeEventListener('change', () => {});
      });
    };
  }, []);

  useEffect(() => {
    // Save preferences
    localStorage.setItem('accessibility-preferences', JSON.stringify(preferences));
    
    // Apply preferences to document
    const root = document.documentElement;
    
    if (preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (preferences.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (preferences.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }
    
    if (preferences.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
  }, [preferences]);

  const updatePreference = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const announce = (message, priority = 'polite') => {
    const id = Date.now();
    setAnnouncements(prev => [...prev, { id, message, priority }]);
    
    // Remove announcement after it's been read
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== id));
    }, 5000);
  };

  const value = {
    preferences,
    updatePreference,
    announce,
    announcements
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      
      {/* Live regions for screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcements
          .filter(a => a.priority === 'polite')
          .map(a => (
            <div key={a.id}>{a.message}</div>
          ))
        }
      </div>
      
      <div aria-live="assertive" aria-atomic="true" className="sr-only">
        {announcements
          .filter(a => a.priority === 'assertive')
          .map(a => (
            <div key={a.id}>{a.message}</div>
          ))
        }
      </div>
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityProvider;