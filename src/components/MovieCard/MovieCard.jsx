import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Plus, Info, Star } from 'lucide-react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import { ImageNamingHelper } from '../../utils/imageOptimization';

const MovieCard = ({ movie, index = 0, onPlayClick }) => {
  const title = movie.title || movie.name;
  const releaseYear = movie.release_date || movie.first_air_date 
    ? new Date(movie.release_date || movie.first_air_date).getFullYear()
    : null;
  
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  const isTV = !!movie.name;
  
  // Generate SEO-friendly image attributes
  const imageContext = {
    title,
    type: 'poster',
    year: releaseYear,
    genre: movie.genres?.[0]?.name
  };
  
  const altText = ImageNamingHelper.generateAltText(imageContext);
  const titleText = `${title} ${isTV ? 'TV Show' : 'Movie'} Poster${releaseYear ? ` (${releaseYear})` : ''}`;
  
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const handlePlayClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onPlayClick?.(movie);
  };

  return (
    <motion.article
      className="movie-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      role="article"
      aria-labelledby={`movie-title-${movie.id}`}
      aria-describedby={`movie-meta-${movie.id}`}
    >
      <Link 
        to={`/${isTV ? 'tv' : 'movie'}/${movie.id}`} 
        className="movie-card-link"
        aria-label={`View details for ${title}`}
      >
        <div className="movie-poster-container">
          <OptimizedImage
            src={posterUrl}
            alt={altText}
            title={titleText}
            className="movie-poster"
            aspectRatio="2/3"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={index < 4} // Prioritize first 4 images
            placeholder="blur"
          />
          
          <div className="movie-overlay" role="group" aria-label="Movie actions">
            <div className="overlay-content">
              <button 
                className="play-btn"
                onClick={handlePlayClick}
                aria-label={`Play ${title}`}
                type="button"
              >
                <Play size={24} fill="currentColor" />
                <span className="sr-only">Play movie</span>
              </button>
              
              <div className="overlay-actions" role="group" aria-label="Additional actions">
                <button 
                  className="action-btn"
                  aria-label={`Add ${title} to watchlist`}
                  type="button"
                >
                  <Plus size={16} />
                  <span className="sr-only">Add to watchlist</span>
                </button>
                
                <Link 
                  to={`/${isTV ? 'tv' : 'movie'}/${movie.id}`}
                  className="action-btn"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`More info about ${title}`}
                >
                  <Info size={16} />
                  <span className="sr-only">More information</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="movie-badges" role="group" aria-label="Movie ratings and quality">
            <div className="rating-badge" role="img" aria-label={`Rating: ${rating} out of 10`}>
              <Star size={12} fill="currentColor" />
              <span>{rating}</span>
            </div>
            <div className="quality-badge" role="img" aria-label="HD Quality available">
              HD
            </div>
          </div>
        </div>
        
        <div className="movie-info">
          <h4 id={`movie-title-${movie.id}`} className="movie-title">
            {title}
          </h4>
          <div id={`movie-meta-${movie.id}`} className="movie-meta">
            <span className="movie-year" aria-label={`Released in ${releaseYear}`}>
              <Calendar size={12} aria-hidden="true" />
              {releaseYear}
            </span>
            <span className="movie-type" aria-label={`Content type: ${isTV ? 'TV Show' : 'Movie'}`}>
              {isTV ? <Tv size={12} aria-hidden="true" /> : <Film size={12} aria-hidden="true" />}
              {isTV ? 'TV Show' : 'Movie'}
            </span>
          </div>
        </div>
      </Link>
      
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": isTV ? "TVSeries" : "Movie",
            "name": title,
            "image": posterUrl,
            "datePublished": movie.release_date || movie.first_air_date,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": movie.vote_average,
              "ratingCount": movie.vote_count
            }
          })
        }}
      />
    </motion.article>
  );
};

export default MovieCard;