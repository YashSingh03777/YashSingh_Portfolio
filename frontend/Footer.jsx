import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto">
      <div className="container">
        {/* About / Short bio */}
        <p className="mb-2">
          <strong>Yash Singh</strong> — Passionate Full Stack Developer crafting modern web experiences.
        </p>

        {/* Social Icons */}
        <div className="mb-2">
          <a
            href="https://www.linkedin.com/in/yash-singh-6814b9250/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2 fs-5"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/yashsingh03777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2 fs-5"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2 fs-5"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        {/* Contact Info */}
        <p className="mb-1">
          <i className="bi bi-envelope-fill me-2"></i> yashsingh93804@gmail.com
        </p>
        <p className="mb-2">
          <i className="bi bi-telephone-fill me-2"></i> +91+ --
        </p>

        {/* Copyright */}
        <small className="text-secondary">
          © {new Date().getFullYear()} Made by <span className="text-warning">Yash Singh</span>. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
