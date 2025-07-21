import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
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
  },
  {
    id: 7,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet.",
    type: "movie"
  },
  {
    id: 8,
    title: "The Batman",
    year: 2022,
    rating: 7.8,
    genre: ["Action", "Crime", "Drama"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    type: "movie"
  },
  {
    id: 9,
    title: "Black Panther",
    year: 2018,
    rating: 7.3,
    genre: ["Action", "Adventure", "Sci-Fi"],
    poster: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
    type: "movie"
  },
  {
    id: 10,
    title: "Wonder Woman",
    year: 2017,
    rating: 7.4,
    genre: ["Action", "Adventure", "Fantasy"],
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war.",
    type: "movie"
  },
  {
    id: 11,
    title: "Aquaman",
    year: 2018,
    rating: 6.8,
    genre: ["Action", "Adventure", "Fantasy"],
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds.",
    type: "movie"
  },
  {
    id: 12,
    title: "Joker",
    year: 2019,
    rating: 8.4,
    genre: ["Crime", "Drama", "Thriller"],
    poster: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=300&h=450",
    backdrop: "https://images.pexels.com/photos/8263332/pexels-photo-8263332.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
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
            <Link to="/" className="logo">
              <div className="logo-icon">
                <Film />
              </div>
              <span className="logo-text">StreamFlix</span>
            </Link>
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
  const scrollContainerRef = useRef(null);

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showCPA, setShowCPA] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(7200); // 2 hours
  const videoRef = useRef(null);

  useEffect(() => {
    let hideControlsTimer;
    
    if (isPlaying && !showCPA) {
      hideControlsTimer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => clearTimeout(hideControlsTimer);
  }, [isPlaying, showCPA, showControls]);

  useEffect(() => {
    let progressTimer;
    
    if (isPlaying && !showCPA) {
      progressTimer = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          setProgress((newTime / duration) * 100);
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(progressTimer);
  }, [isPlaying, showCPA, duration]);

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

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    const newTime = (newProgress / 100) * duration;
    setProgress(newProgress);
    setCurrentTime(newTime);
  };

  return (
    <div className="netflix-video-player">
      <div className="netflix-video-header">
        <button className="netflix-back-btn" onClick={onClose}>
          <ArrowLeft size={24} />
          Back to Browse
        </button>
        <h2>{movie.title}</h2>
        <div className="netflix-video-actions">
          <button className="netflix-video-action-btn">
            <User size={20} />
          </button>
        </div>
      </div>

      <div className="netflix-video-container">
        <video
          ref={videoRef}
          className="netflix-video"
          poster={movie.backdrop}
          onClick={handlePlayPause}
          onMouseMove={() => setShowControls(true)}
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {showCPA && (
          <div className="netflix-cpa-overlay">
            <div className="netflix-cpa-content">
              <h2>Continue Watching</h2>
              <p>Complete a quick offer to continue watching this movie in HD quality.</p>
              <button className="netflix-btn netflix-btn-primary" onClick={handleCPAAccept}>
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
              <button className="control-btn">
                <SkipBack size={24} />
              </button>
              <button className="control-btn">
                <SkipForward size={24} />
              </button>
              <div className="netflix-volume-controls">
                <button onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(e.target.value);
                    setIsMuted(e.target.value === '0');
                  }}
                  className="volume-slider"
                />
              </div>
              <span className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
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
          
          <div className="progress-container">
            <div className="progress-bar" onClick={handleProgressClick}>
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
        </div>
      </div>
    </div>
  );
};

// Movie Info Panel Component
const MovieInfoPanel = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="netflix-movie-info">
      <div className="netflix-info-container">
        <div className="netflix-info-main">
          <div className="netflix-info-left">
            <div className="netflix-cast-info">
              <p><span>Cast:</span> Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine</p>
              <p><span>Genres:</span> {movie.genre.join(', ')}</p>
              <p><span>This movie is:</span> Dark, Suspenseful, Exciting</p>
            </div>
          </div>
          <div className="netflix-info-right">
            <div className="netflix-episodes-info">
              <h3>About {movie.title}</h3>
              <p>{movie.overview}</p>
              <p><span>Director:</span> Christopher Nolan</p>
              <p><span>Writer:</span> Jonathan Nolan, Christopher Nolan</p>
              <p><span>Rating:</span> PG-13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Download Section Component
const DownloadSection = ({ movie }) => {
  const downloadQualities = [
    { quality: "480p", size: "1.2 GB", format: "MP4" },
    { quality: "720p", size: "2.1 GB", format: "MP4" },
    { quality: "1080p", size: "4.3 GB", format: "MP4" },
    { quality: "4K", size: "8.7 GB", format: "MP4" }
  ];

  const handleDownload = (quality) => {
    alert(`Complete the CPA offer to download ${movie.title} in ${quality.quality} quality!`);
  };

  return (
    <div className="netflix-download-section">
      <div className="netflix-info-container">
        <h2>Download {movie.title}</h2>
        <div className="netflix-download-grid">
          {downloadQualities.map((quality, index) => (
            <div key={index} className="netflix-download-card">
              <div className="download-info">
                <h4>{quality.quality} Quality</h4>
                <p>{quality.size} • {quality.format}</p>
              </div>
              <button 
                className="netflix-download-btn"
                onClick={() => handleDownload(quality)}
              >
                Download
              </button>
            </div>
          ))}
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
    // Scroll to top smoothly
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
  const sciFiMovies = mockMovies.filter(movie => movie.genre.includes('Sci-Fi')).slice(0, 6);

  return (
    <div className="netflix-home">
      {showVideoPlayer && selectedMovie ? (
        <>
          <VideoPlayer 
            movie={selectedMovie} 
            onClose={handleClosePlayer} 
          />
          <MovieInfoPanel movie={selectedMovie} />
          <DownloadSection movie={selectedMovie} />
        </>
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
              title="Sci-Fi Movies" 
              movies={sciFiMovies} 
              onPlayClick={handlePlayClick}
            />
            <NetflixRow 
              title="Popular on StreamFlix" 
              movies={mockMovies.slice(6, 12)} 
              onPlayClick={handlePlayClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

// SEO Pages (hidden from main navigation but available for SEO)
const TrendingPage = () => (
  <div className="netflix-trending-page">
    <div className="netflix-page-hero">
      <div className="netflix-hero-background-gradient"></div>
      <div className="netflix-page-hero-content">
        <div className="netflix-page-icon">📈</div>
        <h1 className="netflix-page-title">Trending Now</h1>
        <p className="netflix-page-description">Discover what's popular</p>
      </div>
    </div>
    <div className="netflix-content">
      <NetflixRow title="Trending Movies" movies={mockMovies} onPlayClick={() => {}} />
    </div>
  </div>
);

const TopRatedPage = () => (
  <div className="netflix-top-rated-page">
    <div className="netflix-page-hero">
      <div className="netflix-hero-background-gradient"></div>
      <div className="netflix-page-hero-content">
        <div className="netflix-page-icon">🏆</div>
        <h1 className="netflix-page-title">Top Rated</h1>
        <p className="netflix-page-description">The highest rated content</p>
      </div>
    </div>
    <div className="netflix-content">
      <NetflixRow title="Top Rated Movies" movies={mockMovies} onPlayClick={() => {}} />
    </div>
  </div>
);

const UpcomingPage = () => (
  <div className="netflix-upcoming-page">
    <div className="netflix-page-hero">
      <div className="netflix-hero-background-gradient"></div>
      <div className="netflix-page-hero-content">
        <div className="netflix-page-icon">📅</div>
        <h1 className="netflix-page-title">Coming Soon</h1>
        <p className="netflix-page-description">Upcoming releases</p>
      </div>
    </div>
    <div className="netflix-content">
      <NetflixRow title="Upcoming Movies" movies={mockMovies} onPlayClick={() => {}} />
    </div>
  </div>
);

// Main App Component
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Search functionality can be implemented here
    console.log('Searching for:', query);
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
          {/* SEO Pages - Hidden from main navigation but accessible via URL */}
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;