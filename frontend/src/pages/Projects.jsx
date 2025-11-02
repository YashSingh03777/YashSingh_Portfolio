// import React from "react";

// export default function Projects() {
//   return (
//     <section className="bg-dark text-light py-5">
//       <div className="container">
//         {/* Section Heading */}
//         <div className="text-center mb-5">
//           <h2 className="fw-bold text-warning">My Projects</h2>
//           <p className="text-secondary">
//             Here are some of my key projects showcasing my work in web
//             development, collaboration tools, and intelligent trading systems.
//           </p>
//         </div>

//         <div className="row g-4">
//           {/* Project 1 */}
//           <div className="col-md-4">
//             <div className="card h-100 bg-secondary text-light border-0 shadow-lg">
//               <img
//                 src="https://via.placeholder.com/400x250"
//                 className="card-img-top"
//                 alt="Student Collaboration Dashboard"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h4 className="card-title text-warning">
//                   🎓 Student Collaboration Dashboard
//                 </h4>
//                 <p className="card-text flex-grow-1">
//                   A web-based dashboard designed for faculty to track, analyze,
//                   and manage student collaboration data. It visualizes student
//                   activities, participation, and performance using static charts
//                   and tables — built for future real-time integration.
//                 </p>
//                 <div className="mb-3">
//                   <span className="badge bg-dark me-1">HTML5</span>
//                   <span className="badge bg-dark me-1">CSS3</span>
//                   <span className="badge bg-dark me-1">JavaScript</span>
//                   <span className="badge bg-dark me-1">Chart.js</span>
//                   <span className="badge bg-dark me-1">Bootstrap</span>
//                 </div>
//                 <div>
//                   <a
//                     href="https://collegedashboard-gvva.onrender.com"
//                     target="_blank"
//                     className="btn btn-warning btn-sm me-2"
//                     rel="noreferrer"
//                   >
//                     🔗 Live Demo
//                   </a>
//                   <a
//                     href="https://github.com/YashSingh03777/Minor_College_Dashboard"
//                     target="_blank"
//                     className="btn btn-outline-light btn-sm me-2"
//                     rel="noreferrer"
//                   >
//                     💻 GitHub
//                   </a>
//                   <a href="#" className="btn btn-outline-warning btn-sm">
//                     📄 Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="col-md-4">
//             <div className="card h-100 bg-secondary text-light border-0 shadow-lg">
//               <img
//                 src="https://via.placeholder.com/400x250"
//                 className="card-img-top"
//                 alt="Next Meet Video App"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h4 className="card-title text-warning">🎥 Next Meet Video App</h4>
//                 <p className="card-text flex-grow-1">
//                   A real-time video conferencing app built using Next.js and
//                   WebRTC. Supports HD video calls, chat, screen sharing, and
//                   dynamic layouts for seamless online collaboration across
//                   devices.
//                 </p>
//                 <div className="mb-3">
//                   <span className="badge bg-dark me-1">Next.js</span>
//                   <span className="badge bg-dark me-1">React</span>
//                   <span className="badge bg-dark me-1">Tailwind CSS</span>
//                   <span className="badge bg-dark me-1">WebRTC</span>
//                   <span className="badge bg-dark me-1">Socket.IO</span>
//                 </div>
//                 <div>
//                   <a
//                     href="https://nextmeetfrontend.onrender.com"
//                     target="_blank"
//                     className="btn btn-warning btn-sm me-2"
//                     rel="noreferrer"
//                   >
//                     🔗 Live Demo
//                   </a>
//                   <a
//                     href="https://github.com/YashSingh03777/Next_Video_Meet"
//                     target="_blank"
//                     className="btn btn-outline-light btn-sm me-2"
//                     rel="noreferrer"
//                   >
//                     💻 GitHub
//                   </a>
//                   <a href="#" className="btn btn-outline-warning btn-sm">
//                     📄 Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project 3 */}
//           <div className="col-md-4">
//             <div className="card h-100 bg-secondary text-light border-0 shadow-lg">
//               <img
//                 src="https://via.placeholder.com/400x250"
//                 className="card-img-top"
//                 alt="Trade Stock Easy"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h4 className="card-title text-warning">
//                   📈 Trade Stock Easy (ML-Based)
//                 </h4>
//                 <p className="card-text flex-grow-1">
//                   A trading platform that reduces brokerage costs and provides
//                   intelligent trading insights using Machine Learning models for
//                   pattern analysis and trade optimization. Currently in
//                   development phase.
//                 </p>
//                 <div className="mb-3">
//                   <span className="badge bg-dark me-1">React.js</span>
//                   <span className="badge bg-dark me-1">Node.js</span>
//                   <span className="badge bg-dark me-1">MongoDB</span>
//                   <span className="badge bg-dark me-1">Express</span>
//                   <span className="badge bg-dark me-1">Machine Learning</span>
//                 </div>
//                 <div>
//                   <a
//                     href="https://github.com/YashSingh03777/TRADE_STOCK_EASY"
//                     target="_blank"
//                     className="btn btn-outline-light btn-sm me-2"
//                     rel="noreferrer"
//                   >
//                     💻 GitHub
//                   </a>
//                   <a href="#" className="btn btn-outline-warning btn-sm">
//                     📄 Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-warning">My Projects</h2>
          <p className="text-secondary">
            Here are some of my key projects showcasing my work in web
            development, collaboration tools, and intelligent trading systems.
          </p>
        </div>

        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card h-100 bg-secondary text-light border-0 shadow-lg">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Student Collaboration Dashboard"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-warning">
                  🎓 Student Collaboration Dashboard
                </h4>
                <p className="card-text flex-grow-1">
                  A dashboard for faculty to monitor and analyze student
                  collaboration, participation, and performance visually.
                </p>
                <div className="mb-3">
                  <span className="badge bg-dark me-1">HTML5</span>
                  <span className="badge bg-dark me-1">CSS3</span>
                  <span className="badge bg-dark me-1">JavaScript</span>
                  <span className="badge bg-dark me-1">Chart.js</span>
                  <span className="badge bg-dark me-1">Bootstrap</span>
                </div>
                <div>
                  <a
                    href="https://collegedashboard-gvva.onrender.com"
                    target="_blank"
                    className="btn btn-warning btn-sm me-2"
                    rel="noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href="https://github.com/YashSingh03777/Minor_College_Dashboard"
                    target="_blank"
                    className="btn btn-outline-light btn-sm me-2"
                    rel="noreferrer"
                  >
                    💻 GitHub
                  </a>
                  <Link
                    to="/projects/student-collaboration-dashboard"
                    className="btn btn-outline-warning btn-sm"
                  >
                    📄 Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card h-100 bg-secondary text-light border-0 shadow-lg">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Next Meet Video App"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-warning">🎥 Next Meet Video App</h4>
                <p className="card-text flex-grow-1">
                  A real-time video conferencing app built using Next.js and
                  WebRTC for seamless online collaboration.
                </p>
                <div className="mb-3">
                  <span className="badge bg-dark me-1">Next.js</span>
                  <span className="badge bg-dark me-1">React</span>
                  <span className="badge bg-dark me-1">Tailwind CSS</span>
                  <span className="badge bg-dark me-1">WebRTC</span>
                  <span className="badge bg-dark me-1">Socket.IO</span>
                </div>
                <div>
                  <a
                    href="https://nextmeetfrontend.onrender.com"
                    target="_blank"
                    className="btn btn-warning btn-sm me-2"
                    rel="noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href="https://github.com/YashSingh03777/Next_Video_Meet"
                    target="_blank"
                    className="btn btn-outline-light btn-sm me-2"
                    rel="noreferrer"
                  >
                    💻 GitHub
                  </a>
                  <Link
                    to="/projects/next-meet-video-app"
                    className="btn btn-outline-warning btn-sm"
                  >
                    📄 Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card h-100 bg-secondary text-light border-0 shadow-lg">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Trade Stock Easy"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-warning">
                  📈 Trade Stock Easy (ML-Based)
                </h4>
                <p className="card-text flex-grow-1">
                  A trading platform integrating ML models for trade pattern
                  analysis, prediction, and optimization.
                </p>
                <div className="mb-3">
                  <span className="badge bg-dark me-1">React.js</span>
                  <span className="badge bg-dark me-1">Node.js</span>
                  <span className="badge bg-dark me-1">MongoDB</span>
                  <span className="badge bg-dark me-1">Express</span>
                  <span className="badge bg-dark me-1">Machine Learning</span>
                </div>
                <div>
                  <a
                    href="https://github.com/YashSingh03777/TRADE_STOCK_EASY"
                    target="_blank"
                    className="btn btn-outline-light btn-sm me-2"
                    rel="noreferrer"
                  >
                    💻 GitHub
                  </a>
                  <Link
                    to="/projects/trade-stock-easy"
                    className="btn btn-outline-warning btn-sm"
                  >
                    📄 Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
