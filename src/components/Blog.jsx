import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Img } from 'react-image';
import ReactMarkdown from 'react-markdown';
import { useDarkMode } from '../hooks/useDarkMode';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const imageRef = useRef(null);
  const { theme, toggleTheme } = useDarkMode();

  // Debug logging for Blog component
  console.log('Blog component theme:', theme);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0)
  }, [slug]);

  // Global mouse event listeners for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleMove(e.clientX);
      }
    };

    const handleGlobalMouseUp = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    const imageElement = imageRef.current;
    if (!imageElement || !post.images || post.images.length <= 1) {
      setIsDragging(false);
      setStartX(0);
      setCurrentX(0);
      return;
    }

    const deltaX = currentX - startX;
    const threshold = imageElement.offsetWidth * 0.1; // 10% of image width

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swipe right - previous image
        setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : post.images.length - 1));
      } else {
        // Swipe left - next image
        setCurrentImageIndex(prev => (prev < post.images.length - 1 ? prev + 1 : 0));
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    handleEnd();
  };

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    handleEnd();
  };

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Blog Post Not Found</h1>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>The blog post you're looking for doesn't exist.</p>
            <Link
              to="/"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <article className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Header with Back Button and Dark Mode Toggle */}
        <div className="mb-8 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 font-medium"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Portfolio
          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 text-2xl mr-2 rounded-full aspect-square flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon text-gray-600"></i>
            )}
          </button>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
            {post.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-6 mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-user"></i>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-calendar"></i>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-clock"></i>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div
            className="relative group cursor-grab overflow-hidden rounded-2xl select-none"
            ref={imageRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => !isDragging && setShowLightbox(true)}
          >
            <Img
              src={post.images ? post.images[currentImageIndex] : post.image}
              alt={post.title}
              className="w-full h-80 md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              loader={<div className="w-full h-80 md:h-[500px] lg:h-[600px] bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">Loading...</div>}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
              <i className="fa-solid fa-expand text-white text-2xl"></i>
            </div>
          </div>

          {/* Image Gallery Thumbnails */}
          {post.images && post.images.length > 1 && (
            <div className="flex gap-3 mt-6 pb-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-400/50 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-600/50">
              {post.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index
                    ? 'border-primary shadow-lg scale-110'
                    : 'border-gray-200 dark:border-gray-600 hover:border-primary/50'
                    }`}
                >
                  <Img
                    src={image}
                    alt={`${post.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    loader={<div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-xl  max-w-none text-lg leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Tech Stack Section */}
        <div className={`mt-16 pt-8 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Tech Stack</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-8">
          <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Project Links</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/predatorbro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 h-12"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 h-12 shadow-lg"
            >
              <i className="fa-solid fa-eye"></i>
              Live Preview
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 h-12"
            >
              <i className="fa-brands fa-facebook"></i>
              Read on Facebook
            </a>
          </div>
        </div>

        {/* Share Section */}
        <div className={`mt-16 pt-8 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Share this post</h3>
          <div className="flex gap-4">
            <button
              onClick={() => navigator.share?.({
                title: post.title,
                text: post.title,
                url: window.location.href
              }).catch(() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              })}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-share"></i>
              Share
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2"
            >
              <i className="fa-brands fa-twitter"></i>
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              <i className="fa-brands fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>More from my blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(blogPost => blogPost.slug !== slug).map((blogPost) => (
              <Link
                key={blogPost.id}
                to={`/blog/${blogPost.slug}`}
                className={`block rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              >
                {/* Full Width Image */}
                <div className="w-full h-48 md:h-56 relative">
                  <Img
                    src={blogPost.images ? blogPost.images[0] : blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    loader={<div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i className="fa-solid fa-arrow-right text-white text-xl"></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
                    {blogPost.title}
                  </h4>

                  <div className={`flex items-center gap-3 text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-calendar text-xs"></i>
                      {new Date(blogPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-clock text-xs"></i>
                      {blogPost.readTime}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {blogPost.content.split('\n')[0].substring(0, 120)}...
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Lightbox Modal */}
      {showLightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <div className="flex flex-col items-center max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 bg-gray-800/50 hover:opacity-80 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-lg"
            >
              <i className="fa-solid fa-x"></i>
            </button>

            {/* Main Image Container */}
            <div
              className="cursor-grab select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Img
                src={post.images ? post.images[currentImageIndex] : post.image}
                alt={post.title}
                className=" max-w-[100vw] md:max-w-[80vw] max-h-[80vh] object-contain rounded-lg"
                loading="lazy"
                loader={<div className="w-96 h-96 bg-gray-700 rounded-lg flex items-center justify-center">Loading...</div>}
              />

              {/* Navigation Arrows - Overlaid on Image */}
              {post.images && post.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : post.images.length - 1))}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-xl md:text-3xl hover:text-primary transition-all duration-300 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev < post.images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-xl md:text-3xl hover:text-primary transition-all duration-300 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>

            {/* Bottom Navigation - Outside Image */}
            {post.images && post.images.length > 1 && (
              <div className="mt-6 flex flex-col items-center gap-4 fixed bottom-3 h-fit w-fit">
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 max-w-full h-full px-4">
                  {post.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index
                        ? 'border-white shadow-lg scale-110'
                        : 'border-gray-400 hover:border-white/70 hover:scale-105'
                        }`}
                    >
                      <Img
                        src={image}
                        alt={`${post.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        loader={<div className="w-full h-full bg-gray-600"></div>}
                      />
                    </button>
                  ))}
                </div>

                {/* Image Counter */}
                <div className="bg-black/70 text-white px-4 py-2 rounded-full text-base font-medium shadow-lg">
                  {currentImageIndex + 1} / {post.images.length}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
