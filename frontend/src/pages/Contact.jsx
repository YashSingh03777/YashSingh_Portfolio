import React from "react";

export default function Contact() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5">Contact Me</h2>
        <div className="row align-items-center">
          {/* Left Section - Contact Info */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h4 className="fw-bold mb-3">Get In Touch</h4>
            <p className="mb-2">
              <i className="bi bi-person-fill text-warning me-2"></i>
              <strong>Name:</strong> Yash Singh
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              <strong>Email:</strong> yashsingh93804@gmail.com
            </p>

            <h5 className="fw-bold mt-4 mb-3">Connect with Me</h5>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/YashSingh03777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yash-singh-6814b9250/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Section - Google Map */}
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded shadow border border-warning">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.5750748350786!2d75.80617427504387!3d22.617728333901024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631dbbda7dd8cb%3A0x1239d998dd91b798!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya%2C%20Indore!5e0!3m2!1sen!2sin!4v1730540701105!5m2!1sen!2sin"
                title="College Location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
