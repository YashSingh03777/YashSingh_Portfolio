import React from "react";

export default function Projects() {
  return (
    <section className="bg-dark text-light py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-yellow-400 text-3xl font-bold mb-8">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* NextMeet Project */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">🎥 Next Meet Video App</h3>
            <p className="text-gray-300 mb-4">
              Real-time video conferencing platform using Next.js and WebRTC.
            </p>
            <div className="flex gap-3">
              <a
                href="https://nextmeetfrontend.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                🔗 Live Demo
              </a>
              <a
                href="https://github.com/YashSingh03777/Next_Video_Meet"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-400 text-gray-200 px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                💻 GitHub
              </a>
            </div>
          </div>

          {/* Trade Stock Easy Project */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">📈 Trade Stock Easy (ML-Based)</h3>
            <p className="text-gray-300 mb-4">
              Intelligent trading platform using ML models and live market analysis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://trade-frontend-d9m4.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                🔗 Live Demo
              </a>
              <a
                href="https://github.com/YashSingh03777/TRADE_STOCK_EASY"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-400 text-gray-200 px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                💻 GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
