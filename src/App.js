
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarRentalLanding from "./components/CarRentalLanding";
import SignIn from './components/SignIn';

import './App.css';


import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
// import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
   
      {/* <Navbar />
      <Routes>
         <Route path="/" element={<CarRentalLanding />} />
          <Route path="/signin" element={<SignIn />} /> 
          
        <Route path="/dashboard" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
       
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/" element={<CarRentalLanding />} />
        <Route path="/signin" element={<SignIn />} />
        
        {/* Routes with Navbar */}
        <Route path="/dashboard" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/models" element={<><Navbar /><Models /></>} />
        <Route path="/testimonials" element={<><Navbar /><TestimonialsPage /></>} />
        <Route path="/team" element={<><Navbar /><Team /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
      </Routes>
 
    </>
  );
}

export default App;





































// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CarRentalLanding from "./components/CarRentalLanding";
// import SignIn from './components/SignIn';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<CarRentalLanding />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/dashboard" element={<div style={{padding: '50px', textAlign: 'center', fontSize: '24px'}}>🚗 Dashboard Coming Soon! 🚗</div>} />
//           <Route path="/signup" element={<div style={{padding: '50px', textAlign: 'center', fontSize: '24px'}}>📝 Sign Up Page Coming Soon! 📝</div>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;