import React from "react";

export default function NextMeetDetails() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">🎥 Next Meet Video App</h2>
        <p className="text-secondary">
          <strong>Next Meet</strong> is a real-time video conferencing platform 
          developed using <strong>Next.js</strong> and <strong>WebRTC</strong>. 
          It supports group calls, screen sharing, and real-time chat.
        </p>

        <ul className="text-secondary">
          <li>Built using Next.js, React, Tailwind CSS, WebRTC, and Socket.IO.</li>
          <li>Allows HD video calls with dynamic participant layouts.</li>
          <li>Optimized for low latency and cross-device compatibility.</li>
        </ul>

        <div className="mt-4">
          <a
            href="https://nextmeetfrontend.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning me-2"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/YashSingh03777/Next_Video_Meet"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
