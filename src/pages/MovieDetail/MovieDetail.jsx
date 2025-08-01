/* Modern Streaming Platform Design System */
/* Mobile-first responsive design with professional aesthetics */

:root {
  /* Color Palette */
  --primary-red: #e50914;
  --primary-red-hover: #f40612;
  --primary-red-dark: #b20710;
  --secondary-dark: #141414;
  --background-black: #000000;
  --background-dark: #0a0a0a;
  --background-card: #1a1a1a;
  --background-overlay: rgba(0, 0, 0, 0.8);
  
  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --text-muted: #8c8c8c;
  --text-accent: #ffd700;
  
  /* Accessibility Colors - WCAG AA Compliant */
  --text-high-contrast: #ffffff;
  --text-medium-contrast: #e5e5e5;
  --text-low-contrast: #cccccc;
  --focus-color: #4a9eff;
  --error-color: #ff6b6b;
  --success-color: #51cf66;
  --warning-color: #ffd43b;
  
  /* Accessibility Colors - WCAG AA Compliant */
  --text-high-contrast: #ffffff;
  --text-medium-contrast: #e5e5e5;
  --text-low-contrast: #cccccc;
  --focus-color: #4a9eff;
  --error-color: #ff6b6b;
  --success-color: #51cf66;
  --warning-color: #ffd43b;
  
  /* UI Elements */
  --border-color: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);
  --shadow-light: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-heavy: 0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 20px rgba(229, 9, 20, 0.3);
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Typography Scale - Accessible sizing */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  
  /* Line Heights - Improved readability */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
  
  /* Typography Scale - Accessible sizing */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  
  /* Line Heights - Improved readability */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 50%;
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Z-index layers */
  --z-header: 1000;
  --z-modal: 2000;
  --z-overlay: 3000;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: var(--line-height-relaxed);
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  background: var(--background-black);
  color: var(--text-primary);
  overflow-x: hidden;
  font-weight: 400;
  line-height: var(--line-height-normal);
  letter-spacing: 0.01em;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background-dark);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-red);
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-red-hover);
}

/* Typography - Improved Accessibility */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-md);
  color: var(--text-high-contrast);
  letter-spacing: -0.025em;
  font-feature-settings: 'kern\' 1, 'liga\' 1;
}

/* Proper heading hierarchy with accessible sizing */
h1 { 
  font-size: clamp(var(--font-size-3xl), 4vw, var(--font-size-5xl));
  margin-bottom: var(--spacing-lg);
}
h2 { 
  font-size: clamp(var(--font-size-2xl), 3vw, var(--font-size-4xl));
  margin-bottom: var(--spacing-lg);
}
h3 { 
  font-size: clamp(var(--font-size-xl), 2.5vw, var(--font-size-3xl));
  margin-bottom: var(--spacing-md);
}
h4 { 
  font-size: clamp(var(--font-size-lg), 2vw, var(--font-size-2xl));
  margin-bottom: var(--spacing-md);
}
h5 { 
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}
h6 { 
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

p {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
  color: var(--text-medium-contrast);
  max-width: 65ch; /* Optimal reading width */
  letter-spacing: 0.01em;
}

/* Improved text readability for dyslexia */
.dyslexia-friendly {
  font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif;
  letter-spacing: 0.12em;
  word-spacing: 0.16em;
  line-height: var(--line-height-loose);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --text-primary: #ffffff;
    --text-secondary: #ffffff;
    --text-muted: #e5e5e5;
    --background-card: #000000;
    --border-color: rgba(255, 255, 255, 0.5);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Focus management for keyboard navigation */
*:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Skip link for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-red);
  color: var(--text-high-contrast);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-sm);
  z-index: 9999;
  font-weight: 600;
}

.skip-link:focus {
  top: 6px;
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Visually hidden but available to screen readers */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* App Container */
.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Netflix-style Home Page */
.netflix-home {
  background: #141414;
  min-height: 100vh;
}

/* Netflix Hero Section */
.netflix-hero {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.netflix-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.netflix-hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.netflix-hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(20, 20, 20, 0.8) 0%,
    rgba(20, 20, 20, 0.4) 50%,
    rgba(20, 20, 20, 0.8) 100%
  );
  z-index: 2;
}

.netflix-hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.netflix-hero-info {
  max-width: 40%;
}

.netflix-hero-title {
  font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-high-contrast);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: var(--line-height-tight);
}

.netflix-hero-overview {
  font-size: clamp(var(--font-size-base), 1.5vw, var(--font-size-xl));
  line-height: var(--line-height-relaxed);
  color: var(--text-medium-contrast);
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  max-width: 50ch;
}

.netflix-hero-buttons {
  display: flex;
  gap: 1rem;
}

.netflix-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.netflix-btn-play {
  background: #ffffff;
  color: #000000;
}

.netflix-btn-play:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000000;
}

.netflix-btn-info {
  background: rgba(109, 109, 110, 0.7);
  color: #ffffff;
}

.netflix-btn-info:hover {
  background: rgba(109, 109, 110, 0.4);
  color: #ffffff;
}

.netflix-hero-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.netflix-volume-btn {
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.netflix-volume-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.netflix-maturity-rating {
  background: rgba(51, 51, 51, 0.6);
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  border-left: 3px solid #ffffff;
}

.netflix-hero-indicators {
  position: absolute;
  bottom: 2rem;
  right: 4%;
  display: flex;
  gap: 0.5rem;
  z-index: 4;
}

.netflix-hero-indicator {
  width: 12px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.netflix-hero-indicator.active {
  background: #ffffff;
}

/* Netflix Toggle */
.netflix-toggle-section {
  padding: 2rem 4%;
  background: #141414;
}

.netflix-toggle-container {
  display: flex;
  justify-content: center;
}

.netflix-toggle {
  display: flex;
  position: relative;
}

.netflix-toggle-btn {
  background: none;
  border: none;
  color: #999999;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border-bottom: 3px solid transparent;
}

.netflix-toggle-btn:hover {
  color: #b3b3b3;
}

.netflix-toggle-btn.active {
  color: #ffffff;
  border-bottom-color: #e50914;
}

.netflix-toggle-indicator {
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 3px;
  background: #e50914;
}

/* Netflix Content Rows */
.netflix-content {
  background: #141414;
  padding: 0 4%;
  padding-bottom: 4rem;
}

.netflix-row {
  margin-bottom: 3rem;
}

.netflix-row-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #e5e5e5;
  margin-bottom: 1rem;
  padding-left: 0;
}

.netflix-row-container {
  position: relative;
}

.netflix-row-slider {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem 0;
}

.netflix-row-slider::-webkit-scrollbar {
  display: none;
}

.netflix-scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(20, 20, 20, 0.5);
  border: none;
  color: #ffffff;
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s ease;
}

.netflix-scroll-btn:hover {
  background: rgba(20, 20, 20, 0.8);
}

.netflix-scroll-left {
  left: -60px;
}

.netflix-scroll-right {
  right: -60px;
}

/* Netflix Cards */
.netflix-card {
  position: relative;
  min-width: 200px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.netflix-card-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.netflix-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.netflix-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
}

.netflix-card-info {
  margin-bottom: 1rem;
}

.netflix-card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.netflix-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.netflix-match {
  color: #46d369;
  font-weight: 600;
}

.netflix-year,
.netflix-rating {
  color: #d2d2d2;
}

.netflix-card-genres {
  font-size: 0.75rem;
  color: #999999;
  margin-bottom: 0.5rem;
}

.netflix-card-buttons {
  display: flex;
  gap: 0.5rem;
}

.netflix-card-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(42, 42, 42, 0.6);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.netflix-card-btn:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.netflix-play-btn {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.netflix-play-btn:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000000;
}

.netflix-info-btn {
  border-color: #ffffff;
}

/* Search Results Styles */
.netflix-search-results {
  background: #141414;
  min-height: 100vh;
  padding-top: 70px;
}

.netflix-search-header {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.netflix-search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
}

.netflix-search-title-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-icon {
  color: #e50914;
}

.netflix-search-header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.netflix-search-subtitle {
  font-size: 1.2rem;
  color: #b3b3b3;
  margin: 0;
}

.netflix-search-content {
  padding: 2rem 0;
}

/* Netflix Page Styles */
.netflix-trending-page,
.netflix-top-rated-page,
.netflix-upcoming-page {
  background: #141414;
  min-height: 100vh;
  padding-top: 70px;
}

.netflix-page-hero {
  position: relative;
  height: 40vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.netflix-hero-background-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
  z-index: 1;
}

.netflix-page-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  padding: 0 2rem;
}

.netflix-page-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e50914 0%, #f40612 100%);
  border-radius: 50%;
  margin-bottom: 2rem;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(229, 9, 20, 0.3);
}

.netflix-page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(135deg, #ffffff 0%, #e50914 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.netflix-page-description {
  font-size: 1.2rem;
  color: #b3b3b3;
  line-height: 1.6;
  margin: 0;
}

/* Enhanced Toggle Section */
.netflix-toggle-section {
  padding: 2rem 4%;
  background: #141414;
  border-bottom: 1px solid #333;
}

.netflix-toggle-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.netflix-toggle-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.netflix-toggle {
  display: flex;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 4px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.netflix-toggle-btn {
  position: relative;
  z-index: 2;
  background: none;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 46px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.netflix-toggle-btn:hover {
  color: #ffffff;
}

.netflix-toggle-btn.active {
  color: #ffffff;
}

.netflix-toggle-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.netflix-toggle-indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 4px;
  background: #e50914;
  border-radius: 42px;
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
}
.netflix-no-results {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 4rem 2rem;
}

.no-results-content {
  text-align: center;
  max-width: 400px;
}

.no-results-icon {
  color: #666;
  margin-bottom: 2rem;
}

.no-results-content h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.no-results-content p {
  font-size: 1.1rem;
  color: #b3b3b3;
  margin: 0;
}

/* Watch Page Styles */
.netflix-watch-page {
  background: #000000;
  min-height: 100vh;
  padding-top: 70px;
}

.netflix-video-player {
  position: relative;
  background: #000000;
}

.netflix-video-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.netflix-back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.netflix-back-btn:hover {
  color: #e50914;
}

.netflix-video-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.netflix-video-actions {
  display: flex;
  gap: 1rem;
}

.netflix-video-action-btn {
  background: rgba(42, 42, 42, 0.8);
  border: none;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.netflix-video-action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.netflix-video-container {
  position: relative;
  aspect-ratio: 16/9;
  background: #000000;
}

.netflix-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.netflix-video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%);
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.netflix-video-controls.visible {
  opacity: 1;
}

.netflix-controls-overlay {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.netflix-play-pause-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.netflix-play-pause-btn:hover {
  transform: scale(1.1);
}

.netflix-volume-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.netflix-volume-controls button {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.netflix-volume-controls button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.netflix-cpa-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
}

.netflix-cpa-content {
  text-align: center;
  max-width: 400px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.netflix-cpa-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.netflix-cpa-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #b3b3b3;
  line-height: 1.6;
}

.netflix-related-section {
  background: #141414;
  padding: 2rem 0;
}
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
  backdrop-filter: blur(10px);
  transition: all var(--transition-medium);
  height: 70px;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.95);
  box-shadow: var(--shadow-medium);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
  padding: 0 clamp(1rem, 4vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xl);
}

.logo {
  text-decoration: none;
  transition: transform var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: var(--primary-red);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.logo-text {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 900;
  color: var(--primary-red);
  letter-spacing: -0.5px;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-item:hover,
.nav-item.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--primary-red);
  border-radius: var(--radius-sm);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.desktop-search .search-form {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  padding: var(--spacing-sm) var(--spacing-md);
  min-width: 280px;
  transition: all var(--transition-fast);
}

.desktop-search .search-form:focus-within {
  border-color: var(--primary-red);
  box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.2);
  background: rgba(0, 0, 0, 0.8);
}

.search-icon {
  color: var(--text-muted);
  margin-right: var(--spacing-sm);
  flex-shrink: 0;
}

.search-input {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 0.9rem;
  outline: none;
  flex: 1;
  padding: var(--spacing-xs) 0;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.header-icon-btn {
  position: relative;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.header-icon-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
}

.notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: var(--primary-red);
  color: var(--text-primary);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: var(--radius-full);
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color var(--transition-fast);
  cursor: pointer;
  background: none;
  padding: 0;
}

.user-avatar:hover {
  border-color: var(--primary-red);
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-menu-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  transform: translateY(-100%);
  transition: transform var(--transition-medium);
  z-index: var(--z-modal);
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}

.mobile-menu.open {
  transform: translateY(0);
}

.mobile-menu-content {
  padding: var(--spacing-xl);
}

.mobile-search {
  margin-bottom: var(--spacing-xl);
}

.mobile-search .search-form {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-nav-item:hover,
.mobile-nav-item.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
}

.mobile-menu-overlay {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: calc(var(--z-modal) - 1);
}

/* Main Content */
main {
  flex: 1;
  padding-top: 70px;
}

.home-page {
  background: var(--background-black);
  min-height: 100vh;
}

.content-container {
  padding: 0;
}

/* Enhanced Hero Section */
.hero-section-enhanced {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
}

.hero-content-enhanced {
  position: relative;
  z-index: 3;
  width: 100%;
  padding: var(--spacing-xl) 0;
}

.hero-title-enhanced {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.hero-meta-enhanced {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  font-size: 1.1rem;
}

.hero-rating {
  color: var(--text-accent);
  font-weight: 600;
}

.hero-year {
  color: var(--text-secondary);
}

.hero-description-enhanced {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
}

.hero-buttons-enhanced {
  display: flex;
  gap: var(--spacing-md);
}

.hero-btn-play {
  background: var(--primary-red);
  color: var(--text-primary);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.hero-btn-play:hover {
  background: var(--primary-red-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* Content Toggle Styles */
.content-toggle-container {
  padding: var(--spacing-xl) 0;
  display: flex;
  justify-content: center;
}

.content-toggle {
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 4px;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
}

.toggle-background {
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  border-radius: 46px;
  overflow: hidden;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--primary-red);
  border-radius: 46px;
  box-shadow: var(--shadow-medium);
}

.toggle-option {
  position: relative;
  z-index: 2;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 46px;
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--transition-medium);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 140px;
  justify-content: center;
}

.toggle-option.active {
  color: var(--text-primary);
}

.toggle-option:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.toggle-icon {
  font-size: 1.2rem;
}

.toggle-loading {
  margin-left: var(--spacing-sm);
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid var(--text-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Trending Section */
.trending-section {
  padding: var(--spacing-2xl) 0;
}

.section-header {
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.trending-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-medium);
  cursor: pointer;
  background: var(--background-card);
  border: 1px solid var(--border-color);
}

.trending-card:hover {
  border-color: var(--primary-red);
  box-shadow: var(--shadow-heavy);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-poster {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  background: var(--background-dark);
}

.card-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-medium);
}

.trending-card:hover .card-poster img {
  transform: scale(1.1);
}

.card-badges {
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  right: var(--spacing-sm);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
}

.rating-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: rgba(0, 0, 0, 0.8);
  color: var(--text-accent);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.quality-badge {
  background: var(--primary-red);
  color: var(--text-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.trending-rank {
  position: absolute;
  bottom: var(--spacing-sm);
  left: var(--spacing-sm);
  z-index: 2;
}

.rank-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary-red);
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-medium);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 0%, rgba(0,0,0,0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.play-btn {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-medium);
}

.play-btn:hover {
  background: var(--text-primary);
  transform: scale(1.1);
  box-shadow: var(--shadow-heavy);
}

.play-btn svg {
  color: var(--background-black);
  margin-left: 2px; /* Optical alignment */
}

.overlay-actions {
  display: flex;
  gap: var(--spacing-sm);
}

.action-btn {
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--border-hover);
  color: var(--text-primary);
}

.action-btn.active {
  background: var(--primary-red);
  border-color: var(--primary-red);
}

.card-content {
  padding: var(--spacing-md);
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.card-year,
.card-type {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

/* Loading States */
.trending-card-skeleton {
  background: var(--background-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.skeleton-poster {
  aspect-ratio: 2/3;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.skeleton-content {
  padding: var(--spacing-md);
}

.skeleton-title {
  height: 20px;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.skeleton-meta {
  height: 16px;
  width: 60%;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.no-content {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--text-muted);
}

/* Video Player */
.video-player-container {
  position: sticky;
  top: 70px;
  z-index: 100;
  background: var(--background-black);
  margin-bottom: var(--spacing-xl);
}

.video-player-wrapper {
  position: relative;
  aspect-ratio: 16/9;
  background: var(--background-black);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-heavy);
}

.video-player-wrapper.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--z-overlay);
  border-radius: 0;
  aspect-ratio: unset;
}

.close-btn {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: var(--primary-red);
  transform: scale(1.1);
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%);
  padding: var(--spacing-xl) var(--spacing-lg) var(--spacing-lg);
  z-index: 5;
}

.controls-top {
  margin-bottom: var(--spacing-lg);
}

.video-info {
  max-width: 50%;
}

.video-title {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.video-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.video-meta > span {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.rating {
  color: var(--text-accent);
  font-weight: 600;
}

.controls-bottom {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.progress-container {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-sm);
  cursor: pointer;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: var(--primary-red);
  border-radius: var(--radius-sm);
  transition: width var(--transition-fast);
}

.progress-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: var(--primary-red);
  border-radius: var(--radius-full);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.progress-bar:hover .progress-thumb {
  opacity: 1;
}

.controls-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.controls-left,
.controls-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.control-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.volume-control {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.volume-slider {
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-sm);
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background: var(--primary-red);
  border-radius: var(--radius-full);
  cursor: pointer;
}

.time-display {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
  min-width: 100px;
}

/* CPA Overlay */
.cpa-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.cpa-content {
  text-align: center;
  max-width: 400px;
  padding: var(--spacing-2xl);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
}

.cpa-content h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-red);
}

.cpa-content p {
  margin-bottom: var(--spacing-xl);
  color: var(--text-secondary);
}

.cpa-btn {
  background: var(--primary-red);
  color: var(--text-primary);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  width: 100%;
}

.cpa-btn:hover {
  background: var(--primary-red-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* Movie Info Panel */
.movie-info-panel {
  background: linear-gradient(180deg, var(--background-black) 0%, var(--secondary-dark) 100%);
  padding: var(--spacing-2xl) 0;
}

.movie-details {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.movie-poster img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-heavy);
}

.movie-info h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-red) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.movie-meta-detailed {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.genre-tags {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.genre-tag {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.movie-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.movie-actions {
  display: flex;
  gap: var(--spacing-md);
}

.movie-actions .action-btn {
  width: auto;
  height: auto;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  gap: var(--spacing-sm);
}

.movie-actions .action-btn.primary {
  background: var(--primary-red);
  border-color: var(--primary-red);
}

.movie-actions .action-btn.primary:hover {
  background: var(--primary-red-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.movie-actions .action-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-color);
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .trending-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
  }
  
  .movie-details {
    grid-template-columns: 250px 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 var(--spacing-md);
  }
  
  .header-left {
    gap: var(--spacing-md);
  }
  
  .desktop-search {
    display: none;
  }
  
  .trending-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-md);
  }
  
  .movie-details {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    text-align: center;
  }
  
  .movie-poster {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .movie-meta-detailed {
    justify-content: center;
  }
  
  .movie-actions {
    justify-content: center;
  }
  
  .controls-left,
  .controls-right {
    gap: var(--spacing-sm);
  }
  
  .volume-control {
    display: none;
  }
  
  .time-display {
    display: none;
  }
  
  .hero-section-enhanced {
    height: 60vh;
    min-height: 400px;
  }
  
  .toggle-option {
    min-width: 120px;
    padding: var(--spacing-sm) var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .trending-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: var(--spacing-sm);
  }
  
  .play-btn {
    width: 50px;
    height: 50px;
  }
  
  .play-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .card-content {
    padding: var(--spacing-sm);
  }
  
  .card-title {
    font-size: 0.85rem;
  }
  
  .card-meta {
    font-size: 0.75rem;
  }
  
  .video-controls {
    padding: var(--spacing-md);
  }
  
  .controls-row {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .movie-actions {
    flex-direction: column;
  }
  
  .movie-actions .action-btn {
    width: 100%;
    justify-content: center;
  }
  
  .content-toggle {
    width: 100%;
    max-width: 300px;
  }
  
  .toggle-option {
    min-width: auto;
    flex: 1;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus styles */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--primary-red);
  outline-offset: 2px;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --border-color: rgba(255, 255, 255, 0.3);
    --background-card: rgba(255, 255, 255, 0.1);
  }
}

/* Print styles */
@media print {
  .header,
  .video-player-container,
  .mobile-menu,
  .card-overlay {
    display: none !important;
  }
  
  .trending-card {
    break-inside: avoid;
  }
}