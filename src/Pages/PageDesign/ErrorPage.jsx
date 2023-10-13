import React from 'react';
import { Link } from 'react-router-dom';
import "../../Components/MainComponents/ErrorPage.scss"

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 - Page Not Found</h1>
        <p className="error-message">
          Sorry, the page you are looking for might be in another universe.
        </p>
        <p className="back-link">
          <Link to={"/"}>Go back to the homepage</Link>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
