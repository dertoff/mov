import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Play, 
  Plus, 
  ThumbsUp, 
  Info, 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  Star, 
  Calendar, 
  Clock,
  TrendingUp,
  Award,
  Film,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Pause
} from 'lucide-react';

// Import CSS
import './App.css';

// Mock data for demonstration
const mockMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    type: "movie"
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    type: "movie"
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    type: "movie"
  },
  {
    id: 4,
    title: "Breaking Bad",
    year: 2008,
    rating: 9.5,
    genre: ["Crime", "Drama", "Thriller"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    type: "tv"
  },
  {
    id: 5,
    title: "Stranger Things",
    year: 2016,
    rating: 8.7,
    genre: ["Drama", "Fantasy", "Horror"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
    type: "tv"
  },
  {
    id: 6,
    title: "The Witcher",
    year: 2019,
    rating: 8.2,
    genre: ["Action", "Adventure", "Drama"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    type: "tv"
  }
];

// Header Component
const Header = ({ onSearch, searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="header-left">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <Film />
              </div>
              <span className="logo-text">StreamFlix</span>
            </Link>
            
            <nav className="desktop-nav">
              <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Film size={16} />
                Home
              </Link>
              <Link to="/trending" className={`nav-item ${isActive('/trending') ? 'active' : ''}`}>
                <TrendingUp size={16} />
                Trending
              </Link>
              <Link to="/top-rated" className={`nav-item ${isActive('/top-rated') ? 'active' : ''}`}>
                <Award size={16} />
                Top Rated
              </Link>
              <Link to="/upcoming" className={`nav-item ${isActive('/upcoming') ? 'active' : ''}`}>
                <Calendar size={16} />
                Upcoming
              </Link>
            </nav>
          </div>

          <div className="header-right">
            <div className="desktop-search">
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <Search className="search-icon" size={16} />
                <input
                  type="text"
                  placeholder="Search movies, TV shows..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
            
            <button className="header-icon-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            
            <button className="user-avatar">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64" 
                alt="User Avatar"
              />
            </button>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-search">
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <Search className="search-icon" size={16} />
              <input
                type="text"
                placeholder="Search movies, TV shows..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          
          <nav className="mobile-nav">
            <Link 
              to="/" 
              className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Film size={20} />
              Home
            </Link>
            <Link 
              to="/trending" 
              className={`mobile-nav-item ${isActive('/trending') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <TrendingUp size={20} />
              Trending
            </Link>
            <Link 
              to="/top-rated" 
              className={`mobile-nav-item ${isActive('/top-rated') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Award size={20} />
              Top Rated
            </Link>
            <Link 
              to="/upcoming" 
              className={`mobile-nav-item ${isActive('/upcoming') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar size={20} />
              Upcoming
            </Link>
          </nav>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Enhanced Hero Section Component
const HeroSection = ({ movie }) => {
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();

  if (!movie) return null;

  return (
    <section className="hero-section-enhanced">
      <div className="hero-background">
        <img src={movie.backdrop} alt={movie.title} />
      </div>
      <div className="hero-gradient"></div>
      
      <div className="container">
        <div className="hero-content-enhanced">
          <h1 className="hero-title-enhanced">{movie.title}</h1>
          
          <div className="hero-meta-enhanced">
            <span className="hero-rating">
              <Star size={16} fill="currentColor" />
              {movie.rating}
            </span>
            <span className="hero-year">{movie.year}</span>
            <span className="hero-type">{movie.type === 'tv' ? 'TV Series' : 'Movie'}</span>
          </div>
          
          <p className="hero-description-enhanced">
            {movie.overview}
          </p>
          
          <div className="hero-buttons-enhanced">
            <button 
              className="hero-btn-play"
              onClick={() => navigate(`/watch/${movie.id}`)}
            >
              <Play size={20} fill="currentColor" />
              Play Now
            </button>
            <button className="hero-btn-play" style={{ background: 'rgba(255,255,255,0.3)' }}>
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Content Toggle Component
const ContentToggle = ({ activeTab, onTabChange, isLoading }) => {
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const updateSlider = () => {
      const activeIndex = activeTab === 'movies' ? 0 : 1;
      setSliderStyle({
        transform: `translateX(${activeIndex * 100}%)`,
        transition: 'transform 0.3s ease'
      });
    };

    updateSlider();
  }, [activeTab]);

  return (
    <div className="content-toggle-container">
      <div className="content-toggle">
        <div className="toggle-background">
          <div className="toggle-slider" style={sliderStyle}></div>
        </div>
        
        <button
          className={`toggle-option ${activeTab === 'movies' ? 'active' : ''}`}
          onClick={() => onTabChange('movies')}
          disabled={isLoading}
        >
          <Film className="toggle-icon" size={20} />
          Movies
          {isLoading && activeTab === 'movies' && (
            <div className="toggle-loading">
              <div className="loading-spinner"></div>
            </div>
          )}
        </button>
        
        <button
          className={`toggle-option ${activeTab === 'tv' ? 'active' : ''}`}
          onClick={() => onTabChange('tv')}
          disabled={isLoading}
        >
          <TrendingUp className="toggle-icon" size={20} />
          TV Shows
          {isLoading && activeTab === 'tv' && (
            <div className="toggle-loading">
              <div className="loading-spinner"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

// Trending Card Component
const TrendingCard = ({ movie, rank }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  return (
    <div className="trending-card">
      <Link to={`/movie/${movie.id}`} className="card-link">
        <div className="card-poster">
          <img src={movie.poster} alt={movie.title} loading="lazy" />
          
          <div className="card-badges">
            <div className="rating-badge">
              <Star size={12} fill="currentColor" />
              {movie.rating}
            </div>
            <div className="quality-badge">HD</div>
          </div>
          
          {rank && (
            <div className="trending-rank">
              <div className="rank-number">{rank}</div>
            </div>
          )}
        </div>
      </Link>
      
      <div className="card-overlay">
        <div className="overlay-content">
          <button 
            className="play-btn"
            onClick={() => navigate(`/watch/${movie.id}`)}
            aria-label={`Play ${movie.title}`}
          >
            <Play size={24} fill="currentColor" />
          </button>
          
          <div className="overlay-actions">
            <button 
              className={`action-btn ${isLiked ? 'active' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <ThumbsUp size={16} />
            </button>
            <button 
              className={`action-btn ${isWatchlisted ? 'active' : ''}`}
              onClick={() => setIsWatchlisted(!isWatchlisted)}
              aria-label={isWatchlisted ? 'Remove from watchlist' : 'Add to watchlist'}
            >
              <Plus size={16} />
            </button>
            <Link to={`/movie/${movie.id}`} className="action-btn" aria-label="More info">
              <Info size={16} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <div className="card-meta">
          <span className="card-year">
            <Calendar size={12} />
            {movie.year}
          </span>
          <span className="card-type">
            <Film size={12} />
            {movie.type === 'tv' ? 'TV Series' : 'Movie'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Trending Section Component
const TrendingSection = ({ movies, isLoading, activeTab }) => {
  const renderSkeletons = () => {
    return Array.from({ length: 6 }, (_, index) => (
      <div key={index} className="trending-card-skeleton">
        <div className="skeleton-poster"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-meta"></div>
        </div>
      </div>
    ));
  };

  if (isLoading) {
    return (
      <section className="trending-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Trending {activeTab === 'movies' ? 'Movies' : 'TV Shows'}
            </h2>
          </div>
          <div className="trending-grid">
            {renderSkeletons()}
          </div>
        </div>
      </section>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <section className="trending-section">
        <div className="container">
          <div className="no-content">
            <Film size={48} />
            <h3>No content available</h3>
            <p>Check back later for new {activeTab === 'movies' ? 'movies' : 'TV shows'}.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="trending-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Trending {activeTab === 'movies' ? 'Movies' : 'TV Shows'}
          </h2>
        </div>
        <div className="trending-grid">
          {movies.map((movie, index) => (
            <TrendingCard 
              key={movie.id} 
              movie={movie} 
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Video Player Component
const VideoPlayer = ({ movie, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showCPA, setShowCPA] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let hideControlsTimer;
    
    if (isPlaying && !showCPA) {
      hideControlsTimer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => clearTimeout(hideControlsTimer);
  }, [isPlaying, showCPA, showControls]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const handleCPAAccept = () => {
    setShowCPA(false);
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-player-container">
      <div className={`video-player-wrapper ${isFullscreen ? 'fullscreen' : ''}`}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <video
          className="video-element"
          poster={movie.backdrop}
          onClick={handlePlayPause}
          onMouseMove={() => setShowControls(true)}
        >
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {showCPA && (
          <div className="cpa-overlay">
            <div className="cpa-content">
              <h3>Content Advisory</h3>
              <p>This content may contain mature themes. Viewer discretion is advised.</p>
              <button className="cpa-btn" onClick={handleCPAAccept}>
                I Understand, Continue
              </button>
            </div>
          </div>
        )}

        <div className={`video-controls ${showControls ? 'visible' : ''}`}>
          <div className="controls-top">
            <div className="video-info">
              <h2 className="video-title">{movie.title}</h2>
              <div className="video-meta">
                <span className="rating">
                  <Star size={14} fill="currentColor" />
                  {movie.rating}
                </span>
                <span>{movie.year}</span>
                <span>{movie.type === 'tv' ? 'TV Series' : 'Movie'}</span>
              </div>
            </div>
          </div>

          <div className="controls-bottom">
            <div className="progress-container">
              <div className="progress-bar" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = (clickX / rect.width) * 100;
                setProgress(newProgress);
              }}>
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
                <div 
                  className="progress-thumb" 
                  style={{ left: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="controls-row">
              <div className="controls-left">
                <button className="control-btn" onClick={handlePlayPause}>
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button className="control-btn">
                  <SkipBack size={20} />
                </button>
                <button className="control-btn">
                  <SkipForward size={20} />
                </button>
                <div className="volume-control">
                  <button 
                    className="control-btn"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <input
                    type="range"
                    className="volume-slider"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(e.target.value);
                      setIsMuted(e.target.value === '0');
                    }}
                  />
                </div>
                <div className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration || 7200)}
                </div>
              </div>

              <div className="controls-right">
                <button 
                  className="control-btn"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const [activeTab, setActiveTab] = useState('movies');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    // Simulate loading and filter movies based on active tab
    setIsLoading(true);
    
    setTimeout(() => {
      const filteredMovies = mockMovies.filter(movie => 
        activeTab === 'movies' ? movie.type === 'movie' : movie.type === 'tv'
      );
      setMovies(filteredMovies);
      setFeaturedMovie(filteredMovies[0] || mockMovies[0]);
      setIsLoading(false);
    }, 800);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="home-page">
      <main className="content-container">
        <HeroSection movie={featuredMovie} />
        <ContentToggle 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          isLoading={isLoading}
        />
        <TrendingSection 
          movies={movies} 
          isLoading={isLoading}
          activeTab={activeTab}
        />
      </main>
    </div>
  );
};

// Movie Detail Page Component
const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundMovie = mockMovies.find(m => m.id === parseInt(id));
      setMovie(foundMovie);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-detail-loading">
        <div className="container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-not-found">
        <div className="container">
          <h1>Movie not found</h1>
          <Link to="/">Go back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-detail-page">
      {showPlayer && (
        <VideoPlayer 
          movie={movie} 
          onClose={() => setShowPlayer(false)} 
        />
      )}
      
      <div className="movie-info-panel">
        <div className="container">
          <div className="movie-details">
            <div className="movie-poster">
              <img src={movie.poster} alt={movie.title} />
            </div>
            
            <div className="movie-info">
              <h1>{movie.title}</h1>
              
              <div className="movie-meta-detailed">
                <div className="meta-item">
                  <Star size={16} fill="currentColor" />
                  {movie.rating}
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  {movie.year}
                </div>
                <div className="meta-item">
                  <Film size={16} />
                  {movie.type === 'tv' ? 'TV Series' : 'Movie'}
                </div>
              </div>
              
              <div className="genre-tags">
                {movie.genre.map(genre => (
                  <span key={genre} className="genre-tag">{genre}</span>
                ))}
              </div>
              
              <p className="movie-description">{movie.overview}</p>
              
              <div className="movie-actions">
                <button 
                  className="action-btn primary"
                  onClick={() => setShowPlayer(true)}
                >
                  <Play size={20} fill="currentColor" />
                  Play Now
                </button>
                <button className="action-btn secondary">
                  <Plus size={20} />
                  Add to Watchlist
                </button>
                <button className="action-btn secondary">
                  <ThumbsUp size={20} />
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Watch Page Component
const WatchPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundMovie = mockMovies.find(m => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return (
      <div className="watch-page-loading">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="watch-page">
      <VideoPlayer 
        movie={movie} 
        onClose={() => navigate('/')} 
      />
      
      <div className="related-section">
        <div className="container">
          <h2>More Like This</h2>
          <div className="trending-grid">
            {mockMovies
              .filter(m => m.id !== movie.id)
              .slice(0, 4)
              .map(relatedMovie => (
                <TrendingCard key={relatedMovie.id} movie={relatedMovie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Search Results Page Component
const SearchResultsPage = ({ searchQuery, searchResults }) => {
  return (
    <div className="search-results-page">
      <div className="search-header">
        <div className="container">
          <div className="search-title-section">
            <Search className="search-icon" size={32} />
            <h1>Search Results</h1>
          </div>
          <p className="search-subtitle">
            {searchResults.length} results for "{searchQuery}"
          </p>
        </div>
      </div>
      
      <div className="search-content">
        <div className="container">
          {searchResults.length > 0 ? (
            <div className="trending-grid">
              {searchResults.map(movie => (
                <TrendingCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <Search className="no-results-icon" size={64} />
                <h2>No results found</h2>
                <p>Try searching with different keywords</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Trending Page Component
const TrendingPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMovies(mockMovies);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="trending-page">
      <div className="page-hero">
        <div className="hero-background-gradient"></div>
        <div className="page-hero-content">
          <div className="page-icon">
            <TrendingUp size={40} />
          </div>
          <h1 className="page-title">Trending Now</h1>
          <p className="page-description">
            Discover what's popular and trending across movies and TV shows
          </p>
        </div>
      </div>
      
      <TrendingSection 
        movies={movies} 
        isLoading={isLoading}
        activeTab="all"
      />
    </div>
  );
};

// Top Rated Page Component
const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const sortedMovies = [...mockMovies].sort((a, b) => b.rating - a.rating);
      setMovies(sortedMovies);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="top-rated-page">
      <div className="page-hero">
        <div className="hero-background-gradient"></div>
        <div className="page-hero-content">
          <div className="page-icon">
            <Award size={40} />
          </div>
          <h1 className="page-title">Top Rated</h1>
          <p className="page-description">
            The highest rated movies and TV shows of all time
          </p>
        </div>
      </div>
      
      <TrendingSection 
        movies={movies} 
        isLoading={isLoading}
        activeTab="all"
      />
    </div>
  );
};

// Upcoming Page Component
const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMovies(mockMovies.slice(0, 4));
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="upcoming-page">
      <div className="page-hero">
        <div className="hero-background-gradient"></div>
        <div className="page-hero-content">
          <div className="page-icon">
            <Calendar size={40} />
          </div>
          <h1 className="page-title">Coming Soon</h1>
          <p className="page-description">
            Get ready for the most anticipated movies and shows
          </p>
        </div>
      </div>
      
      <TrendingSection 
        movies={movies} 
        isLoading={isLoading}
        activeTab="all"
      />
    </div>
  );
};

// Main App Component
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query) => {
    setIsSearching(true);
    setSearchQuery(query);
    
    // Simulate search
    setTimeout(() => {
      const results = mockMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route 
            path="/search" 
            element={
              <SearchResultsPage 
                searchQuery={searchQuery}
                searchResults={searchResults}
              />
            } 
          />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;