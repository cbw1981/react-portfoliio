import React from 'react';

function Project({ href, src, alt, overlayText, width, height }) {
  return (
    <div className="project-card">
      <a href={href}>
        <img src={src} width={width} height={height} alt={alt} />
        <div className="overlay">
          <p>{overlayText}</p>
        </div>
      </a>
    </div>
  );
}

export default Project;