import React from "react";

export default function StudentDashboardDetails() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">🎓 Student Collaboration Dashboard</h2>
        <p className="text-secondary">
          The <strong>Student Collaboration Dashboard</strong> helps faculty track and analyze 
          student participation and group performance. It visualizes data using charts, 
          tables, and interactive panels.
        </p>

        <ul className="text-secondary">
          <li>Faculty can view participation statistics per student or group.</li>
          <li>Charts display attendance, task completion, and engagement scores.</li>
          <li>Built using HTML, CSS, JavaScript, Chart.js, and Bootstrap.</li>
        </ul>

        <div className="mt-4">
          <a
            href="https://collegedashboard-gvva.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning me-2"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/YashSingh03777/Minor_College_Dashboard"
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
