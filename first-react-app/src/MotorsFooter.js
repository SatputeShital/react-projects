import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MotorsFooter = () => {
  return (
    <div>
        <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-1">© 2025 Indian Motoring Marvels</p>
        <p className="mb-1">Explore the best of Indian automotive engineering and legacy.</p>
        <div className="d-flex justify-content-center">
          <a href="#facebook" className="text-light mx-2">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#twitter" className="text-light mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#instagram" className="text-light mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default MotorsFooter
