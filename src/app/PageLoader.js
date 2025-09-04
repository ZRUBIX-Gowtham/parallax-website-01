// src/components/PageLoader.jsx
import React from 'react';
import './PageLoader.css';

const PageLoader = ({ label = 'Loading your experience…' }) => {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <div className="loader-box">
        <div className="loader-logo">YourBrand</div>
        <div className="progress" aria-hidden="true"><span /></div>
        <div className="loader-text">{label}</div>
      </div>
    </div>
  );
};

export default PageLoader;