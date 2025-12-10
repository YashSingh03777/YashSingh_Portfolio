import React from "react";

export default function TradeStockEasyDetails() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-yellow-400 font-bold text-3xl mb-4">📈 Trade Stock Easy (ML-Based)</h2>
        <p className="text-gray-400 mb-4">
          <strong>Trade Stock Easy</strong> is an intelligent trading platform designed 
          to optimize trade decisions using machine learning models and live market analysis.
        </p>

        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li>Provides insights on trading patterns and market behavior.</li>
          <li>Reduces brokerage costs through smart analytics.</li>
          <li>Built using React.js, Node.js, Express, MongoDB, and ML modules.</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://trade-frontend-d9m4.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/YashSingh03777/TRADE_STOCK_EASY"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-400 text-gray-200 font-semibold px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
