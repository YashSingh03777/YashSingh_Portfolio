import React from "react";

export default function Home() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-light vh-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-dark bg-opacity-75 p-5 rounded shadow-lg">
        {/* Profile Image */}
        <img
          src="/YashSingh.jpg"
          alt="Profile"
          className="rounded-circle mb-4 border border-3 border-warning"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        {/* Intro Text */}
        <h1 className="fw-bold">Hi, I’m Yash Singh</h1>
        <h4 className="text-warning mb-3">Full Stack Developer</h4>
        <p className="mb-4">
          I create modern, responsive, and user-friendly web applications with
          passion and precision.
        </p>

        {/* Call to Action */}
        <a href="/project" className="btn btn-warning fw-semibold px-4 py-2">
          View My Projects
        </a>
      </div>
    </section>
  );
}
