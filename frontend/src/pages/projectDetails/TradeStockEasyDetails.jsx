import React from "react";

export default function TradeStockEasyDetails() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">📈 Trade Stock Easy (ML-Based)</h2>
        <p className="text-secondary">
          <strong>Trade Stock Easy</strong> is an intelligent trading platform designed 
          to optimize trade decisions using machine learning models and live market analysis.
        </p>

        <ul className="text-secondary">
          <li>Provides insights on trading patterns and market behavior.</li>
          <li>Reduces brokerage costs through smart analytics.</li>
          <li>Built using React.js, Node.js, Express, MongoDB, and ML modules.</li>
        </ul>

        <div className="mt-4">
          <a
            href="https://github.com/YashSingh03777/TRADE_STOCK_EASY"
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
