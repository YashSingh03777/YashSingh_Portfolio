import React from "react";

export default function About() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side – Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="public/YashChandel.jpg"
              alt="Yash Singh"
              className="img-fluid rounded-circle border border-3 border-warning shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* Right Side – About Details */}
          <div className="col-md-7">
            <h2 className="fw-bold text-warning mb-3">About Me</h2>

            <p className="mb-4">
              I’m <strong>Yash Singh</strong>, a passionate B.Tech student at
              <strong> Shree Vaishnav Vidyapeeth Vishwavidyalaya, Indore (MP)</strong>.  
              I have completed my schooling from
              <strong> School for Excellence, Dewas</strong> — scoring 90% in 10th
              and 78% in 12th. Along with academics, I have proudly earned the
              <strong> NCC 'A' Certificate</strong>.
            </p>

            {/* Education */}
            <div className="mb-4">
              <h5 className="text-warning mb-2">
                <i className="bi bi-mortarboard-fill me-2"></i> Education
              </h5>
              <ul className="list-unstyled">
                <li>🎓 B.Tech — Shree Vaishnav Vidyapeeth Vishwavidyalaya, Indore</li>
                <li>📊 Current CGPA — <strong>7.57 (up to 6th semester)</strong></li>
                <li>🏫 12th — School for Excellence, Dewas (78%)</li>
                <li>🏫 10th — School for Excellence, Dewas (90%)</li>
              </ul>
            </div>

            {/* Certification */}
            <div className="mb-4">
              <h5 className="text-warning mb-2">
                <i className="bi bi-award-fill me-2"></i> Certifications
              </h5>
              <ul className="list-unstyled mb-0">
                <li>🎖️ NCC 'A' Certificate</li>
                <li>💻 NPTEL — Programming in Java</li>
                <li>🗣️ NPTEL — Developing Soft Skills & Personality</li>
                <li>☁️ NPTEL — Cloud Computing</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="mb-4">
              <h5 className="text-warning mb-2">
                <i className="bi bi-heart-fill me-2"></i> Hobbies
              </h5>
              <p className="mb-0">🏏 Playing Cricket | 🌍 Traveling</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <h5 className="text-warning mb-2">
                <i className="bi bi-code-slash me-2"></i> Tech Stack
              </h5>
              <ul className="list-unstyled mb-0">
                <li>
                  💻 <strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Redux
                </li>
                <li>
                  ⚙️ <strong>Backend:</strong> Node.js, Express.js, REST API
                </li>
                <li>
                  🗄️ <strong>Databases:</strong> MySQL, MongoDB
                </li>
                <li>
                  🧰 <strong>Other Tools & Technologies:</strong> Docker, CI/CD, Kubernetes, GitHub
                </li>
              </ul>
            </div>

            {/* DSA Section */}
            <div className="mb-4">
              <h5 className="text-warning mb-2">
                <i className="bi bi-braces me-2"></i> Data Structures & Algorithms (DSA)
              </h5>
              <p className="mb-0">
                💡 Solved <strong>150+ DSA questions</strong> covering topics up to 
                <strong> Dynamic Programming (DP)</strong>.  
                Focused on mastering problem-solving and algorithmic thinking across
                platforms like <strong>LeetCode</strong> and <strong>GeeksforGeeks</strong>.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="blockquote text-secondary mt-3">
              <p className="fst-italic">“Learning never stops.”</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
