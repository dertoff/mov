import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Zap, 
  Volume2, 
  Settings,
  X,
  Check
} from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

const AccessibilitySettings = ({ isOpen, onClose }) => {
  const { preferences, updatePreference } = useAccessibility();

  const settings = [
    {
      id: 'highContrast',
      label: 'High Contrast',
      description: 'Increase color contrast for better visibility',
      icon: Eye,
      value: preferences.highContrast
    },
    {
      id: 'dyslexiaFriendly',
      label: 'Dyslexia-Friendly Font',
      description: 'Use fonts optimized for dyslexia',
      icon: Type,
      value: preferences.dyslexiaFriendly
    },
    {
      id: 'reducedMotion',
      label: 'Reduce Motion',
      description: 'Minimize animations and transitions',
      icon: Zap,
      value: preferences.reducedMotion
    },
    {
      id: 'largeText',
      label: 'Large Text',
      description: 'Increase text size for better readability',
      icon: Type,
      value: preferences.largeText
    },
    {
      id: 'screenReaderMode',
      label: 'Screen Reader Optimized',
      description: 'Enhanced experience for screen readers',
      icon: Volume2,
      value: preferences.screenReaderMode
    }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      className="accessibility-settings-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="accessibility-settings-panel"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="accessibility-settings-title"
        aria-modal="true"
      >
        <div className="settings-header">
          <h2 id="accessibility-settings-title" className="settings-title">
            <Settings size={24} aria-hidden="true" />
            Accessibility Settings
          </h2>
          <button
            className="settings-close"
            onClick={onClose}
            aria-label="Close accessibility settings"
          >
            <X size={24} />
          </button>
        </div>

        <div className="settings-content">
          <p className="settings-description">
            Customize your viewing experience with these accessibility options.
          </p>

          <div className="settings-list">
            {settings.map((setting) => {
              const IconComponent = setting.icon;
              return (
                <div key={setting.id} className="setting-item">
                  <div className="setting-info">
                    <div className="setting-icon">
                      <IconComponent size={20} aria-hidden="true" />
                    </div>
                    <div className="setting-text">
                      <h3 className="setting-label">{setting.label}</h3>
                      <p className="setting-description">{setting.description}</p>
                    </div>
                  </div>
                  
                  <button
                    className={`setting-toggle ${setting.value ? 'active' : ''}`}
                    onClick={() => updatePreference(setting.id, !setting.value)}
                    aria-pressed={setting.value}
                    aria-label={`${setting.value ? 'Disable' : 'Enable'} ${setting.label}`}
                  >
                    <div className="toggle-track">
                      <div className="toggle-thumb">
                        {setting.value && <Check size={12} />}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="settings-footer">
            <p className="settings-note">
              These settings are saved locally and will persist across sessions.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccessibilitySettings;