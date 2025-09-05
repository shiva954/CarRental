

// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import './CarRentalLanding.scss';

// const CarRentalLanding = () => {
// const navigate = useNavigate();
//   return (
//     <div className="car-rental-landing">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <div className="nav-logo">
//             <h2>RentEasy</h2>
//           </div>
//            <button className="signup-btn" onClick={() => navigate('/signin')}>Sign In</button>
//         </div>
//       </nav>

//       {/* Header */}
//       <header className="header">
//         <div className="header-container">
//           <div className="header-content">
//             <h1>Premium Car Rental Service</h1>
//             <p>Experience luxury and convenience with our top-quality vehicles</p>
//             <button className="cta-btn">Book Now</button>
//           </div>
//           <div className="header-image">
//             <img 
//               // src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//               // src="../images/car-landing/luxury-car.png"
//               src="https://tse2.mm.bing.net/th/id/OIP.-ts1PzoBlqH8OYB_1NYT4gHaE8?pid=Api&P=0&h=180"
//               alt="Luxury Car" 
//             />
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="features-container">
//           <h2>Why Choose RentEasy?</h2>
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3>Easy Pickup</h3>
//               <p>Quick and hassle-free vehicle pickup at your preferred location with minimal paperwork</p>
//             </div>
            
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//                   <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </div>
//               <h3>24/7 Support</h3>
//               <p>Round-the-clock customer support to assist you whenever you need help during your rental</p>
//             </div>
            
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <h3>Full Insurance</h3>
//               <p>Comprehensive insurance coverage included with every rental for complete peace of mind</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-content">
//             <div className="footer-section">
//               <h3>RentEasy</h3>
//               <p>Your trusted partner for premium car rental services</p>
//             </div>
//             <div className="footer-section">
//               <h4>Services</h4>
//               <ul>
//                 <li>Luxury Cars</li>
//                 <li>Economy Cars</li>
//                 <li>SUVs</li>
//                 <li>Long-term Rental</li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li>Contact Us</li>
//                 <li>FAQ</li>
//                 <li>Terms & Conditions</li>
//                 <li>Privacy Policy</li>
//               </ul>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 RentEasy. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CarRentalLanding;


import React from 'react';
import { useNavigate } from "react-router-dom";
import './CarRentalLanding.scss';

const CarRentalLanding = () => {
  const navigate = useNavigate();
  
  const handleSignInClick = () => {
    navigate('/signin');
  };

  // const handleBookNowClick = () => {
  //   navigate('/signin');
  // };

  return (
    <div className="car-rental-landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CarRental</h2>
          </div>
          <button className="signup-btn" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <h1>Premium Car Rental Service</h1>
            <p>Experience luxury and convenience with our top-quality vehicles</p>
            <button className="cta-btn" >
              Book Now
            </button>
          </div>
          <div className="header-image">
            <img 
              src="https://tse2.mm.bing.net/th/id/OIP.-ts1PzoBlqH8OYB_1NYT4gHaE8?pid=Api&P=0&h=180"
              alt="Luxury Car" 
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2>Why Choose CarRental?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Easy Pickup</h3>
              <p>Quick and hassle-free vehicle pickup at your preferred location with minimal paperwork</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to assist you whenever you need help during your rental</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Full Insurance</h3>
              <p>Comprehensive insurance coverage included with every rental for complete peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CarRental</h3>
              <p>Your trusted partner for premium car rental services</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Luxury Cars</li>
                <li>Economy Cars</li>
                <li>SUVs</li>
                <li>Long-term Rental</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 RentEasy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarRentalLanding;
