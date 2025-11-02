import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light text-center">
      {/* 404 Illustration */}
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Not Found"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px" }}
      />

      {/* 404 Text */}
      <h1 className="display-4 fw-bold">404</h1>
      <p className="lead mb-4">Page Not Found</p>

      {/* Go Back Home Button */}
      <Link to="/" className="btn btn-warning fw-semibold px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
}
