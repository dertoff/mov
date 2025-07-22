import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  Film,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Pause,
  ArrowLeft
} from 'lucide-react';

// Import CSS
import './App.css';

// Extended mock data with more content
const mockMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    type: "movie",
    featured: true
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    type: "movie"
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    poster: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    type: "movie"
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    genre: ["Action", "Adventure", "Drama"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.",
    type: "movie"
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.2,
    genre: ["Action", "Adventure", "Fantasy"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    type: "movie"
  },
  {
    id: 6,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.3,
    genre: ["Action", "Drama"],
    poster: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    type: "movie"
  }
];

// Header Component
const Header = ({ onSearch, searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="header-left">
            <a href="/" className="logo">
              <div className="logo-icon">
                <Film />
              </div>
              <span className="logo-text">StreamFlix</span>
            </a>
          </div>

          <div className="header-right">
            <div className="desktop-search">
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <Search className="search-icon" size={16} />
                <input
                  type="text"
                  placeholder="Search movies..."
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
                placeholder="Search movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
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

// Netflix Hero Section Component
const NetflixHero = ({ movie, onPlayClick }) => {
  const [isMuted, setIsMuted] = useState(true);

  if (!movie) return null;

  return (
    <section className="netflix-hero">
      <div className="netflix-hero-background">
        <img src={movie.backdrop} alt={movie.title} />
      </div>
      <div className="netflix-hero-gradient"></div>
      
      <div className="netflix-hero-content">
        <div className="netflix-hero-info">
          <h1 className="netflix-hero-title">{movie.title}</h1>
          
          <div className="netflix-hero-meta">
            <span className="netflix-match">98% Match</span>
            <span className="netflix-year">{movie.year}</span>
            <span className="netflix-rating">
              <Star size={16} fill="currentColor" />
              {movie.rating}
            </span>
            <span className="netflix-runtime">2h 32m</span>
          </div>
          
          <p className="netflix-hero-overview">
            {movie.overview}
          </p>
          
          <div className="netflix-hero-buttons">
            <button 
              className="netflix-btn netflix-btn-play"
              onClick={() => onPlayClick(movie)}
            >
              <Play size={20} fill="currentColor" />
              Play
            </button>
            <button className="netflix-btn netflix-btn-info">
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>

        <div className="netflix-hero-controls">
          <button 
            className="netflix-volume-btn"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          
          <div className="netflix-maturity-rating">
            18+
          </div>
        </div>
      </div>
    </section>
  );
};

// Netflix Card Component
const NetflixCard = ({ movie, onPlayClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="netflix-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="netflix-card-image">
        <img src={movie.poster} alt={movie.title} loading="lazy" />
        
        {isHovered && (
          <div className="netflix-card-overlay">
            <div className="netflix-card-info">
              <h4 className="netflix-card-title">{movie.title}</h4>
              <div className="netflix-card-meta">
                <span className="netflix-match">95% Match</span>
                <span className="netflix-year">{movie.year}</span>
                <span className="netflix-rating">
                  <Star size={12} fill="currentColor" />
                  {movie.rating}
                </span>
              </div>
              <div className="netflix-card-genres">
                {movie.genre.slice(0, 2).join(' • ')}
              </div>
            </div>
            
            <div className="netflix-card-buttons">
              <button 
                className="netflix-card-btn netflix-play-btn"
                onClick={() => onPlayClick(movie)}
              >
                <Play size={16} fill="currentColor" />
              </button>
              <button className="netflix-card-btn">
                <Plus size={16} />
              </button>
              <button className="netflix-card-btn">
                <ThumbsUp size={16} />
              </button>
              <button className="netflix-card-btn netflix-info-btn">
                <Info size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Netflix Row Component
const NetflixRow = ({ title, movies, onPlayClick }) => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="netflix-row">
      <h2 className="netflix-row-title">{title}</h2>
      <div className="netflix-row-container">
        <button 
          className="netflix-scroll-btn netflix-scroll-left"
          onClick={() => scroll('left')}
        >
          ‹
        </button>
        
        <div className="netflix-row-slider" ref={scrollContainerRef}>
          {movies.map((movie) => (
            <NetflixCard 
              key={movie.id} 
              movie={movie} 
              onPlayClick={onPlayClick}
            />
          ))}
        </div>
        
        <button 
          className="netflix-scroll-btn netflix-scroll-right"
          onClick={() => scroll('right')}
        >
          ›
        </button>
      </div>
    </div>
  );
};

// Video Player Component
const VideoPlayer = ({ movie, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [showCPA, setShowCPA] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(7200); // 2 hours

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
    <div className="netflix-video-player">
      <div className="netflix-video-header">
        <button className="netflix-back-btn" onClick={onClose}>
          <ArrowLeft size={24} />
          Back to Browse
        </button>
        <h2>{movie.title}</h2>
      </div>

      <div className="netflix-video-container">
        <video
          className="netflix-video"
          poster={movie.backdrop}
          onClick={handlePlayPause}
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {showCPA && (
          <div className="netflix-cpa-overlay">
            <div className="netflix-cpa-content">
              <h2>Continue Watching</h2>
              <p>Complete a quick offer to continue watching this movie in HD quality.</p>
              <button className="netflix-btn-primary" onClick={handleCPAAccept}>
                Complete Offer & Continue
              </button>
            </div>
          </div>
        )}

        <div className={`netflix-video-controls ${showControls ? 'visible' : ''}`}>
          <div className="netflix-controls-overlay">
            <div className="controls-left">
              <button className="netflix-play-pause-btn" onClick={handlePlayPause}>
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Home Page Component
const HomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    // Set featured movie
    const featured = mockMovies.find(movie => movie.featured) || mockMovies[0];
    setFeaturedMovie(featured);
  }, []);

  const handlePlayClick = (movie) => {
    setSelectedMovie(movie);
    setShowVideoPlayer(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePlayer = () => {
    setShowVideoPlayer(false);
    setSelectedMovie(null);
  };

  // Group movies for different rows
  const trendingMovies = mockMovies.slice(0, 6);
  const actionMovies = mockMovies.filter(movie => movie.genre.includes('Action')).slice(0, 6);
  const dramaMovies = mockMovies.filter(movie => movie.genre.includes('Drama')).slice(0, 6);

  return (
    <div className="netflix-home">
      {showVideoPlayer && selectedMovie ? (
        <VideoPlayer 
          movie={selectedMovie} 
          onClose={handleClosePlayer} 
        />
      ) : (
        <>
          <NetflixHero movie={featuredMovie} onPlayClick={handlePlayClick} />
          
          <div className="netflix-content">
            <NetflixRow 
              title="Trending Now" 
              movies={trendingMovies} 
              onPlayClick={handlePlayClick}
            />
            <NetflixRow 
              title="Action Movies" 
              movies={actionMovies} 
              onPlayClick={handlePlayClick}
            />
            <NetflixRow 
              title="Drama Movies" 
              movies={dramaMovies} 
              onPlayClick={handlePlayClick}
            />
            <NetflixRow 
              title="Popular on StreamFlix" 
              movies={mockMovies.slice(3, 6)} 
              onPlayClick={handlePlayClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

// Main App Component
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>StreamFlix - Premium Movie & TV Show Streaming Platform</title>
          <meta name="description" content="Watch unlimited movies and TV shows online for free. Stream the latest blockbusters, trending series, and classic films in HD quality." />
        </Helmet>
        
        <Header 
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;