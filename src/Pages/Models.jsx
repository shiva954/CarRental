


// import React, { useState, useEffect } from 'react';
// import Footer from "../components/Footer";
// import HeroPages from "../components/HeroPages";
// import CarImg5 from "../images/cars-big/Honda.jpg";
// import CarImg6 from "../images/cars-big/Hyundai.jpg";
// import CarImg7 from "../images/cars-big/Jeep.jpeg";
// import CarImg8 from "../images/cars-big/Kia.jpeg";
// import CarImg9 from "../images/cars-big/Mahindra.jpeg";
// import CarImg10 from "../images/cars-big/maruthi.jpeg";
// import CarImg11 from "../images/cars-big/Mg.jpeg";
// import CarImg12 from "../images/cars-big/Nissan.jpg";
// import CarImg13 from "../images/cars-big/Renault.webp";
// import CarImg14 from "../images/cars-big/Skoda.jpeg";
// import CarImg16 from "../images/cars-big/Suzuki.jpg";
// import CarImg17 from "../images/cars-big/Tata.jpeg";
// import CarImg18 from "../images/cars-big/Toyota.jpg";
// import CarImg19 from "../images/cars-big/Audi.jpeg";
// import CarImg20 from "../images/cars-big/Bajaj.jpeg";
// import CarImg1 from "../images/cars-big/Bmw.jpeg";
// import CarImg2 from "../images/cars-big/Ford.jpg";

// import CarImg4 from "../images/cars-big/Volkswagen.jpeg";
// import { Link } from "react-router-dom";

// // Car data with Indian cities and locations
// const carData = [
//   {
//     id: 1,
//     name: "Maruti Swift",
//     brand: "Maruti",
//     price: 25,
//     rating: 4,
//     seats: "4/5",
//     transmission: "Manual",
//     fuel: "Petrol",
//     image: CarImg10,
//     location: {
//       city: "Hyderabad",
//       area: "Dilsukhnagar",
//       coordinates: { lat: 19.0596, lng: 72.8295 },
//       distance: 0.8
//     },
//     available: true
//   },
//   {
//     id: 2,
//     name: "Hyundai Creta",
//     brand: "Hyundai",
//     price: 45,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Automatic",
//     fuel: "Diesel",
//     image: CarImg6,
//     location: {
//       city: "Hyderabad",
//       area: "HITEC City ",
//       coordinates: { lat: 28.6315, lng: 77.2167 },
//       distance: 1.2
//     },
//     available: true
//   },
//   {
//     id: 3,
//     name: "Toyota Innova",
//     brand: "Toyota",
//     price: 55,
//     rating: 5,
//     seats: "7/8",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImg18,
//     location: {
//       city: "Hyderabad",
//       area: "Khairatabad",
//       coordinates: { lat: 12.9279, lng: 77.6271 },
//       distance: 2.5
//     },
//     available: true
//   },
//   {
//     id: 4,
//     name: "Honda City",
//     brand: "Honda",
//     price: 35,
//     rating: 4,
//     seats: "4/5",
//     transmission: "CVT",
//     fuel: "Petrol",
//     image: CarImg5,
//     location: {
//       city: "Hyderabad",
//       area: "Kukatpally",
//       coordinates: { lat: 17.4065, lng: 78.4772 },
//       distance: 0.5
//     },
//     available: true
//   },
//   {
//     id: 5,
//     name: "Mahindra XUV500",
//     brand: "Mahindra",
//     price: 50,
//     rating: 4,
//     seats: "7/7",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImg9,
//     location: {
//       city: "Hyderabad ",
//       area: "LB Nagar",
//       coordinates: { lat: 13.0418, lng: 80.2341 },
//       distance: 3.2
//     },
//     available: false
//   },
//   {
//     id: 6,
//     name: "Volkswagen Polo",
//     brand: "Volkswagen",
//     price: 30,
//     rating: 4,
//     seats: "4/5",
//     transmission: "Manual",
//     fuel: "Petrol",
//     image: CarImg4,
//     location: {
//       city: "Hyderabad",
//       area: "KPHB Colony",
//       coordinates: { lat: 18.5367, lng: 73.8967 },
//       distance: 1.8
//     },
//     available: true
//   },
//   {
//     id: 7,
//     name: "Tata Nexon",
//     brand: "Tata",
//     price: 32,
//     rating: 4,
//     seats: "4/5",
//     transmission: "AMT",
//     fuel: "Petrol",
//     image: CarImg17,
//     location: {
//       city: "Hyderabad",
//       area: "Lakdi-ka-pul",
//       coordinates: { lat: 22.5548, lng: 88.3507 },
//       distance: 2.1
//     },
//     available: true
//   },
//   {
//     id: 8,
//     name: "Kia Seltos",
//     brand: "Kia",
//     price: 48,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Automatic",
//     fuel: "Petrol",
//     image: CarImg8,
//     location: {
//       city: "Hyderabad",
//       area: "MG Bus Station",
//       coordinates: { lat: 23.0225, lng: 72.5714 },
//       distance: 4.5
//     },
//     available: true
//   },
//   {
//     id: 9,
//     name: "Ford EcoSport",
//     brand: "Ford",
//     price: 38,
//     rating: 4,
//     seats: "4/5",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImg2,
//     location: {
//       city: "Hyderabad",
//       area: "Miyapur",
//       coordinates: { lat: 26.9124, lng: 75.7873 },
//       distance: 6.2
//     },
//     available: true
//   },
//   {
//     id: 10,
//     name: "Renault Duster",
//     brand: "Renault",
//     price: 40,
//     rating: 4,
//     seats: "5/5",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImg13,
//     location: {
//       city: "Hyderabad",
//       area: "Nampally",
//       coordinates: { lat: 26.8467, lng: 80.9462 },
//       distance: 8.1
//     },
//     available: true
//   },
//   {
//     id: 11,
//     name: "Nissan Magnite",
//     brand: "Nissan",
//     price: 28,
//     rating: 3,
//     seats: "5/5",
//     transmission: "CVT",
//     fuel: "Petrol",
//     image: CarImg12,
//     location: {
//       city: "Hyderabad",
//       area: "Punjagutta",
//       coordinates: { lat: 22.7196, lng: 75.8577 },
//       distance: 5.7
//     },
//     available: true
//   },
//   {
//     id: 12,
//     name: "Skoda Kushaq",
//     brand: "Skoda",
//     price: 52,
//     rating: 5,
//     seats: "5/5",
//     transmission: "DSG",
//     fuel: "Petrol",
//     image: CarImg14,
//     location: {
//       city: "Hyderabad",
//       area: "R.T.C. X Roads",
//       coordinates: { lat: 21.1959, lng: 72.8302 },
//       distance: 7.3
//     },
//     available: false
//   },
//   {
//     id: 13,
//     name: "MG Hector",
//     brand: "MG",
//     price: 58,
//     rating: 5,
//     seats: "5/7",
//     transmission: "DCT",
//     fuel: "Petrol",
//     image: CarImg11,
//     location: {
//       city: "Hyderabad",
//       area: "S.R. Nagar",
//       coordinates: { lat: 11.0168, lng: 76.9558 },
//       distance: 9.8
//     },
//     available: true
//   },
//   {
//     id: 14,
//     name: "Jeep Compass",
//     brand: "Jeep",
//     price: 65,
//     rating: 5,
//     seats: "5/5",
//     transmission: "9AT",
//     fuel: "Diesel",
//     image: CarImg7,
//     location: {
//       city: "Hyderabad",
//       area: "Secunderabad",
//       coordinates: { lat: 9.9312, lng: 76.2673 },
//       distance: 12.4
//     },
//     available: true
//   },
//   {
//     id: 15,
//     name: "Suzuki Vitara Brezza",
//     brand: "Suzuki",
//     price: 42,
//     rating: 4,
//     seats: "5/5",
//     transmission: "AMT",
//     fuel: "Petrol",
//     image: CarImg16,
//     location: {
//       city: "Hyderabad",
//       area: "Uppal",
//       coordinates: { lat: 17.7231, lng: 83.3012 },
//       distance: 3.9
//     },
//     available: true
//   },
//   {
//     id: 16,
//     name: "Mahindra Thar",
//     brand: "Mahindra",
//     price: 60,
//     rating: 5,
//     seats: "4/4",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImg9,
//     location: {
//       city: "Hyderabad",
//       area: "Tarnaka",
//       coordinates: { lat: 23.2599, lng: 77.4126 },
//       distance: 11.6
//     },
//     available: false
//   },
//   {
//     id: 17,
//     name: "Hyundai Venue",
//     brand: "Hyundai",
//     price: 36,
//     rating: 4,
//     seats: "5/5",
//     transmission: "iMT",
//     fuel: "Petrol",
//     image: CarImg6,
//     location: {
//       city: "Hyderabad",
//       area: "Yusufguda",
//       coordinates: { lat: 30.7333, lng: 76.7794 },
//       distance: 14.2
//     },
//     available: true
//   },
//   {
//     id: 18,
//     name: "Bajaj Qute",
//     brand: "Bajaj",
//     price: 20,
//     rating: 3,
//     seats: "4/4",
//     transmission: "Manual",
//     fuel: "CNG",
//     image: CarImg20,
//     location: {
//       city: "Hyderabad",
//       area: "Musheerabad",
//       coordinates: { lat: 21.1458, lng: 79.0882 },
//       distance: 8.7
//     },
//     available: true
//   },
//   {
//     id: 19,
//     name: "BMW 3 Series",
//     brand: "BMW",
//     price: 120,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Automatic",
//     fuel: "Petrol",
//     image: CarImg1,
//     location: {
//       city: "Hyderabad",
//       area: "Jubilee Hills Check Post",
//       coordinates: { lat: 28.4595, lng: 77.0266 },
//       distance: 15.8
//     },
//     available: true
//   },
//   {
//     id: 20,
//     name: "Audi A4",
//     brand: "Audi",
//     price: 150,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Tiptronic",
//     fuel: "Petrol",
//     image: CarImg19,
//     location: {
//       city: "Hyderabad",
//       area: "Gandhi Bhavan",
//       coordinates: { lat: 28.5706, lng: 77.3272 },
//       distance: 18.3
//     },
//     available: false
//   }
// ];

// function Models() {
//   const [cars, setCars] = useState(carData);
//   const [filteredCars, setFilteredCars] = useState(carData);
//   const [userLocation, setUserLocation] = useState(null);
//   const [searchFilters, setSearchFilters] = useState({
//     location: '',
//     maxDistance: 10,
//     priceRange: [0, 200],
//     brand: '',
//     available: true
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate user login and location detection
//   useEffect(() => {
//     const checkUserLogin = () => {
//       // Simulate checking if user is logged in
//       // Replace this with your actual authentication check
//       const userIsLoggedIn = true; // This should come from your auth system
      
//       if (userIsLoggedIn && "geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//               city: "Hyderabad", // This would come from reverse geocoding API
//               area: "Branch In"
//             });
//             setIsLoggedIn(true);
//             setIsLoading(false);
//           },
//           (error) => {
//             // Fallback to default location
//             setUserLocation({
//               lat: 19.0596,
//               lng: 72.8295,
//               city: "Hyderabad",
//               area: "Branch In"
//             });
//             setIsLoggedIn(true);
//             setIsLoading(false);
//           }
//         );
//       } else {
//         // User not logged in or no geolocation support
//         setUserLocation({
//           lat: 19.0596,
//           lng: 72.8295,
//           city: "HYderabad",
//           area: "Branch In"
//         });
//         setIsLoggedIn(userIsLoggedIn);
//         setIsLoading(false);
//       }
//     };

//     checkUserLogin();
//   }, []);

//   // Filter cars based on search criteria
//   useEffect(() => {
//     let filtered = [...cars];

//     // Filter by location/distance when user is logged in
//     if (isLoggedIn && userLocation && searchFilters.maxDistance) {
//       filtered = filtered.filter(car => car.location.distance <= searchFilters.maxDistance);
//     }

//     // Filter by location search
//     if (searchFilters.location) {
//       filtered = filtered.filter(car => 
//         car.location.city.toLowerCase().includes(searchFilters.location.toLowerCase()) ||
//         car.location.area.toLowerCase().includes(searchFilters.location.toLowerCase())
//       );
//     }

//     // Filter by brand
//     if (searchFilters.brand) {
//       filtered = filtered.filter(car => 
//         car.brand.toLowerCase().includes(searchFilters.brand.toLowerCase())
//       );
//     }

//     // Filter by price range
//     filtered = filtered.filter(car => 
//       car.price >= searchFilters.priceRange[0] && car.price <= searchFilters.priceRange[1]
//     );

//     // Filter by availability
//     if (searchFilters.available) {
//       filtered = filtered.filter(car => car.available);
//     }

//     // Sort by distance (nearest first) when user is logged in
//     if (isLoggedIn) {
//       filtered.sort((a, b) => a.location.distance - b.location.distance);
//     }

//     setFilteredCars(filtered);
//   }, [cars, searchFilters, userLocation, isLoggedIn]);

//   const handleFilterChange = (key, value) => {
//     setSearchFilters(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   if (isLoading) {
//     return (
//       <section className="models-section">
//         <HeroPages name="Vehicle Models" />
//         <div className="container">
//           <div style={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             height: '400px',
//             flexDirection: 'column',
//             gap: '2rem'
//           }}>
//             <div style={{
//               border: '4px solid #f3f3f3',
//               borderTop: '4px solid #ff4d30',
//               borderRadius: '50%',
//               width: '40px',
//               height: '40px',
//               animation: 'spin 2s linear infinite'
//             }}></div>
//             <p style={{ fontSize: '1.8rem', color: '#777' }}>
//               {isLoggedIn ? 'Getting your location...' : 'Loading...'}
//             </p>
//           </div>
//         </div>
//         <Footer />
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="models-section">
//         <HeroPages name="Vehicle Models" />
        
//         {/* Search and Filter Section */}
//         <div className="container">
//           <div style={{
//             backgroundColor: 'white',
//             padding: '3rem',
//             marginBottom: '4rem',
//             borderRadius: '0.5rem',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             border: '1px solid #e5e5e5'
//           }}>
//             {isLoggedIn && userLocation && (
//               <div style={{ 
//                 textAlign: 'center', 
//                 marginBottom: '2rem',
//                 padding: '1.5rem',
//                 backgroundColor: '#f8f9fa',
//                 borderRadius: '0.3rem',
//                 border: '1px solid #dee2e6'
//               }}>
//                 {/* <h3 style={{ 
//                   fontSize: '2rem', 
//                   color: '#ff4d30', 
//                   marginBottom: '0.5rem',
//                   fontWeight: '700'
//                 }}>
//                   <i className="fa-solid fa-location-dot"></i> Your Location: {userLocation.area}, {userLocation.city}
//                 </h3> */}
//                 <p style={{ 
//                   fontSize: '1.6rem', 
//                   color: '#666',
//                   margin: 0
//                 }}>
//                   Showing {filteredCars.length} vehicles within {searchFilters.maxDistance} km
//                 </p>
//               </div>
//             )}

//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr 200px auto',
//               gap: '2rem',
//               alignItems: 'end',
//               marginBottom: showFilters ? '2rem' : '0'
//             }}>
//               {/* Location Search */}
//               <div>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '1.6rem',
//                   fontWeight: '600',
//                   color: '#333',
//                   marginBottom: '1rem'
//                 }}>
//                   <i className="fa-solid fa-search"></i> Search Location
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter city or area..."
//                   style={{
//                     width: '100%',
//                     padding: '1.2rem 1.5rem',
//                     fontSize: '1.6rem',
//                     border: '2px solid #ddd',
//                     borderRadius: '0.3rem',
//                     outline: 'none',
//                     transition: 'border-color 0.3s'
//                   }}
//                   value={searchFilters.location}
//                   onChange={(e) => handleFilterChange('location', e.target.value)}
//                   onFocus={(e) => e.target.style.borderColor = '#ff4d30'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </div>

//               {/* Distance Filter */}
//               {isLoggedIn && (
//                 <div>
//                   <label style={{
//                     display: 'block',
//                     fontSize: '1.6rem',
//                     fontWeight: '600',
//                     color: '#333',
//                     marginBottom: '1rem'
//                   }}>
//                     <i className="fa-solid fa-route"></i> Max Distance: {searchFilters.maxDistance} km
//                   </label>
//                   <input
//                     type="range"
//                     min="1"
//                     max="50"
//                     value={searchFilters.maxDistance}
//                     onChange={(e) => handleFilterChange('maxDistance', parseInt(e.target.value))}
//                     style={{
//                       width: '100%',
//                       height: '6px',
//                       borderRadius: '5px',
//                       background: '#ddd',
//                       outline: 'none',
//                       cursor: 'pointer'
//                     }}
//                   />
//                 </div>
//               )}

//               {/* Filter Toggle Button */}
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 style={{
//                   padding: '1.2rem 2rem',
//                   fontSize: '1.6rem',
//                   backgroundColor: '#f8f9fa',
//                   border: '2px solid #ddd',
//                   borderRadius: '0.3rem',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s',
//                   fontWeight: '600',
//                   color: '#333'
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.backgroundColor = '#e9ecef';
//                   e.target.style.borderColor = '#ff4d30';
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.backgroundColor = '#f8f9fa';
//                   e.target.style.borderColor = '#ddd';
//                 }}
//               >
//                 <i className="fa-solid fa-filter"></i> More Filters
//               </button>
//             </div>

//             {/* Advanced Filters */}
//             {showFilters && (
//               <div style={{
//                 paddingTop: '2rem',
//                 borderTop: '1px solid #dee2e6',
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                 gap: '2rem'
//               }}>
//                 <div>
//                   <label style={{
//                     display: 'block',
//                     fontSize: '1.6rem',
//                     fontWeight: '600',
//                     color: '#333',
//                     marginBottom: '1rem'
//                   }}>
//                     <i className="fa-solid fa-car"></i> Brand
//                   </label>
//                   <select
//                     value={searchFilters.brand}
//                     onChange={(e) => handleFilterChange('brand', e.target.value)}
//                     style={{
//                       width: '100%',
//                       padding: '1.2rem',
//                       fontSize: '1.6rem',
//                       border: '2px solid #ddd',
//                       borderRadius: '0.3rem',
//                       outline: 'none',
//                       backgroundColor: 'white'
//                     }}
//                   >
//                     <option value="">All Brands</option>
//                     <option value="Maruti">Maruti Suzuki</option>
//                     <option value="Hyundai">Hyundai</option>
//                     <option value="Toyota">Toyota</option>
//                     <option value="Honda">Honda</option>
//                     <option value="Mahindra">Mahindra</option>
//                     <option value="Tata">Tata</option>
//                     <option value="Kia">Kia</option>
//                     <option value="Ford">Ford</option>
//                     <option value="Renault">Renault</option>
//                     <option value="Nissan">Nissan</option>
//                     <option value="Skoda">Skoda</option>
//                     <option value="MG">MG</option>
//                     <option value="Jeep">Jeep</option>
//                     <option value="Suzuki">Suzuki</option>
//                     <option value="Bajaj">Bajaj</option>
//                     <option value="BMW">BMW</option>
//                     <option value="Audi">Audi</option>
//                     <option value="Volkswagen">Volkswagen</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label style={{
//                     display: 'block',
//                     fontSize: '1.6rem',
//                     fontWeight: '600',
//                     color: '#333',
//                     marginBottom: '1rem'
//                   }}>
//                     <i className="fa-solid fa-dollar-sign"></i> Max Price: ${searchFilters.priceRange[1]}
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="200"
//                     value={searchFilters.priceRange[1]}
//                     onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
//                     style={{
//                       width: '100%',
//                       height: '6px',
//                       borderRadius: '5px',
//                       background: '#ddd',
//                       outline: 'none',
//                       cursor: 'pointer'
//                     }}
//                   />
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//                   <input
//                     type="checkbox"
//                     id="available"
//                     checked={searchFilters.available}
//                     onChange={(e) => handleFilterChange('available', e.target.checked)}
//                     style={{ width: '18px', height: '18px' }}
//                   />
//                   <label htmlFor="available" style={{
//                     fontSize: '1.6rem',
//                     fontWeight: '600',
//                     color: '#333'
//                   }}>
//                     <i className="fa-solid fa-check-circle"></i> Available only
//                   </label>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Results Count */}
//           {isLoggedIn && (
//             <div style={{ 
//               textAlign: 'center', 
//               marginBottom: '3rem',
//               fontSize: '1.8rem',
//               color: '#666'
//             }}>
//               Found {filteredCars.length} vehicles near {userLocation?.area}, {userLocation?.city}
//             </div>
//           )}

//           {/* Car Grid */}
//           <div className="models-div">
//             {filteredCars.map(car => (
//               <div key={car.id} className="models-div__box">
//                 <div className="models-div__box__img">
//                   <img src={car.image} alt="car_img" />
//                   {/* Distance Badge */}
//                   {isLoggedIn && (
//                     <div style={{
//                       position: 'absolute',
//                       top: '1rem',
//                       left: '1rem',
//                       backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                       color: 'white',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '0.3rem',
//                       fontSize: '1.4rem',
//                       fontWeight: '600'
//                     }}>
//                       <i className="fa-solid fa-location-dot"></i> {car.location.distance} km
//                     </div>
//                   )}
//                   {/* Availability Badge */}
//                   {!car.available && (
//                     <div style={{
//                       position: 'absolute',
//                       top: '1rem',
//                       right: '1rem',
//                       backgroundColor: '#dc3545',
//                       color: 'white',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '0.3rem',
//                       fontSize: '1.4rem',
//                       fontWeight: '600'
//                     }}>
//                       Unavailable
//                     </div>
//                   )}
//                   <div className="models-div__box__descr">
//                     <div className="models-div__box__descr__name-price">
//                       <div className="models-div__box__descr__name-price__name">
//                         <p>{car.name}</p>
//                         <span>
//                           {[...Array(car.rating)].map((_, i) => (
//                             <i key={i} className="fa-solid fa-star"></i>
//                           ))}
//                         </span>
//                       </div>
//                       <div className="models-div__box__descr__name-price__price">
//                         <h4>${car.price}</h4>
//                         <p>per day</p>
//                       </div>
//                     </div>
//                     <div className="models-div__box__descr__name-price__details">
//                       <span>
//                         <i className="fa-solid fa-car-side"></i> &nbsp; {car.brand}
//                       </span>
//                       <span style={{ textAlign: "right" }}>
//                         {car.seats} &nbsp; <i className="fa-solid fa-car-side"></i>
//                       </span>
//                       <span>
//                         <i className="fa-solid fa-car-side"></i> &nbsp; {car.transmission}
//                       </span>
//                       <span style={{ textAlign: "right" }}>
//                         {car.fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
//                       </span>
//                     </div>
//                     {/* Location Info */}
//                     {isLoggedIn && (
//                       <div style={{
//                         textAlign: 'center',
//                         padding: '1rem 0',
//                         borderBottom: '1px solid #c6c6c6',
//                         marginBottom: '2rem',
//                         color: '#777',
//                         fontSize: '1.5rem'
//                       }}>
//                         <i className="fa-solid fa-map-marker-alt"></i> {car.location.area}, {car.location.city}
//                       </div>
//                     )}
//                     <div className={`models-div__box__descr__name-price__btn ${!car.available ? 'disabled' : ''}`}>
//                       <Link 
//                         onClick={() => car.available && window.scrollTo(0, 0)} 
//                         to={car.available ? "/" : "#"}
//                         style={{
//                           opacity: car.available ? 1 : 0.5,
//                           pointerEvents: car.available ? 'auto' : 'none'
//                         }}
//                       >
//                         {car.available ? 'Book Ride' : 'Not Available'}
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* No Results Message */}
//           {filteredCars.length === 0 && (
//             <div style={{
//               textAlign: 'center',
//               padding: '5rem 0',
//               color: '#666'
//             }}>
//               <i className="fa-solid fa-car" style={{ fontSize: '5rem', marginBottom: '2rem', color: '#ddd' }}></i>
//               <h3 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>No vehicles found</h3>
//               <p style={{ fontSize: '1.8rem' }}>Try adjusting your search filters or increasing the distance range.</p>
//             </div>
//           )}
//         </div>

//         <div className="book-banner">
//           <div className="book-banner__overlay"></div>
//           <div className="container">
//             <div className="text-content">
//               <h2>Book a car by getting in touch with us</h2>
//               <span>
//                 <i className="fa-solid fa-phone"></i>
//                 <h3>(123) 456-7869</h3>
//               </span>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </section>

//       {/* Loading Animation Styles */}
//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         .models-div__box__img {
//           position: relative;
//         }
        
//         .models-div__box__descr__name-price__btn.disabled {
//           background-color: #ccc !important;
//           border-color: #ccc !important;
//           cursor: not-allowed !important;
//         }
        
//         .models-div__box__descr__name-price__btn.disabled:hover {
//           background-color: #ccc !important;
//           box-shadow: none !important;
//         }
        
//         input[type="range"]::-webkit-slider-thumb {
//           appearance: none;
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #ff4d30;
//           cursor: pointer;
//         }
        
//         input[type="range"]::-moz-range-thumb {
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #ff4d30;
//           cursor: pointer;
//           border: none;
//         }
        
//         @media (max-width: 1150px) {
//           div[style*="gridTemplateColumns: '1fr 1fr 200px auto'"] {
//             grid-template-columns: 1fr 1fr !important;
//             gap: 1.5rem !important;
//           }
//         }
        
//         @media (max-width: 800px) {
//           div[style*="gridTemplateColumns: '1fr 1fr 200px auto'"] {
//             grid-template-columns: 1fr !important;
//             gap: 1.5rem !important;
//           }
          
//           div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)'"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Models;





// import React, { useState, useEffect, useRef } from "react";

// // ---- Haversine Formula ----
// const haversineDistance = (coords1, coords2) => {
//   const toRad = (x) => (x * Math.PI) / 180;
//   const R = 6371;

//   const dLat = toRad(coords2.lat - coords1.lat);
//   const dLon = toRad(coords2.lng - coords1.lng);
//   const lat1 = toRad(coords1.lat);
//   const lat2 = toRad(coords2.lat);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// };

// // ---- Green Dot for branch markers ----
// const greenDotSVG = () => `
//   <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="12" cy="12" r="8" fill="#4CAF50"/>
//   </svg>
// `;

// // ---- Red Dot for user location ----
// const redDotSVG = () => `
//   <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="12" cy="12" r="10" fill="#FF4444" stroke="#FFFFFF" stroke-width="2"/>
//   </svg>
// `;

// // ---- Office Branches ----
// const officeBranches = [
//   { name: "Hitech City", position: { lat: 17.4443, lng: 78.3789 } },
//   { name: "Kondapur", position: { lat: 17.4589, lng: 78.3846 } },
//   { name: "Madhapur", position: { lat: 17.4454, lng: 78.3813 } },
//   { name: "Gachibowli", position: { lat: 17.4401, lng: 78.3489 } },
//   { name: "LB Nagar", position: { lat: 17.3419, lng: 78.552 } },
// ];

// // ---- Mock Car Data API ----
// const fetchCarsForBranch = async (branchName) => {
//   const mockCars = {
//     "Hitech City": [
//       { id: 1, name: "Hyundai i20", type: "Hatchback", price: "₹2000/day" },
//       { id: 2, name: "Toyota Innova", type: "SUV", price: "₹3500/day" },
//       { id: 11, name: "Honda Amaze", type: "Sedan", price: "₹2200/day" },
//     ],
//     "Kondapur": [
//       { id: 3, name: "Honda City", type: "Sedan", price: "₹2500/day" },
//       { id: 12, name: "Maruti Baleno", type: "Hatchback", price: "₹2100/day" },
//     ],
//     "Madhapur": [
//       { id: 4, name: "Maruti Swift", type: "Hatchback", price: "₹1800/day" },
//       { id: 13, name: "Hyundai Verna", type: "Sedan", price: "₹2800/day" },
//     ],
//     "Gachibowli": [
//       { id: 5, name: "Mahindra XUV500", type: "SUV", price: "₹4000/day" },
//       { id: 14, name: "Ford EcoSport", type: "SUV", price: "₹3200/day" },
//     ],
//     "LB Nagar": [
//       { id: 6, name: "Tata Nexon", type: "SUV", price: "₹2800/day" },
//       { id: 15, name: "Maruti Dzire", type: "Sedan", price: "₹2300/day" },
//     ],
//   };

//   return mockCars[branchName] || [];
// };

// const Models = () => {
//   const [map, setMap] = useState(null);
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [isMapsApiLoaded, setIsMapsApiLoaded] = useState(false);
//   const [userMarker, setUserMarker] = useState(null);
//   const [branchMarkers, setBranchMarkers] = useState([]);
//   const [cars, setCars] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [nearbyBranches, setNearbyBranches] = useState([]);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const autocompleteRef = useRef(null);

//   const GOOGLE_MAPS_API_KEY = "AIzaSyCdUKj-j6A5yysU6wwkSfZF-2y-77qXofk";

//   // ---- Load Google Maps API ----
//   useEffect(() => {
//     const loadScript = () => {
//       if (window.google && window.google.maps && window.google.maps.marker) {
//         setIsMapsApiLoaded(true);
//         return;
//       }
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places,marker`;
//       script.async = true;
//       script.defer = true;
//       script.onerror = () => {
//         setMessage("Failed to load Google Maps script.");
//         setIsError(true);
//       };
//       script.onload = () => setIsMapsApiLoaded(true);
//       document.head.appendChild(script);
//     };
//     loadScript();
//   }, []);

//   // ---- Initialize Map ----
//   useEffect(() => {
//     if (isMapsApiLoaded) {
//       const defaultLocation = { lat: 17.4243, lng: 78.4332 };
//       const newMap = new window.google.maps.Map(document.getElementById("map"), {
//         zoom: 12,
//         center: defaultLocation,
//       });
//       setMap(newMap);
//       setMessage("Map loaded. Enter your location or allow location access.");

//       // Setup autocomplete
//       const autocomplete = new window.google.maps.places.Autocomplete(
//         autocompleteRef.current,
//         {
//           bounds: new window.google.maps.LatLngBounds(
//             new window.google.maps.LatLng(17.2, 78.1),
//             new window.google.maps.LatLng(17.7, 78.7)
//           ),
//         }
//       );

//       autocomplete.addListener("place_changed", () => {
//         const place = autocomplete.getPlace();
//         if (place.geometry && place.geometry.location) {
//           const newCoords = {
//             lat: place.geometry.location.lat(),
//             lng: place.geometry.location.lng(),
//           };
//           updateMapWithLocation(newCoords, newMap, place.formatted_address || place.name);
//         } else {
//           setMessage("Please select a valid location from the dropdown.");
//           setIsError(true);
//         }
//       });

//       // Try to get user's current location
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const userCoords = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             };
//             updateMapWithLocation(userCoords, newMap, "Your Current Location");
//           },
//           (error) => {
//             console.log("Geolocation error:", error.message);
//             setMessage("Could not access your location. Please search for your location manually.");
//           }
//         );
//       }
//     }
//   }, [isMapsApiLoaded]);

//   // ---- Update Map with Location ----
//   const updateMapWithLocation = async (coords, currentMap, locationName = "Selected Location") => {
//     setCurrentLocation(coords);
//     setIsError(false);
    
//     // Clear existing markers
//     if (userMarker) userMarker.setMap(null);
//     branchMarkers.forEach((m) => m.setMap(null));
//     setBranchMarkers([]);

//     // Create user location marker with red dot
//     const userMarkerElement = document.createElement("div");
//     userMarkerElement.innerHTML = redDotSVG();
//     const newUserMarker = new window.google.maps.marker.AdvancedMarkerElement({
//       position: coords,
//       map: currentMap,
//       content: userMarkerElement,
//       title: locationName,
//     });
//     setUserMarker(newUserMarker);

//     currentMap.setCenter(coords);
//     currentMap.setZoom(13);

//     // Find nearby branches and sort by distance
//     const branchesWithDistance = officeBranches.map((branch) => ({
//       ...branch,
//       distance: haversineDistance(coords, branch.position),
//     }));

//     const nearbyBranchesData = branchesWithDistance
//       .filter((branch) => branch.distance <= 5)
//       .sort((a, b) => a.distance - b.distance);

//     setNearbyBranches(nearbyBranchesData);

//     if (nearbyBranchesData.length > 0) {
//       // Create markers for nearby branches
//       const newMarkers = nearbyBranchesData.map((branch) => {
//         const markerElement = document.createElement("div");
//         markerElement.innerHTML = greenDotSVG();
//         const marker = new window.google.maps.marker.AdvancedMarkerElement({
//           position: branch.position,
//           map: currentMap,
//           content: markerElement,
//           title: `${branch.name} (${branch.distance.toFixed(1)} km away)`,
//         });

//         // Add click listener to each branch marker
//         marker.addListener("click", () => {
//           loadCarsForBranch(branch.name);
//         });

//         return marker;
//       });
//       setBranchMarkers(newMarkers);

//       // Load cars from the closest branch by default
//       const closestBranch = nearbyBranchesData[0];
//       await loadCarsForBranch(closestBranch.name);

//       setMessage(
//         `Found ${nearbyBranchesData.length} branch(es) within 5 km. Showing cars from the closest branch: ${closestBranch.name} (${closestBranch.distance.toFixed(1)} km away).`
//       );
//     } else {
//       setCars([]);
//       setSelectedBranch("");
//       setMessage("No branches found within 5 km of your location.");
//     }
//   };

//   // ---- Load Cars for Selected Branch ----
//   const loadCarsForBranch = async (branchName) => {
//     setSelectedBranch(branchName);
//     const carsData = await fetchCarsForBranch(branchName);
//     setCars(carsData);
    
//     const branch = nearbyBranches.find(b => b.name === branchName);
//     if (branch) {
//       setMessage(
//         `Showing ${carsData.length} available cars from ${branchName} branch (${branch.distance.toFixed(1)} km away).`
//       );
//     }
//   };

//   return (
//     <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
//       <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-5xl flex flex-col space-y-6">
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           Branch & Car Locator
//         </h1>

//         <div className="flex flex-col space-y-2">
//           <input
//             ref={autocompleteRef}
//             type="text"
//             placeholder="Search for your location (e.g., Hitech City, Hyderabad)"
//             className="p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
//           />
//           <p className="text-sm text-gray-500">
//             🔴 Red marker = Your location | 🟢 Green markers = Available branches
//           </p>
//         </div>

//         {message && (
//           <div
//             className={`text-center py-2 px-4 text-sm font-medium rounded-md ${
//               isError ? "bg-red-100 text-red-500" : "bg-blue-100 text-blue-600"
//             }`}
//           >
//             {message}
//           </div>
//         )}

//         <div
//           id="map"
//           className="rounded-xl shadow-md border-2 border-gray-200"
//           style={{ height: "400px", width: "100%" }}
//         ></div>

//         {/* Branch Selection Dropdown */}
//         {nearbyBranches.length > 1 && (
//           <div className="flex flex-col space-y-2">
//             <label className="text-sm font-medium text-gray-700">
//               Choose a branch to view cars:
//             </label>
//             <select
//               value={selectedBranch}
//               onChange={(e) => loadCarsForBranch(e.target.value)}
//               className="p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
//             >
//               {nearbyBranches.map((branch) => (
//                 <option key={branch.name} value={branch.name}>
//                   {branch.name} ({branch.distance.toFixed(1)} km away)
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Available Cars Section */}
//         {cars.length > 0 && (
//           <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Available Cars at {selectedBranch}
//             </h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cars.map((car) => (
//                 <div
//                   key={car.id}
//                   className="p-4 border rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition-shadow"
//                 >
//                   <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
//                   <p className="text-gray-600">{car.type}</p>
//                   <p className="text-blue-600 font-semibold text-lg">{car.price}</p>
//                   <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {nearbyBranches.length === 0 && currentLocation && (
//           <div className="text-center py-8">
//             <p className="text-gray-600 mb-4">
//               No branches found within 5 km of your location.
//             </p>
//             <p className="text-sm text-gray-500">
//               Try searching for a different location closer to our service areas.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Models;




// import React, { useState, useEffect, useRef } from "react";

// // ---- Haversine Formula ----
// const haversineDistance = (coords1, coords2) => {
//   const toRad = (x) => (x * Math.PI) / 180;
//   const R = 6371; // Earth radius in kilometers

//   const dLat = toRad(coords2.lat - coords1.lat);
//   const dLon = toRad(coords2.lng - coords1.lng);
//   const lat1 = toRad(coords1.lat);
//   const lat2 = toRad(coords2.lat);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// };

// // ---- User Location Marker (Red) ----
// const userLocationMarker = () => `
//   <div style="
//     width: 20px; 
//     height: 20px; 
//     background-color: #FF4444; 
//     border: 3px solid white; 
//     border-radius: 50%; 
//     box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//   ">
//     <div style="
//       width: 6px; 
//       height: 6px; 
//       background-color: white; 
//       border-radius: 50%;
//     "></div>
//   </div>
// `;

// // ---- Branch Location Marker (Green) ----
// const branchLocationMarker = (branchName) => `
//   <div style="
//     background-color: #4CAF50; 
//     color: white; 
//     padding: 4px 8px; 
//     border-radius: 12px; 
//     font-size: 12px;
//     font-weight: bold;
//     box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//     border: 2px solid white;
//     white-space: nowrap;
//   ">
//     ${branchName}
//   </div>
// `;

// // ---- Office Branches with expanded coverage ----
// const officeBranches = [
//   { name: "Hitech City", position: { lat: 17.4443, lng: 78.3789 } },
//   { name: "Kondapur", position: { lat: 17.4589, lng: 78.3846 } },
//   { name: "Madhapur", position: { lat: 17.4454, lng: 78.3813 } },
//   { name: "Gachibowli", position: { lat: 17.4401, lng: 78.3489 } },
//   { name: "LB Nagar", position: { lat: 17.3419, lng: 78.552 } },
//   { name: "Secunderabad", position: { lat: 17.4399, lng: 78.4983 } },
//   { name: "Banjara Hills", position: { lat: 17.4126, lng: 78.4482 } },
//   { name: "Jubilee Hills", position: { lat: 17.4239, lng: 78.4138 } },
//   { name: "Ameerpet", position: { lat: 17.4374, lng: 78.4482 } },
//   { name: "Kukatpally", position: { lat: 17.4842, lng: 78.4076 } },
// ];

// // ---- Enhanced Mock Car Data ----
// const fetchCarsForBranch = async (branchName) => {
//   const mockCars = {
//     "Hitech City": [
//       { id: 1, name: "Hyundai i20", type: "Hatchback", price: "₹2000/day", fuel: "Petrol", seats: 5, rating: 4.5 },
//       { id: 2, name: "Toyota Innova", type: "SUV", price: "₹3500/day", fuel: "Diesel", seats: 7, rating: 4.8 },
//       { id: 11, name: "Honda Amaze", type: "Sedan", price: "₹2200/day", fuel: "Petrol", seats: 5, rating: 4.4 },
//     ],
//     "Kondapur": [
//       { id: 3, name: "Honda City", type: "Sedan", price: "₹2500/day", fuel: "Petrol", seats: 5, rating: 4.6 },
//       { id: 12, name: "Maruti Baleno", type: "Hatchback", price: "₹2100/day", fuel: "Petrol", seats: 5, rating: 4.3 },
//       { id: 13, name: "Tata Nexon", type: "SUV", price: "₹2800/day", fuel: "Petrol", seats: 5, rating: 4.5 },
//     ],
//     "Madhapur": [
//       { id: 4, name: "Maruti Swift", type: "Hatchback", price: "₹1800/day", fuel: "Petrol", seats: 5, rating: 4.2 },
//       { id: 14, name: "Hyundai Verna", type: "Sedan", price: "₹2800/day", fuel: "Diesel", seats: 5, rating: 4.7 },
//       { id: 15, name: "Mahindra XUV300", type: "SUV", price: "₹3200/day", fuel: "Diesel", seats: 5, rating: 4.6 },
//     ],
//     "Gachibowli": [
//       { id: 5, name: "Mahindra XUV500", type: "SUV", price: "₹4000/day", fuel: "Diesel", seats: 7, rating: 4.7 },
//       { id: 16, name: "Ford EcoSport", type: "SUV", price: "₹3200/day", fuel: "Petrol", seats: 5, rating: 4.5 },
//       { id: 17, name: "Hyundai Creta", type: "SUV", price: "₹3800/day", fuel: "Petrol", seats: 5, rating: 4.8 },
//     ],
//     "LB Nagar": [
//       { id: 6, name: "Tata Nexon", type: "SUV", price: "₹2800/day", fuel: "Petrol", seats: 5, rating: 4.5 },
//       { id: 18, name: "Maruti Dzire", type: "Sedan", price: "₹2300/day", fuel: "Petrol", seats: 5, rating: 4.4 },
//       { id: 19, name: "Honda WR-V", type: "SUV", price: "₹2600/day", fuel: "Petrol", seats: 5, rating: 4.3 },
//     ],
//     "Secunderabad": [
//       { id: 20, name: "Toyota Yaris", type: "Sedan", price: "₹2700/day", fuel: "Petrol", seats: 5, rating: 4.6 },
//       { id: 21, name: "Maruti Ertiga", type: "MPV", price: "₹3000/day", fuel: "Petrol", seats: 7, rating: 4.5 },
//       { id: 22, name: "Hyundai Venue", type: "SUV", price: "₹2900/day", fuel: "Petrol", seats: 5, rating: 4.7 },
//     ],
//     "Banjara Hills": [
//       { id: 23, name: "BMW 3 Series", type: "Luxury Sedan", price: "₹8000/day", fuel: "Petrol", seats: 5, rating: 4.9 },
//       { id: 24, name: "Audi A4", type: "Luxury Sedan", price: "₹9000/day", fuel: "Petrol", seats: 5, rating: 4.9 },
//       { id: 25, name: "Mercedes C-Class", type: "Luxury Sedan", price: "₹9500/day", fuel: "Petrol", seats: 5, rating: 4.8 },
//     ],
//     "Jubilee Hills": [
//       { id: 26, name: "Toyota Camry", type: "Premium Sedan", price: "₹5500/day", fuel: "Petrol", seats: 5, rating: 4.7 },
//       { id: 27, name: "Honda Accord", type: "Premium Sedan", price: "₹5000/day", fuel: "Petrol", seats: 5, rating: 4.6 },
//       { id: 28, name: "Skoda Superb", type: "Premium Sedan", price: "₹4800/day", fuel: "Petrol", seats: 5, rating: 4.7 },
//     ],
//     "Ameerpet": [
//       { id: 29, name: "Maruti Wagon R", type: "Hatchback", price: "₹1500/day", fuel: "Petrol", seats: 5, rating: 4.1 },
//       { id: 30, name: "Hyundai Grand i10", type: "Hatchback", price: "₹1600/day", fuel: "Petrol", seats: 5, rating: 4.2 },
//       { id: 31, name: "Tata Tiago", type: "Hatchback", price: "₹1400/day", fuel: "Petrol", seats: 5, rating: 4.0 },
//     ],
//     "Kukatpally": [
//       { id: 32, name: "Kia Seltos", type: "SUV", price: "₹3600/day", fuel: "Petrol", seats: 5, rating: 4.8 },
//       { id: 33, name: "Hyundai Tucson", type: "SUV", price: "₹4200/day", fuel: "Diesel", seats: 5, rating: 4.7 },
//       { id: 34, name: "Renault Duster", type: "SUV", price: "₹2900/day", fuel: "Petrol", seats: 5, rating: 4.4 },
//     ],
//   };

//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 500));
//   return mockCars[branchName] || [];
// };

// const Models = () => {
//   const [map, setMap] = useState(null);
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [isMapsApiLoaded, setIsMapsApiLoaded] = useState(false);
//   const [userMarker, setUserMarker] = useState(null);
//   const [branchMarkers, setBranchMarkers] = useState([]);
//   const [cars, setCars] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [nearbyBranches, setNearbyBranches] = useState([]);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const autocompleteRef = useRef(null);

//   const GOOGLE_MAPS_API_KEY = "AIzaSyCdUKj-j6A5yysU6wwkSfZF-2y-77qXofk";

//   // ---- Load Google Maps API ----
//   useEffect(() => {
//     const loadScript = () => {
//       if (window.google && window.google.maps && window.google.maps.places) {
//         setIsMapsApiLoaded(true);
//         return;
//       }
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.onerror = () => {
//         setMessage("Failed to load Google Maps script. Please check your internet connection.");
//         setIsError(true);
//       };
//       script.onload = () => setIsMapsApiLoaded(true);
//       document.head.appendChild(script);
//     };
//     loadScript();
//   }, []);

//   // ---- Initialize Map ----
//   useEffect(() => {
//     if (isMapsApiLoaded) {
//       const defaultLocation = { lat: 17.4065, lng: 78.4772 }; // Hyderabad center
//       const newMap = new window.google.maps.Map(document.getElementById("map"), {
//         zoom: 11,
//         center: defaultLocation,
//         mapTypeControl: true,
//         streetViewControl: true,
//         fullscreenControl: true,
//       });
//       setMap(newMap);
//       setMessage("🗺️ Map loaded successfully! Search for your location above or click 'Get My Location' to find nearby car rental branches.");

//       // Setup autocomplete with proper bounds for Hyderabad region
//       if (autocompleteRef.current) {
//         const autocomplete = new window.google.maps.places.Autocomplete(
//           autocompleteRef.current,
//           {
//             bounds: new window.google.maps.LatLngBounds(
//               new window.google.maps.LatLng(17.2, 78.1), // Southwest
//               new window.google.maps.LatLng(17.7, 78.8)  // Northeast
//             ),
//             strictBounds: false,
//             types: ['establishment', 'geocode'],
//             componentRestrictions: { country: 'IN' }
//           }
//         );

//         autocomplete.addListener("place_changed", () => {
//           const place = autocomplete.getPlace();
//           console.log("Selected place:", place); // Debug log
          
//           if (place.geometry && place.geometry.location) {
//             const newCoords = {
//               lat: place.geometry.location.lat(),
//               lng: place.geometry.location.lng(),
//             };
//             console.log("New coordinates:", newCoords); // Debug log
//             updateMapWithLocation(newCoords, newMap, place.formatted_address || place.name);
//           } else {
//             setMessage("❌ Please select a valid location from the dropdown suggestions.");
//             setIsError(true);
//           }
//         });
//       }
//     }
//   }, [isMapsApiLoaded]);

//   // ---- Get Current Location ----
//   const getCurrentLocation = () => {
//     if (navigator.geolocation) {
//       setMessage("📍 Getting your current location...");
//       setIsLoading(true);
      
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userCoords = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           console.log("Current location:", userCoords); // Debug log
//           updateMapWithLocation(userCoords, map, "Your Current Location");
//           setIsLoading(false);
//         },
//         (error) => {
//           console.log("Geolocation error:", error.message);
//           setMessage("❌ Could not access your location. Please search manually or check location permissions.");
//           setIsError(true);
//           setIsLoading(false);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 10000,
//           maximumAge: 60000
//         }
//       );
//     } else {
//       setMessage("❌ Geolocation is not supported by your browser.");
//       setIsError(true);
//     }
//   };

//   // ---- Update Map with Location ----
//   const updateMapWithLocation = async (coords, currentMap, locationName = "Selected Location") => {
//     console.log("Updating map with location:", coords, locationName); // Debug log
    
//     setCurrentLocation(coords);
//     setIsError(false);
//     setIsLoading(true);
    
//     // Clear existing markers
//     if (userMarker) {
//       userMarker.setMap(null);
//     }
//     branchMarkers.forEach((marker) => {
//       marker.setMap(null);
//     });
//     setBranchMarkers([]);

//     // Create user location marker
//     const userMarkerElement = document.createElement("div");
//     userMarkerElement.innerHTML = userLocationMarker();
    
//     const newUserMarker = new window.google.maps.Marker({
//       position: coords,
//       map: currentMap,
//       icon: {
//         url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <circle cx="12" cy="12" r="10" fill="#FF4444" stroke="white" stroke-width="2"/>
//             <circle cx="12" cy="12" r="4" fill="white"/>
//           </svg>
//         `),
//         scaledSize: new window.google.maps.Size(24, 24),
//       },
//       title: locationName,
//     });
//     setUserMarker(newUserMarker);

//     // Center and zoom map
//     currentMap.setCenter(coords);
//     currentMap.setZoom(13);

//     // Calculate distances to all branches
//     const branchesWithDistance = officeBranches.map((branch) => ({
//       ...branch,
//       distance: haversineDistance(coords, branch.position),
//     }));

//     // Filter branches within 10km and sort by distance
//     const nearbyBranchesData = branchesWithDistance
//       .filter((branch) => branch.distance <= 10)
//       .sort((a, b) => a.distance - b.distance);

//     console.log("Nearby branches:", nearbyBranchesData); // Debug log
//     setNearbyBranches(nearbyBranchesData);

//     if (nearbyBranchesData.length > 0) {
//       // Create markers for nearby branches
//       const newBranchMarkers = nearbyBranchesData.map((branch) => {
//         const marker = new window.google.maps.Marker({
//           position: branch.position,
//           map: currentMap,
//           icon: {
//             url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
//               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
//                 <rect x="2" y="2" width="28" height="20" rx="12" fill="#4CAF50" stroke="white" stroke-width="2"/>
//                 <text x="16" y="14" font-family="Arial" font-size="10" fill="white" text-anchor="middle" font-weight="bold">${branch.name}</text>
//               </svg>
//             `),
//             scaledSize: new window.google.maps.Size(32, 24),
//           },
//           title: `${branch.name} - ${branch.distance.toFixed(1)}km away`,
//         });

//         // Add click listener to branch marker
//         marker.addListener("click", () => {
//           loadCarsForBranch(branch.name);
//         });

//         return marker;
//       });
      
//       setBranchMarkers(newBranchMarkers);

//       // Automatically load cars from the closest branch
//       const closestBranch = nearbyBranchesData[0];
//       await loadCarsForBranch(closestBranch.name);

//       setMessage(
//         `✅ Found ${nearbyBranchesData.length} branch(es) within 10km of "${locationName}". Showing cars from closest branch: ${closestBranch.name} (${closestBranch.distance.toFixed(1)}km away).`
//       );
//     } else {
//       setCars([]);
//       setSelectedBranch("");
//       setMessage(`❌ No car rental branches found within 10km of "${locationName}". Try searching for a location closer to Hyderabad city.`);
//       setIsError(true);
//     }
    
//     setIsLoading(false);
//   };

//   // ---- Load Cars for Selected Branch ----
//   const loadCarsForBranch = async (branchName) => {
//     console.log("Loading cars for branch:", branchName); // Debug log
//     setIsLoading(true);
//     setSelectedBranch(branchName);
    
//     try {
//       const carsData = await fetchCarsForBranch(branchName);
//       console.log("Cars loaded:", carsData); // Debug log
//       setCars(carsData);
      
//       const branch = nearbyBranches.find(b => b.name === branchName);
//       if (branch) {
//         setMessage(
//           `🚗 Found ${carsData.length} available cars at ${branchName} branch (${branch.distance.toFixed(1)}km away). Click on any car to book!`
//         );
//         setIsError(false);
//       }
//     } catch (error) {
//       console.error("Error loading cars:", error);
//       setMessage("❌ Error loading cars. Please try again.");
//       setIsError(true);
//     }
    
//     setIsLoading(false);
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
//             <h1 className="text-3xl font-bold text-center mb-2">
//               🚗 Car Rental Branch & Vehicle Locator
//             </h1>
//             <p className="text-center text-blue-100">
//               Find nearby car rental branches and available vehicles
//             </p>
//           </div>

//           <div className="p-6 space-y-6">
//             {/* Search Controls */}
//             <div className="grid md:grid-cols-4 gap-4 items-end">
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Search Location
//                 </label>
//                 <input
//                   ref={autocompleteRef}
//                   type="text"
//                   placeholder="Enter location (e.g., Hitech City, Hyderabad)"
//                   className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
//                 />
//               </div>
//               <div className="md:col-span-1">
//                 <button
//                   onClick={getCurrentLocation}
//                   disabled={isLoading || !map}
//                   className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
//                 >
//                   {isLoading ? "🔄 Loading..." : "📍 Get My Location"}
//                 </button>
//               </div>
//               <div className="md:col-span-1">
//                 <div className="text-xs text-gray-500 space-y-1">
//                   <div>🔴 Your Location</div>
//                   <div>🟢 Car Branches</div>
//                 </div>
//               </div>
//             </div>

//             {/* Status Message */}
//             {message && (
//               <div
//                 className={`p-4 rounded-xl text-center font-medium transition-all ${
//                   isError 
//                     ? "bg-red-50 text-red-700 border border-red-200" 
//                     : "bg-blue-50 text-blue-700 border border-blue-200"
//                 }`}
//               >
//                 {message}
//               </div>
//             )}

//             {/* Map */}
//             <div className="relative">
//               <div
//                 id="map"
//                 className="w-full h-96 rounded-xl shadow-lg border-2 border-gray-200"
//                 style={{ minHeight: "400px" }}
//               />
//               {isLoading && (
//                 <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center">
//                   <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
//                     <div className="flex items-center gap-3">
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
//                       <span className="text-gray-700 font-medium">Loading...</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Branch Selection */}
//             {nearbyBranches.length > 1 && (
//               <div className="space-y-3">
//                 <label className="block text-lg font-semibold text-gray-800">
//                   Choose a Branch ({nearbyBranches.length} nearby)
//                 </label>
//                 <select
//                   value={selectedBranch}
//                   onChange={(e) => loadCarsForBranch(e.target.value)}
//                   className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
//                 >
//                   {nearbyBranches.map((branch) => (
//                     <option key={branch.name} value={branch.name}>
//                       📍 {branch.name} - {branch.distance.toFixed(1)}km away
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Available Cars */}
//             {cars.length > 0 && (
//               <div className="space-y-4">
//                 <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//                   🚗 Available Cars at {selectedBranch}
//                   <span className="text-lg font-normal text-gray-600">({cars.length} vehicles)</span>
//                 </h2>
                
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {cars.map((car) => (
//                     <div
//                       key={car.id}
//                       className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
//                     >
//                       <div className="space-y-3">
//                         <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                        
//                         <div className="flex items-center justify-between">
//                           <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                             {car.type}
//                           </span>
//                           <div className="flex items-center gap-1">
//                             <span className="text-yellow-400">⭐</span>
//                             <span className="text-sm font-medium text-gray-600">{car.rating}</span>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
//                           <div>⛽ {car.fuel}</div>
//                           <div>👥 {car.seats} seats</div>
//                         </div>

//                         <div className="flex items-center justify-between pt-2">
//                           <div>
//                             <div className="text-2xl font-bold text-green-600">{car.price}</div>
//                             <div className="text-xs text-gray-500">per day</div>
//                           </div>
//                           <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-md hover:shadow-lg">
//                             Book Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* No Cars Message */}
//             {nearbyBranches.length === 0 && currentLocation && !isLoading && (
//               <div className="text-center py-12 space-y-4">
//                 <div className="text-6xl">🚫</div>
//                 <h3 className="text-xl font-semibold text-gray-800">No Branches Found</h3>
//                 <p className="text-gray-600 max-w-md mx-auto">
//                   No car rental branches found within 10km of your selected location. 
//                   Try searching for a location closer to Hyderabad city center.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Models;






















// import React, { useState, useEffect, useRef, useCallback } from 'react';

// // Helper function to safely import images
// const importImage = (imageName) => {
//   try {
//     return require(`../images/cars-big/${imageName}`);
//   } catch (error) {
//     // Return placeholder if image not found
//     return `https://via.placeholder.com/300x200/4CAF50/white?text=${encodeURIComponent(imageName.split('.')[0])}`;
//   }
// };

// // Haversine formula for distance calculation
// const haversineDistance = (coords1, coords2) => {
//   const toRad = (x) => (x * Math.PI) / 180;
//   const R = 6371;

//   const dLat = toRad(coords2.lat - coords1.lat);
//   const dLon = toRad(coords2.lng - coords1.lng);
//   const lat1 = toRad(coords1.lat);
//   const lat2 = toRad(coords2.lat);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// };

// // Car images using imported files
// const CarImages = {
//   Honda: importImage('Honda.jpg'),
//   Hyundai: importImage('Hyundai.jpg'),
//   Toyota: importImage('Toyota.jpg'),
//   Maruti: importImage('maruthi.jpeg'),
//   Mahindra: importImage('Mahindra.jpeg'),
//   Volkswagen: importImage('Volkswagen.jpeg'),
//   Tata: importImage('Tata.jpeg'),
//   Kia: importImage('Kia.jpeg'),
//   Ford: importImage('Ford.jpg'),
//   Renault: importImage('Renault.webp'),
//   Nissan: importImage('Nissan.jpg'),
//   Skoda: importImage('Skoda.jpeg'),
//   MG: importImage('Mg.jpeg'),
//   Jeep: importImage('Jeep.jpeg'),
//   Suzuki: importImage('Suzuki.jpg'),
//   Bajaj: importImage('Bajaj.jpeg'),
//   BMW: importImage('Bmw.jpeg'),
//   Audi: importImage('Audi.jpeg')
// };

// // Office Branches
// const officeBranches = [
//   { name: "Dilsukhnagar", position: { lat: 17.3616, lng: 78.5245 } },
//   { name: "HITEC City", position: { lat: 17.4443, lng: 78.3789 } },
//   { name: "Khairatabad", position: { lat: 17.3850, lng: 78.4867 } },
//   { name: "Kukatpally", position: { lat: 17.4842, lng: 78.4076 } },
//   { name: "LB Nagar", position: { lat: 17.3419, lng: 78.552 } },
//   { name: "KPHB Colony", position: { lat: 17.4976, lng: 78.3947 } },
//   { name: "Lakdi-ka-pul", position: { lat: 17.3973, lng: 78.4613 } },
//   { name: "MG Bus Station", position: { lat: 17.3833, lng: 78.4849 } },
//   { name: "Miyapur", position: { lat: 17.5103, lng: 78.3571 } },
//   { name: "Nampally", position: { lat: 17.3829, lng: 78.4594 } },
//   { name: "Punjagutta", position: { lat: 17.4307, lng: 78.4508 } },
//   { name: "R.T.C. X Roads", position: { lat: 17.4256, lng: 78.4779 } },
//   { name: "S.R. Nagar", position: { lat: 17.4434, lng: 78.4509 } },
//   { name: "Secunderabad", position: { lat: 17.4399, lng: 78.4983 } },
//   { name: "Uppal", position: { lat: 17.4059, lng: 78.5563 } },
//   { name: "Tarnaka", position: { lat: 17.4237, lng: 78.5276 } },
//   { name: "Yusufguda", position: { lat: 17.4500, lng: 78.3897 } },
//   { name: "Musheerabad", position: { lat: 17.4166, lng: 78.4988 } },
//   { name: "Jubilee Hills", position: { lat: 17.4239, lng: 78.4138 } },
//   { name: "Gandhi Bhavan", position: { lat: 17.3840, lng: 78.4563 } }
// ];

// // Car data
// const carData = [
//   {
//     id: 1,
//     name: "Maruti Swift",
//     brand: "Maruti",
//     price: 25,
//     rating: 4,
//     seats: "4/5",
//     transmission: "Manual",
//     fuel: "Petrol",
//     image: CarImages.Maruti,
//     branchName: "Dilsukhnagar",
//     available: true
//   },
//   {
//     id: 2,
//     name: "Hyundai Creta",
//     brand: "Hyundai",
//     price: 45,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Automatic",
//     fuel: "Diesel",
//     image: CarImages.Hyundai,
//     branchName: "HITEC City",
//     available: true
//   },
//   {
//     id: 3,
//     name: "Toyota Innova",
//     brand: "Toyota",
//     price: 55,
//     rating: 5,
//     seats: "7/8",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImages.Toyota,
//     branchName: "Khairatabad",
//     available: true
//   },
//   {
//     id: 4,
//     name: "Honda City",
//     brand: "Honda",
//     price: 35,
//     rating: 4,
//     seats: "4/5",
//     transmission: "CVT",
//     fuel: "Petrol",
//     image: CarImages.Honda,
//     branchName: "Kukatpally",
//     available: true
//   },
//   {
//     id: 5,
//     name: "Mahindra XUV500",
//     brand: "Mahindra",
//     price: 50,
//     rating: 4,
//     seats: "7/7",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImages.Mahindra,
//     branchName: "LB Nagar",
//     available: false
//   },
//   {
//     id: 6,
//     name: "Volkswagen Polo",
//     brand: "Volkswagen",
//     price: 30,
//     rating: 4,
//     seats: "4/5",
//     transmission: "Manual",
//     fuel: "Petrol",
//     image: CarImages.Volkswagen,
//     branchName: "KPHB Colony",
//     available: true
//   },
//   {
//     id: 7,
//     name: "Tata Nexon",
//     brand: "Tata",
//     price: 32,
//     rating: 4,
//     seats: "4/5",
//     transmission: "AMT",
//     fuel: "Petrol",
//     image: CarImages.Tata,
//     branchName: "Lakdi-ka-pul",
//     available: true
//   },
//   {
//     id: 8,
//     name: "Kia Seltos",
//     brand: "Kia",
//     price: 48,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Automatic",
//     fuel: "Petrol",
//     image: CarImages.Kia,
//     branchName: "MG Bus Station",
//     available: true
//   },
//   {
//     id: 9,
//     name: "Ford EcoSport",
//     brand: "Ford",
//     price: 38,
//     rating: 4,
//     seats: "4/5",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImages.Ford,
//     branchName: "Miyapur",
//     available: true
//   },
//   {
//     id: 10,
//     name: "Renault Duster",
//     brand: "Renault",
//     price: 40,
//     rating: 4,
//     seats: "5/5",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImages.Renault,
//     branchName: "Nampally",
//     available: true
//   },
//   {
//     id: 11,
//     name: "Nissan Magnite",
//     brand: "Nissan",
//     price: 28,
//     rating: 3,
//     seats: "5/5",
//     transmission: "CVT",
//     fuel: "Petrol",
//     image: CarImages.Nissan,
//     branchName: "Punjagutta",
//     available: true
//   },
//   {
//     id: 12,
//     name: "Skoda Kushaq",
//     brand: "Skoda",
//     price: 52,
//     rating: 5,
//     seats: "5/5",
//     transmission: "DSG",
//     fuel: "Petrol",
//     image: CarImages.Skoda,
//     branchName: "R.T.C. X Roads",
//     available: false
//   },
//   {
//     id: 13,
//     name: "MG Hector",
//     brand: "MG",
//     price: 58,
//     rating: 5,
//     seats: "5/7",
//     transmission: "DCT",
//     fuel: "Petrol",
//     image: CarImages.MG,
//     branchName: "S.R. Nagar",
//     available: true
//   },
//   {
//     id: 14,
//     name: "Jeep Compass",
//     brand: "Jeep",
//     price: 65,
//     rating: 5,
//     seats: "5/5",
//     transmission: "9AT",
//     fuel: "Diesel",
//     image: CarImages.Jeep,
//     branchName: "Secunderabad",
//     available: true
//   },
//   {
//     id: 15,
//     name: "Suzuki Vitara Brezza",
//     brand: "Suzuki",
//     price: 42,
//     rating: 4,
//     seats: "5/5",
//     transmission: "AMT",
//     fuel: "Petrol",
//     image: CarImages.Suzuki,
//     branchName: "Uppal",
//     available: true
//   },
//   {
//     id: 16,
//     name: "Mahindra Thar",
//     brand: "Mahindra",
//     price: 60,
//     rating: 5,
//     seats: "4/4",
//     transmission: "Manual",
//     fuel: "Diesel",
//     image: CarImages.Mahindra,
//     branchName: "Tarnaka",
//     available: false
//   },
//   {
//     id: 17,
//     name: "Hyundai Venue",
//     brand: "Hyundai",
//     price: 36,
//     rating: 4,
//     seats: "5/5",
//     transmission: "iMT",
//     fuel: "Petrol",
//     image: CarImages.Hyundai,
//     branchName: "Yusufguda",
//     available: true
//   },
//   {
//     id: 18,
//     name: "Bajaj Qute",
//     brand: "Bajaj",
//     price: 20,
//     rating: 3,
//     seats: "4/4",
//     transmission: "Manual",
//     fuel: "CNG",
//     image: CarImages.Bajaj,
//     branchName: "Musheerabad",
//     available: true
//   },
//   {
//     id: 19,
//     name: "BMW 3 Series",
//     brand: "BMW",
//     price: 120,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Automatic",
//     fuel: "Petrol",
//     image: CarImages.BMW,
//     branchName: "Jubilee Hills",
//     available: true
//   },
//   {
//     id: 20,
//     name: "Audi A4",
//     brand: "Audi",
//     price: 150,
//     rating: 5,
//     seats: "5/5",
//     transmission: "Tiptronic",
//     fuel: "Petrol",
//     image: CarImages.Audi,
//     branchName: "Gandhi Bhavan",
//     available: false
//   }
// ];

// function Models() {
//   const [map, setMap] = useState(null);
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [isMapsApiLoaded, setIsMapsApiLoaded] = useState(false);
//   const [userMarker, setUserMarker] = useState(null);
//   const [branchMarkers, setBranchMarkers] = useState([]);
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [nearbyBranches, setNearbyBranches] = useState([]);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchFilters, setSearchFilters] = useState({
//     brand: '',
//     maxPrice: 200,
//     availableOnly: true
//   });
//   const autocompleteRef = useRef(null);

//   const GOOGLE_MAPS_API_KEY = "AIzaSyCdUKj-j6A5yysU6wwkSfZF-2y-77qXofk";

//   // Load Google Maps API
//   useEffect(() => {
//     const loadScript = () => {
//       if (window.google && window.google.maps && window.google.maps.places) {
//         setIsMapsApiLoaded(true);
//         return;
//       }
      
//       if (document.querySelector(`script[src*="maps.googleapis.com"]`)) {
//         return; // Script already loading
//       }

//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.onerror = () => {
//         setMessage("Failed to load Google Maps script. Please check your internet connection.");
//         setIsError(true);
//       };
//       script.onload = () => setIsMapsApiLoaded(true);
//       document.head.appendChild(script);
//     };
//     loadScript();
//   }, [GOOGLE_MAPS_API_KEY]);

//   // Initialize Map
//   useEffect(() => {
//     if (isMapsApiLoaded && !map) {
//       const defaultLocation = { lat: 17.4065, lng: 78.4772 };
      
//       try {
//         const newMap = new window.google.maps.Map(document.getElementById("map"), {
//           zoom: 11,
//           center: defaultLocation,
//           mapTypeControl: true,
//           streetViewControl: true,
//           fullscreenControl: true,
//         });
//         setMap(newMap);
//         setMessage("Map loaded successfully! Click 'Get My Location' or search for your location to find nearby car rental branches.");

//         // Setup autocomplete
//         if (autocompleteRef.current) {
//           const autocomplete = new window.google.maps.places.Autocomplete(
//             autocompleteRef.current,
//             {
//               bounds: new window.google.maps.LatLngBounds(
//                 new window.google.maps.LatLng(17.2, 78.1),
//                 new window.google.maps.LatLng(17.7, 78.8)
//               ),
//               strictBounds: false,
//               types: ['establishment', 'geocode'],
//               componentRestrictions: { country: 'IN' }
//             }
//           );

//           autocomplete.addListener("place_changed", () => {
//             const place = autocomplete.getPlace();
//             if (place.geometry && place.geometry.location) {
//               const newCoords = {
//                 lat: place.geometry.location.lat(),
//                 lng: place.geometry.location.lng(),
//               };
//               updateMapWithLocation(newCoords, newMap, place.formatted_address || place.name);
//             } else {
//               setMessage("Please select a valid location from the dropdown suggestions.");
//               setIsError(true);
//             }
//           });
//         }
//       } catch (error) {
//         console.error("Error initializing map:", error);
//         setMessage("Error initializing map. Please refresh the page.");
//         setIsError(true);
//       }
//     }
//   }, [isMapsApiLoaded, map]);

//   // Filter cars based on search criteria
//   useEffect(() => {
//     let filtered = [...cars];

//     // Filter by brand
//     if (searchFilters.brand) {
//       filtered = filtered.filter(car => 
//         car.brand.toLowerCase().includes(searchFilters.brand.toLowerCase())
//       );
//     }

//     // Filter by price
//     filtered = filtered.filter(car => car.price <= searchFilters.maxPrice);

//     // Filter by availability
//     if (searchFilters.availableOnly) {
//       filtered = filtered.filter(car => car.available);
//     }

//     // Sort by distance if we have nearby branches data
//     if (nearbyBranches.length > 0) {
//       filtered.sort((a, b) => {
//         const branchA = nearbyBranches.find(branch => branch.name === a.branchName);
//         const branchB = nearbyBranches.find(branch => branch.name === b.branchName);
//         if (branchA && branchB) {
//           return branchA.distance - branchB.distance;
//         }
//         return 0;
//       });
//     }

//     setFilteredCars(filtered);
//   }, [cars, searchFilters, nearbyBranches]);

//   // Get Current Location
//   const getCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       setMessage("Geolocation is not supported by your browser.");
//       setIsError(true);
//       return;
//     }

//     setMessage("Getting your current location...");
//     setIsLoading(true);
    
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userCoords = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };
//         updateMapWithLocation(userCoords, map, "Your Current Location");
//         setIsLoading(false);
//       },
//       (error) => {
//         console.log("Geolocation error:", error.message);
//         setMessage("Could not access your location. Please search manually or check location permissions.");
//         setIsError(true);
//         setIsLoading(false);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 60000
//       }
//     );
//   };

//   // Update Map with Location
//   const updateMapWithLocation = useCallback((coords, currentMap, locationName = "Selected Location") => {
//     if (!currentMap) return;

//     setCurrentLocation(coords);
//     setIsError(false);
//     setIsLoading(true);
    
//     try {
//       // Clear existing markers
//       if (userMarker) {
//         userMarker.setMap(null);
//       }
//       branchMarkers.forEach((marker) => {
//         marker.setMap(null);
//       });
//       setBranchMarkers([]);

//       // Create user location marker
//       const newUserMarker = new window.google.maps.Marker({
//         position: coords,
//         map: currentMap,
//         icon: {
//           url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//               <circle cx="12" cy="12" r="10" fill="#FF4444" stroke="white" stroke-width="2"/>
//               <circle cx="12" cy="12" r="4" fill="white"/>
//             </svg>
//           `),
//           scaledSize: new window.google.maps.Size(24, 24),
//         },
//         title: locationName,
//       });
//       setUserMarker(newUserMarker);

//       // Center and zoom map
//       currentMap.setCenter(coords);
//       currentMap.setZoom(13);

//       // Calculate distances to all branches
//       const branchesWithDistance = officeBranches.map((branch) => ({
//         ...branch,
//         distance: haversineDistance(coords, branch.position),
//       }));

//       // Filter branches within 20km and sort by distance
//       const nearbyBranchesData = branchesWithDistance
//         .filter((branch) => branch.distance <= 20)
//         .sort((a, b) => a.distance - b.distance);

//       setNearbyBranches(nearbyBranchesData);

//       if (nearbyBranchesData.length > 0) {
//         // Create markers for nearby branches
//         const newBranchMarkers = nearbyBranchesData.map((branch) => {
//           const marker = new window.google.maps.Marker({
//             position: branch.position,
//             map: currentMap,
//             icon: {
//               url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
//                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
//                   <rect x="2" y="2" width="28" height="20" rx="12" fill="#ff4d30" stroke="white" stroke-width="2"/>
//                   <text x="16" y="14" font-family="Arial" font-size="10" fill="white" text-anchor="middle" font-weight="bold">${branch.name.substring(0, 8)}</text>
//                 </svg>
//               `),
//               scaledSize: new window.google.maps.Size(32, 24),
//             },
//             title: `${branch.name} - ${branch.distance.toFixed(1)}km away`,
//           });

//           // Add click listener to branch marker
//           marker.addListener("click", () => {
//             loadCarsForBranch(branch.name);
//           });

//           return marker;
//         });
        
//         setBranchMarkers(newBranchMarkers);

//         // Load all available cars from nearby branches
//         loadAllNearbyCars(nearbyBranchesData);

//         setMessage(
//           `Found ${nearbyBranchesData.length} branch(es) within 20km of "${locationName}". Showing cars from all nearby branches.`
//         );
//       } else {
//         setCars([]);
//         setSelectedBranch("");
//         setMessage(`No car rental branches found within 20km of "${locationName}". Try searching for a location closer to Hyderabad city.`);
//         setIsError(true);
//       }
//     } catch (error) {
//       console.error("Error updating map:", error);
//       setMessage("Error updating map location.");
//       setIsError(true);
//     }
    
//     setIsLoading(false);
//   }, [userMarker, branchMarkers]);

//   // Load Cars for Selected Branch
//   const loadCarsForBranch = (branchName) => {
//     setSelectedBranch(branchName);
    
//     // Find cars available at the selected branch
//     const branchCars = carData.filter(car => car.branchName === branchName);
//     setCars(branchCars);
    
//     const branch = nearbyBranches.find(b => b.name === branchName);
//     if (branch) {
//       setMessage(
//         `Showing ${branchCars.length} cars from ${branchName} branch (${branch.distance.toFixed(1)}km away).`
//       );
//       setIsError(false);
//     }
//   };

//   // Load all cars from nearby branches
//   const loadAllNearbyCars = (branches) => {
//     const branchNames = branches.map(b => b.name);
//     const allNearbyCars = carData.filter(car => branchNames.includes(car.branchName));
//     setCars(allNearbyCars);
//     setSelectedBranch("All Nearby Branches");
//   };

//   const handleFilterChange = (key, value) => {
//     setSearchFilters(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const getCarDistance = (car) => {
//     const branch = nearbyBranches.find(b => b.name === car.branchName);
//     return branch ? branch.distance : null;
//   };

//   return (
//     <>
//       {/* CSS Styles */}
//       <style jsx>{`
//         .models-section {
//           padding: 0;
//         background:white;
//           min-height: 100vh;
//         }

//         .filter-container {
//           background: white;
//           padding: 2rem;
//           margin: 2rem 0;
//           border-radius: 1rem;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .filter-grid {
//           display: grid;
//           grid-template-columns: 2fr 1fr auto;
//           gap: 2rem;
//           align-items: end;
//           margin-bottom: 2rem;
//         }

//         .input-group {
//           display: flex;
//           flex-direction: column;
//         }

//         .input-label {
//           font-size: 1.6rem;
//           font-weight: 600;
//           color: #333;
//           margin-bottom: 0.8rem;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .search-input {
//           width: 100%;
//           padding: 1.2rem 1.5rem;
//           font-size: 1.6rem;
//           border: 2px solid #e1e5e9;
//           border-radius: 0.8rem;
//           outline: none;
//           transition: all 0.3s ease;
//           background: #fafbfc;
//         }

//         .search-input:focus {
//           border-color: #ff4d30;
//           box-shadow: 0 0 0 3px rgba(255, 77, 48, 0.1);
//           background: white;
//         }

//         .filter-btn {
//           padding: 1.2rem 2rem;
//           font-size: 1.6rem;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           border: none;
//           border-radius: 0.8rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-weight: 600;
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
//         }

//         .filter-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
//         }

//         .location-btn {
//           padding: 1.2rem 2rem;
//           font-size: 1.6rem;
//           background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
//           color: white;
//           border: none;
//           border-radius: 0.8rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-weight: 600;
//           box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);
//         }

//         .location-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(17, 153, 142, 0.6);
//         }

//         .location-btn:disabled {
//           background: #ccc;
//           cursor: not-allowed;
//           transform: none;
//           box-shadow: none;
//         }

//         .advanced-filters {
//           padding-top: 2rem;
//           border-top: 2px solid #f1f3f4;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 2rem;
//           animation: slideDown 0.3s ease;
//         }

//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .filter-select {
//           width: 100%;
//           padding: 1.2rem;
//           font-size: 1.6rem;
//           border: 2px solid #e1e5e9;
//           border-radius: 0.8rem;
//           outline: none;
//           background: white;
//           transition: all 0.3s ease;
//         }

//         .filter-select:focus {
//           border-color: #ff4d30;
//           box-shadow: 0 0 0 3px rgba(255, 77, 48, 0.1);
//         }

//         .range-input {
//           width: 100%;
//           height: 8px;
//           border-radius: 5px;
//           background: #e1e5e9;
//           outline: none;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }

//         .range-input::-webkit-slider-thumb {
//           appearance: none;
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #ff4d30 0%, #ff6b47 100%);
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(255, 77, 48, 0.4);
//           transition: all 0.2s ease;
//         }

//         .range-input::-webkit-slider-thumb:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 12px rgba(255, 77, 48, 0.6);
//         }

//         .range-input::-moz-range-thumb {
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #ff4d30 0%, #ff6b47 100%);
//           cursor: pointer;
//           border: none;
//           box-shadow: 0 2px 6px rgba(255, 77, 48, 0.4);
//         }

//         .checkbox-group {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .custom-checkbox {
//           width: 20px;
//           height: 20px;
//           cursor: pointer;
//           accent-color: #ff4d30;
//         }

//         .status-message {
//           padding: 1.5rem 2rem;
//           border-radius: 0.8rem;
//           text-align: center;
//           font-weight: 600;
//           font-size: 1.6rem;
//           margin: 2rem 0;
//           transition: all 0.3s ease;
//         }

//         .status-success {
//           background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
//           color: #155724;
//           border: 1px solid #c3e6cb;
//         }

//         .status-error {
//           background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
//           color: #721c24;
//           border: 1px solid #f5c6cb;
//         }

//         .map-container {
//           position: relative;
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//           border: 2px solid rgba(255, 255, 255, 0.2);
//         }

//         .map-loading {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.3);
//           backdrop-filter: blur(2px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 10;
//         }

//         .loading-card {
//           background: white;
//           padding: 2rem;
//           border-radius: 1rem;
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .spinner {
//           width: 24px;
//           height: 24px;
//           border: 3px solid #f3f3f3;
//           border-top: 3px solid #ff4d30;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         .branch-selector {
//           margin: 2rem 0;
//         }

//         .branch-select {
//           width: 100%;
//           padding: 1.5rem;
//           font-size: 1.8rem;
//           border: 2px solid #e1e5e9;
//           border-radius: 0.8rem;
//           outline: none;
//           background: white;
//           transition: all 0.3s ease;
//         }

//         .branch-select:focus {
//           border-color: #ff4d30;
//           box-shadow: 0 0 0 3px rgba(255, 77, 48, 0.1);
//         }

//         .cars-section {
//           margin: 3rem 0;
//         }

//         .section-title {
//           font-size: 2.8rem;
//           font-weight: 700;
//           color: #2d3436;
//           margin-bottom: 1rem;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .cars-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//           gap: 2.5rem;
//           margin-top: 2rem;
//         }

//         .car-card {
//           background: white;
//           border-radius: 1.2rem;
//           overflow: hidden;
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           position: relative;
//         }

//         .car-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//         }

//         .car-card.unavailable {
//           opacity: 0.7;
//         }

//         .car-image-container {
//           position: relative;
//           height: 250px;
//           overflow: hidden;
//         }

//         .car-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .car-card:hover .car-image {
//           transform: scale(1.05);
//         }

//         .distance-badge {
//           position: absolute;
//           top: 1rem;
//           left: 1rem;
//           background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
//           color: white;
//           padding: 0.6rem 1.2rem;
//           border-radius: 2rem;
//           font-size: 1.4rem;
//           font-weight: 600;
//           backdrop-filter: blur(10px);
//         }

//         .availability-badge {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
//           color: white;
//           padding: 0.6rem 1.2rem;
//           border-radius: 2rem;
//           font-size: 1.4rem;
//           font-weight: 600;
//         }

//         .car-content {
//           padding: 2rem;
//         }

//         .car-title {
//           font-size: 2.2rem;
//           font-weight: 700;
//           color: #2d3436;
//           margin-bottom: 1rem;
//         }

//         .car-header {
//           display: flex;
//           justify-content: between;
//           align-items: center;
//           margin-bottom: 1.5rem;
//         }

//         .brand-badge {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           padding: 0.5rem 1.2rem;
//           border-radius: 2rem;
//           font-size: 1.3rem;
//           font-weight: 600;
//         }

//         .rating {
//           display: flex;
//           align-items: center;
//           gap: 0.3rem;
//         }

//         .star {
//           color: #f39c12;
//           font-size: 1.6rem;
//         }

//         .rating-number {
//           font-size: 1.4rem;
//           color: #7f8c8d;
//           font-weight: 600;
//           margin-left: 0.5rem;
//         }

//         .car-details {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 1rem;
//           margin: 1.5rem 0;
//           padding: 1.5rem;
//           background: #f8f9fa;
//           border-radius: 0.8rem;
//         }

//         .detail-item {
//           display: flex;
//           align-items: center;
//           gap: 0.8rem;
//           font-size: 1.4rem;
//           color: #636e72;
//           font-weight: 500;
//         }

//         .detail-icon {
//           color: #ff4d30;
//           font-size: 1.6rem;
//         }

//         .branch-info {
//           text-align: center;
//           padding: 1rem;
//           margin: 1rem 0;
//           background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
//           border-radius: 0.8rem;
//           color: #636e72;
//           font-size: 1.5rem;
//         }

//         .car-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding-top: 1.5rem;
//           border-top: 2px solid #f1f3f4;
//         }

//         .price-section {
//           display: flex;
//           flex-direction: column;
//         }

//         .price {
//           font-size: 3rem;
//           font-weight: 700;
//           color: #27ae60;
//           line-height: 1;
//         }

//         .price-label {
//           font-size: 1.2rem;
//           color: #7f8c8d;
//           font-weight: 500;
//         }

//         .book-btn {
//           padding: 1.2rem 2.5rem;
//           font-size: 1.6rem;
//           font-weight: 600;
//           border: none;
//           border-radius: 0.8rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//           text-align: center;
//         }

//         .book-btn.available {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
//         }

//         .book-btn.available:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
//         }

//         .book-btn.unavailable {
//           background: #bdc3c7;
//           color: #7f8c8d;
//           cursor: not-allowed;
//           pointer-events: none;
//         }

//         .no-results {
//           text-align: center;
//           padding: 5rem 2rem;
//           color: #7f8c8d;
//         }

//         .no-results-icon {
//           font-size: 6rem;
//           margin-bottom: 2rem;
//           color: #bdc3c7;
//         }

//         .no-results-title {
//           font-size: 2.4rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #2d3436;
//         }

//         .no-results-text {
//           font-size: 1.8rem;
//         }

//         .contact-banner {
//           background: linear-gradient(135deg, #ff6b47 0%, #ff4d30 100%);
//           color: white;
//           padding: 4rem 2rem;
//           border-radius: 1.2rem;
//           text-align: center;
//           margin: 4rem 0;
//           box-shadow: 0 15px 35px rgba(255, 77, 48, 0.4);
//         }

//         .contact-title {
//           font-size: 2.8rem;
//           font-weight: 700;
//           margin-bottom: 1.5rem;
//         }

//         .contact-phone {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//           font-size: 2.2rem;
//           font-weight: 600;
//         }

//         /* Responsive Design */
//         @media (max-width: 1200px) {
//           .filter-grid {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//           }
          
//           .cars-grid {
//             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//             gap: 2rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .filter-container {
//             padding: 1.5rem;
//             margin: 1rem;
//           }

//           .advanced-filters {
//             grid-template-columns: 1fr;
//           }

//           .cars-grid {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//             padding: 0 1rem;
//           }

//           .car-details {
//             grid-template-columns: 1fr;
//           }

//           .car-footer {
//             flex-direction: column;
//             gap: 1.5rem;
//             align-items: stretch;
//           }

//           .contact-banner {
//             margin: 2rem 1rem;
//             padding: 3rem 1.5rem;
//           }

//           .section-title {
//             font-size: 2.4rem;
//             padding: 0 1rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .car-content {
//             padding: 1.5rem;
//           }

//           .contact-title {
//             font-size: 2.2rem;
//           }

//           .contact-phone {
//             flex-direction: column;
//             gap: 0.5rem;
//             font-size: 2rem;
//           }
//         }
//       `}</style>

//       <div className="models-section">
//         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '15rem' }}>
//           {/* Header */}
//           <div style={{ 
//             background: 'linear-gradient(135deg, #9a9ae8ff 0%, #b252f1ff 100%)', 
//             color: 'white', 
//             padding: '4.5rem 2rem', 
//             borderRadius: '1.2rem', 
//             textAlign: 'center',
//             marginBottom: '2rem',
//             boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)'
          
//           }}>
//             <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>
//               Car Rental Branch & Vehicle Locator
//             </h1> 
//              <p style={{ fontSize: '1.8rem', opacity: '0.9' }}>
//               Find nearby car rental branches and available vehicles in Hyderabad
//             </p>
//           </div>

//           {/* Search and Filter Section */}
//           <div className="filter-container">
//             <div className="filter-grid">
//               <div className="input-group">
//                 <label className="input-label">
//                   <i className="fa-solid fa-search"></i>
//                   Search Location
//                 </label>
//                 <input
//                   ref={autocompleteRef}
//                   type="text"
//                   placeholder="Enter location (e.g., Hitech City, Hyderabad)"
//                   className="search-input"
//                 />
//               </div>

//               <button
//                 onClick={getCurrentLocation}
//                 disabled={isLoading || !map}
//                 className="location-btn"
//               >
//                 {isLoading ? "Loading..." : "📍 Get My Location"}
//               </button>

//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="filter-btn"
//               >
//                 <i className="fa-solid fa-filter"></i> More Filters
//               </button>
//             </div>

//             {/* Legend */}
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '1.4rem', color: '#7f8c8d' }}>
//               <div><span style={{ color: '#FF4444' }}>🔴</span> Your Location</div>
//               <div><span style={{ color: '#ff4d30' }}>🟠</span> Car Branches</div>
//             </div>

//             {/* Advanced Filters */}
//             {showFilters && (
//               <div className="advanced-filters">
//                 <div className="input-group">
//                   <label className="input-label">
//                     <i className="fa-solid fa-car"></i> Brand
//                   </label>
//                   <select
//                     value={searchFilters.brand}
//                     onChange={(e) => handleFilterChange('brand', e.target.value)}
//                     className="filter-select"
//                   >
//                     <option value="">All Brands</option>
//                     <option value="Maruti">Maruti</option>
//                     <option value="Hyundai">Hyundai</option>
//                     <option value="Toyota">Toyota</option>
//                     <option value="Honda">Honda</option>
//                     <option value="Mahindra">Mahindra</option>
//                     <option value="Tata">Tata</option>
//                     <option value="Kia">Kia</option>
//                     <option value="Ford">Ford</option>
//                     <option value="Renault">Renault</option>
//                     <option value="Nissan">Nissan</option>
//                     <option value="Skoda">Skoda</option>
//                     <option value="MG">MG</option>
//                     <option value="Jeep">Jeep</option>
//                     <option value="Suzuki">Suzuki</option>
//                     <option value="Bajaj">Bajaj</option>
//                     <option value="BMW">BMW</option>
//                     <option value="Audi">Audi</option>
//                     <option value="Volkswagen">Volkswagen</option>
//                   </select>
//                 </div>
                
//                 <div className="input-group">
//                   <label className="input-label">
//                     <i className="fa-solid fa-dollar-sign"></i> Max Price: ${searchFilters.maxPrice}
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="200"
//                     value={searchFilters.maxPrice}
//                     onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
//                     className="range-input"
//                   />
//                 </div>

//                 <div className="checkbox-group">
//                   <input
//                     type="checkbox"
//                     id="available"
//                     checked={searchFilters.availableOnly}
//                     onChange={(e) => handleFilterChange('availableOnly', e.target.checked)}
//                     className="custom-checkbox"
//                   />
//                   <label htmlFor="available" className="input-label" style={{ marginBottom: 0 }}>
//                     <i className="fa-solid fa-check-circle"></i> Available only
//                   </label>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Status Message */}
//           {message && (
//             <div className={`status-message ${isError ? 'status-error' : 'status-success'}`}>
//               {message}
//             </div>
//           )}

//           {/* Map */}
//           <div className="map-container">
//             <div
//               id="map"
//               style={{ width: '100%', height: '450px' }}
//             />
//             {isLoading && (
//               <div className="map-loading">
//                 <div className="loading-card">
//                   <div className="spinner"></div>
//                   <span style={{ fontSize: '1.6rem', fontWeight: '600', color: '#2d3436' }}>
//                     Loading...
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Branch Selection */}
//           {nearbyBranches.length > 1 && (
//             <div className="branch-selector">
//               <label style={{ display: 'block', fontSize: '1.8rem', fontWeight: '700', color: '#2d3436', marginBottom: '1rem' }}>
//                 Choose a Branch ({nearbyBranches.length} nearby)
//               </label>
//               <select
//                 value={selectedBranch}
//                 onChange={(e) => {
//                   if (e.target.value === "All Nearby Branches") {
//                     loadAllNearbyCars(nearbyBranches);
//                   } else {
//                     loadCarsForBranch(e.target.value);
//                   }
//                 }}
//                 className="branch-select"
//               >
//                 <option value="All Nearby Branches">All Nearby Branches</option>
//                 {nearbyBranches.map((branch) => (
//                   <option key={branch.name} value={branch.name}>
//                     {branch.name} - {branch.distance.toFixed(1)}km away
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Available Cars */}
//           {filteredCars.length > 0 && (
//             <div className="cars-section">
//               <h2 className="section-title">
//                 Available Cars
//                 <span style={{ fontSize: '1.8rem', fontWeight: '400', color: '#7f8c8d' }}>
//                   ({filteredCars.length} vehicles)
//                 </span>
//               </h2>
              
//               <div className="cars-grid">
//                 {filteredCars.map((car) => (
//                   <div key={car.id} className={`car-card ${!car.available ? 'unavailable' : ''}`}>
//                     <div className="car-image-container">
//                       <img 
//                         src={car.image} 
//                         alt={car.name}
//                         className="car-image"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = `https://via.placeholder.com/400x250/667eea/white?text=${encodeURIComponent(car.name)}`;
//                         }}
//                       />
//                       {currentLocation && getCarDistance(car) && (
//                         <div className="distance-badge">
//                           📍 {getCarDistance(car).toFixed(1)} km
//                         </div>
//                       )}
//                       {!car.available && (
//                         <div className="availability-badge">
//                           Unavailable
//                         </div>
//                       )}
//                     </div>

//                     <div className="car-content">
//                       <h3 className="car-title">{car.name}</h3>
                      
//                       <div className="car-header">
//                         <span className="brand-badge">{car.brand}</span>
//                         <div className="rating">
//                           {[...Array(car.rating)].map((_, i) => (
//                             <span key={i} className="star">⭐</span>
//                           ))}
//                           <span className="rating-number">{car.rating}</span>
//                         </div>
//                       </div>

//                       <div className="car-details">
//                         <div className="detail-item">
//                           <span className="detail-icon">⛽</span>
//                           <span>{car.fuel}</span>
//                         </div>
//                         <div className="detail-item">
//                           <span className="detail-icon">👥</span>
//                           <span>{car.seats} seats</span>
//                         </div>
//                         <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
//                           <span className="detail-icon">⚙️</span>
//                           <span>{car.transmission}</span>
//                         </div>
//                       </div>

//                       <div className="branch-info">
//                         📍 {car.branchName}
//                         {currentLocation && getCarDistance(car) && (
//                           <> - {getCarDistance(car).toFixed(1)}km away</>
//                         )}
//                       </div>

//                       <div className="car-footer">
//                         <div className="price-section">
//                           <div className="price">${car.price}</div>
//                           <div className="price-label">per day</div>
//                         </div>
//                         <button 
//                           className={`book-btn ${car.available ? 'available' : 'unavailable'}`}
//                           disabled={!car.available}
//                         >
//                           {car.available ? 'Book Now' : 'Not Available'}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* No Results Message */}
//           {nearbyBranches.length === 0 && currentLocation && !isLoading && (
//             <div className="no-results">
//               <div className="no-results-icon">🚫</div>
//               <h3 className="no-results-title">No Branches Found</h3>
//               <p className="no-results-text">
//                 No car rental branches found within 20km of your selected location. 
//                 Try searching for a location closer to Hyderabad city center.
//               </p>
//             </div>
//           )}

//           {/* No Cars Found */}
//           {filteredCars.length === 0 && cars.length > 0 && (
//             <div className="no-results">
//               <div className="no-results-icon">🚗</div>
//               <h3 className="no-results-title">No Cars Match Your Filters</h3>
//               <p className="no-results-text">
//                 Try adjusting your search filters or removing some criteria to see more results.
//               </p>
//             </div>
//           )}

//           {/* Contact Banner */}
//           {filteredCars.length > 0 && (
//             <div className="contact-banner">
//               <h2 className="contact-title">Book a car by getting in touch with us</h2>
//               <div className="contact-phone">
//                 <span>📞</span>
//                 <span>(123) 456-7869</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Models;







import React, { useState, useEffect, useRef, useCallback } from 'react';
import Footer from '../components/Footer';

// Helper function to safely import images
const importImage = (imageName) => {
  try {
    return require(`../images/cars-big/${imageName}`);
  } catch (error) {
    // Return placeholder if image not found
    return `https://via.placeholder.com/300x200/4CAF50/white?text=${encodeURIComponent(imageName.split('.')[0])}`;
  }
};

// Haversine formula for distance calculation
const haversineDistance = (coords1, coords2) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371;

  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lng - coords1.lng);
  const lat1 = toRad(coords1.lat);
  const lat2 = toRad(coords2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Car images using imported files
const CarImages = {
  Honda: importImage('Honda.jpg'),
  Hyundai: importImage('Hyundai.jpg'),
  Toyota: importImage('Toyota.jpg'),
  Maruti: importImage('maruthi.jpeg'),
  Mahindra: importImage('Mahindra.jpeg'),
  Volkswagen: importImage('Volkswagen.jpeg'),
  Tata: importImage('Tata.jpeg'),
  Kia: importImage('Kia.jpeg'),
  Ford: importImage('Ford.jpg'),
  Renault: importImage('Renault.webp'),
  Nissan: importImage('Nissan.jpg'),
  Skoda: importImage('Skoda.jpeg'),
  MG: importImage('Mg.jpeg'),
  Jeep: importImage('Jeep.jpeg'),
  Suzuki: importImage('Suzuki.jpg'),
  Bajaj: importImage('Bajaj.jpeg'),
  BMW: importImage('Bmw.jpeg'),
  Audi: importImage('Audi.jpeg')
};

// Office Branches
const officeBranches = [
  { name: "Dilsukhnagar", position: { lat: 17.3616, lng: 78.5245 } },
  { name: "HITEC City", position: { lat: 17.4443, lng: 78.3789 } },
  { name: "Khairatabad", position: { lat: 17.3850, lng: 78.4867 } },
  { name: "Kukatpally", position: { lat: 17.4842, lng: 78.4076 } },
  { name: "LB Nagar", position: { lat: 17.3419, lng: 78.552 } },
  { name: "KPHB Colony", position: { lat: 17.4976, lng: 78.3947 } },
  { name: "Lakdi-ka-pul", position: { lat: 17.3973, lng: 78.4613 } },
  { name: "MG Bus Station", position: { lat: 17.3833, lng: 78.4849 } },
  { name: "Miyapur", position: { lat: 17.5103, lng: 78.3571 } },
  { name: "Nampally", position: { lat: 17.3829, lng: 78.4594 } },
  { name: "Punjagutta", position: { lat: 17.4307, lng: 78.4508 } },
  { name: "R.T.C. X Roads", position: { lat: 17.4256, lng: 78.4779 } },
  { name: "S.R. Nagar", position: { lat: 17.4434, lng: 78.4509 } },
  { name: "Secunderabad", position: { lat: 17.4399, lng: 78.4983 } },
  { name: "Uppal", position: { lat: 17.4059, lng: 78.5563 } },
  { name: "Tarnaka", position: { lat: 17.4237, lng: 78.5276 } },
  { name: "Yusufguda", position: { lat: 17.4500, lng: 78.3897 } },
  { name: "Musheerabad", position: { lat: 17.4166, lng: 78.4988 } },
  { name: "Jubilee Hills", position: { lat: 17.4239, lng: 78.4138 } },
  { name: "Gandhi Bhavan", position: { lat: 17.3840, lng: 78.4563 } }
];

// Car data
const carData = [
  {
    id: 1,
    name: "Maruti Swift",
    brand: "Maruti",
    price: 25,
    rating: 4,
    seats: "4/5",
    transmission: "Manual",
    fuel: "Petrol",
    image: CarImages.Maruti,
    branchName: "Dilsukhnagar",
    available: true
  },
  {
    id: 2,
    name: "Hyundai Creta",
    brand: "Hyundai",
    price: 45,
    rating: 5,
    seats: "5/5",
    transmission: "Automatic",
    fuel: "Diesel",
    image: CarImages.Hyundai,
    branchName: "HITEC City",
    available: true
  },
  {
    id: 3,
    name: "Toyota Innova",
    brand: "Toyota",
    price: 55,
    rating: 5,
    seats: "7/8",
    transmission: "Manual",
    fuel: "Diesel",
    image: CarImages.Toyota,
    branchName: "Khairatabad",
    available: true
  },
  {
    id: 4,
    name: "Honda City",
    brand: "Honda",
    price: 35,
    rating: 4,
    seats: "4/5",
    transmission: "CVT",
    fuel: "Petrol",
    image: CarImages.Honda,
    branchName: "Kukatpally",
    available: true
  },
  {
    id: 5,
    name: "Mahindra XUV500",
    brand: "Mahindra",
    price: 50,
    rating: 4,
    seats: "7/7",
    transmission: "Manual",
    fuel: "Diesel",
    image: CarImages.Mahindra,
    branchName: "LB Nagar",
    available: false
  },
  {
    id: 6,
    name: "Volkswagen Polo",
    brand: "Volkswagen",
    price: 30,
    rating: 4,
    seats: "4/5",
    transmission: "Manual",
    fuel: "Petrol",
    image: CarImages.Volkswagen,
    branchName: "KPHB Colony",
    available: true
  },
  {
    id: 7,
    name: "Tata Nexon",
    brand: "Tata",
    price: 32,
    rating: 4,
    seats: "4/5",
    transmission: "AMT",
    fuel: "Petrol",
    image: CarImages.Tata,
    branchName: "Lakdi-ka-pul",
    available: true
  },
  {
    id: 8,
    name: "Kia Seltos",
    brand: "Kia",
    price: 48,
    rating: 5,
    seats: "5/5",
    transmission: "Automatic",
    fuel: "Petrol",
    image: CarImages.Kia,
    branchName: "MG Bus Station",
    available: true
  },
  {
    id: 9,
    name: "Ford EcoSport",
    brand: "Ford",
    price: 38,
    rating: 4,
    seats: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    image: CarImages.Ford,
    branchName: "Miyapur",
    available: true
  },
  {
    id: 10,
    name: "Renault Duster",
    brand: "Renault",
    price: 40,
    rating: 4,
    seats: "5/5",
    transmission: "Manual",
    fuel: "Diesel",
    image: CarImages.Renault,
    branchName: "Nampally",
    available: true
  },
  {
    id: 11,
    name: "Nissan Magnite",
    brand: "Nissan",
    price: 28,
    rating: 3,
    seats: "5/5",
    transmission: "CVT",
    fuel: "Petrol",
    image: CarImages.Nissan,
    branchName: "Punjagutta",
    available: true
  },
  {
    id: 12,
    name: "Skoda Kushaq",
    brand: "Skoda",
    price: 52,
    rating: 5,
    seats: "5/5",
    transmission: "DSG",
    fuel: "Petrol",
    image: CarImages.Skoda,
    branchName: "R.T.C. X Roads",
    available: false
  },
  {
    id: 13,
    name: "MG Hector",
    brand: "MG",
    price: 58,
    rating: 5,
    seats: "5/7",
    transmission: "DCT",
    fuel: "Petrol",
    image: CarImages.MG,
    branchName: "S.R. Nagar",
    available: true
  },
  {
    id: 14,
    name: "Jeep Compass",
    brand: "Jeep",
    price: 65,
    rating: 5,
    seats: "5/5",
    transmission: "9AT",
    fuel: "Diesel",
    image: CarImages.Jeep,
    branchName: "Secunderabad",
    available: true
  },
  {
    id: 15,
    name: "Suzuki Vitara Brezza",
    brand: "Suzuki",
    price: 42,
    rating: 4,
    seats: "5/5",
    transmission: "AMT",
    fuel: "Petrol",
    image: CarImages.Suzuki,
    branchName: "Uppal",
    available: true
  },
  {
    id: 16,
    name: "Mahindra Thar",
    brand: "Mahindra",
    price: 60,
    rating: 5,
    seats: "4/4",
    transmission: "Manual",
    fuel: "Diesel",
    image: CarImages.Mahindra,
    branchName: "Tarnaka",
    available: false
  },
  {
    id: 17,
    name: "Hyundai Venue",
    brand: "Hyundai",
    price: 36,
    rating: 4,
    seats: "5/5",
    transmission: "iMT",
    fuel: "Petrol",
    image: CarImages.Hyundai,
    branchName: "Yusufguda",
    available: true
  },
  {
    id: 18,
    name: "Bajaj Qute",
    brand: "Bajaj",
    price: 20,
    rating: 3,
    seats: "4/4",
    transmission: "Manual",
    fuel: "CNG",
    image: CarImages.Bajaj,
    branchName: "Musheerabad",
    available: true
  },
  {
    id: 19,
    name: "BMW 3 Series",
    brand: "BMW",
    price: 120,
    rating: 5,
    seats: "5/5",
    transmission: "Automatic",
    fuel: "Petrol",
    image: CarImages.BMW,
    branchName: "Jubilee Hills",
    available: true
  },
  {
    id: 20,
    name: "Audi A4",
    brand: "Audi",
    price: 150,
    rating: 5,
    seats: "5/5",
    transmission: "Tiptronic",
    fuel: "Petrol",
    image: CarImages.Audi,
    branchName: "Gandhi Bhavan",
    available: false
  }
];

function Models() {
  const [map, setMap] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isMapsApiLoaded, setIsMapsApiLoaded] = useState(false);
  const [userMarker, setUserMarker] = useState(null);
  const [branchMarkers, setBranchMarkers] = useState([]);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [nearbyBranches, setNearbyBranches] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    brand: '',
    maxPrice: 200,
    availableOnly: true
  });
  const autocompleteRef = useRef(null);

  const GOOGLE_MAPS_API_KEY = "AIzaSyCdUKj-j6A5yysU6wwkSfZF-2y-77qXofk";

  // New state to hold the value of the location input
  const [locationInput, setLocationInput] = useState('');

  // Handle location search based on text input
  const handleLocationSearch = () => {
    const searchTerm = locationInput.toLowerCase().trim();
    if (!searchTerm) {
      setMessage("Please enter a location to search.");
      setIsError(true);
      setCars([]);
      setNearbyBranches([]);
      return;
    }

    const matchedBranches = officeBranches.filter(branch => 
      branch.name.toLowerCase().includes(searchTerm)
    );

    if (matchedBranches.length > 0) {
      // If a branch is found, get its coordinates and call the map update function
      const firstMatchedBranch = matchedBranches[0];
      updateMapWithLocation(firstMatchedBranch.position, map, firstMatchedBranch.name);
      loadCarsForBranch(firstMatchedBranch.name);
      setMessage(`Showing cars from the nearest branch matching your search: ${firstMatchedBranch.name}.`);
      setIsError(false);
    } else {
      setMessage(`No branches found matching "${locationInput}". Please try a different location or use "Get My Location".`);
      setIsError(true);
      setCars([]);
      setNearbyBranches([]);
      // Reset map state if no branch is found
      if (userMarker) userMarker.setMap(null);
      branchMarkers.forEach(marker => marker.setMap(null));
      setBranchMarkers([]);
    }
  };

  // The rest of the useEffects and functions remain the same as the previous response.
  // We'll update the useEffect for the map to not use autocomplete since we're handling the search manually.

  // Load Google Maps API
  useEffect(() => {
    const loadScript = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        setIsMapsApiLoaded(true);
        return;
      }
      
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        return; // Script already loading
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        setMessage("Failed to load Google Maps script. Please check your internet connection.");
        setIsError(true);
      };
      script.onload = () => setIsMapsApiLoaded(true);
      document.head.appendChild(script);
    };
    loadScript();
  }, [GOOGLE_MAPS_API_KEY]);

  // Initialize Map
  useEffect(() => {
    if (isMapsApiLoaded && !map) {
      const defaultLocation = { lat: 17.4065, lng: 78.4772 };
      
      try {
        const newMap = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: defaultLocation,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        });
        setMap(newMap);
        setMessage("Map loaded successfully! Click 'Get My Location' or search for your location to find nearby car rental branches.");
        
        // This part is removed:
        // autocomplete.addListener("place_changed", ...);
        
      } catch (error) {
        console.error("Error initializing map:", error);
        setMessage("Error initializing map. Please refresh the page.");
        setIsError(true);
      }
    }
  }, [isMapsApiLoaded, map]);

  // Filter cars based on search criteria
  useEffect(() => {
    let filtered = [...cars];

    // Filter by brand
    if (searchFilters.brand) {
      filtered = filtered.filter(car => 
        car.brand.toLowerCase().includes(searchFilters.brand.toLowerCase())
      );
    }

    // Filter by price
    filtered = filtered.filter(car => car.price <= searchFilters.maxPrice);

    // Filter by availability
    if (searchFilters.availableOnly) {
      filtered = filtered.filter(car => car.available);
    }

    // Sort by distance if we have nearby branches data
    if (nearbyBranches.length > 0) {
      filtered.sort((a, b) => {
        const branchA = nearbyBranches.find(branch => branch.name === a.branchName);
        const branchB = nearbyBranches.find(branch => branch.name === b.branchName);
        if (branchA && branchB) {
          return branchA.distance - branchB.distance;
        }
        return 0;
      });
    }

    setFilteredCars(filtered);
  }, [cars, searchFilters, nearbyBranches]);

  // Get Current Location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser.");
      setIsError(true);
      return;
    }

    setMessage("Getting your current location...");
    setIsLoading(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        updateMapWithLocation(userCoords, map, "Your Current Location");
        setIsLoading(false);
      },
      (error) => {
        console.log("Geolocation error:", error.message);
        setMessage("Could not access your location. Please search manually or check location permissions.");
        setIsError(true);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Update Map with Location
  const updateMapWithLocation = useCallback((coords, currentMap, locationName = "Selected Location") => {
    if (!currentMap) return;

    setCurrentLocation(coords);
    setIsError(false);
    setIsLoading(true);
    
    try {
      // Clear existing markers
      if (userMarker) {
        userMarker.setMap(null);
      }
      branchMarkers.forEach((marker) => {
        marker.setMap(null);
      });
      setBranchMarkers([]);

      // Create user location marker
      const newUserMarker = new window.google.maps.Marker({
        position: coords,
        map: currentMap,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#FF4444" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
            </svg>`),
          scaledSize: new window.google.maps.Size(24, 24),
        },
        title: locationName,
      });
      setUserMarker(newUserMarker);

      // Center and zoom map
      currentMap.setCenter(coords);
      currentMap.setZoom(13);

      // Calculate distances to all branches
      const branchesWithDistance = officeBranches.map((branch) => ({
        ...branch,
        distance: haversineDistance(coords, branch.position),
      }));

      // Filter branches within 20km and sort by distance
      const nearbyBranchesData = branchesWithDistance
        .filter((branch) => branch.distance <= 20)
        .sort((a, b) => a.distance - b.distance);

      setNearbyBranches(nearbyBranchesData);

      if (nearbyBranchesData.length > 0) {
        // Create markers for nearby branches
        const newBranchMarkers = nearbyBranchesData.map((branch) => {
          const marker = new window.google.maps.Marker({
            position: branch.position,
            map: currentMap,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
                  <rect x="2" y="2" width="28" height="20" rx="12" fill="#ff4d30" stroke="white" stroke-width="2"/>
                  <text x="16" y="14" font-family="Arial" font-size="10" fill="white" text-anchor="middle" font-weight="bold">${branch.name.substring(0, 8)}</text>
                </svg>`),
              scaledSize: new window.google.maps.Size(32, 24),
            },
            title: `${branch.name} - ${branch.distance.toFixed(1)}km away`,
          });

          // Add click listener to branch marker
          marker.addListener("click", () => {
            loadCarsForBranch(branch.name);
          });

          return marker;
        });
        
        setBranchMarkers(newBranchMarkers);

        // Load all available cars from nearby branches
        loadAllNearbyCars(nearbyBranchesData);

        setMessage(
          `Found ${nearbyBranchesData.length} branch(es) within 20km of "${locationName}". Showing cars from all nearby branches.`
        );
      } else {
        setCars([]);
        setSelectedBranch("");
        setMessage(`No car rental branches found within 20km of "${locationName}". Try searching for a location closer to Hyderabad city.`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error updating map:", error);
      setMessage("Error updating map location.");
      setIsError(true);
    }
    
    setIsLoading(false);
  }, [userMarker, branchMarkers]);

  // Load Cars for Selected Branch
  const loadCarsForBranch = (branchName) => {
    setSelectedBranch(branchName);
    
    // Find cars available at the selected branch
    const branchCars = carData.filter(car => car.branchName === branchName);
    setCars(branchCars);
    
    const branch = nearbyBranches.find(b => b.name === branchName);
    if (branch) {
      setMessage(
        `Showing ${branchCars.length} cars from ${branchName} branch (${branch.distance.toFixed(1)}km away).`
      );
      setIsError(false);
    }
  };

  // Load all cars from nearby branches
  const loadAllNearbyCars = (branches) => {
    const branchNames = branches.map(b => b.name);
    const allNearbyCars = carData.filter(car => branchNames.includes(car.branchName));
    setCars(allNearbyCars);
    setSelectedBranch("All Nearby Branches");
  };

  const handleFilterChange = (key, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getCarDistance = (car) => {
    const branch = nearbyBranches.find(b => b.name === car.branchName);
    return branch ? branch.distance : null;
  };

  return (
    <>
      {/* CSS Styles */}
      <style jsx>{`
        .models-section {
          padding: 10rem;
          background: white;
          min-height: 100vh;
        }

        .filter-container {
          background: white;
          padding: 2rem;
          margin: 2rem 0;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .filter-grid {
          display: grid;
          grid-template-columns: 2fr 1fr auto;
          gap: 2rem;
          align-items: end;
          margin-bottom: 2rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-label {
          font-size: 1.6rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .search-input {
          width: 100%;
          padding: 1.2rem 1.5rem;
          font-size: 1.6rem;
          border: 2px solid #e1e5e9;
          border-radius: 0.8rem;
          outline: none;
          transition: all 0.3s ease;
          background: #fafbfc;
        }

        .search-input:focus {
          border-color: #ff4d30;
          box-shadow: 0 0 0 3px rgba(255, 77, 48, 0.1);
          background: white;
        }

        .filter-btn {
          padding: 1.2rem 2rem;
          font-size: 1.6rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .location-btn {
          padding: 1.2rem 2rem;
          font-size: 1.6rem;
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
          border: none;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);
        }

        .location-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(17, 153, 142, 0.6);
        }

        .location-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .advanced-filters {
          padding-top: 2rem;
          border-top: 2px solid #f1f3f4;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .filter-select {
          width: 100%;
          padding: 1.2rem;
          font-size: 1.6rem;
          border: 2px solid #e1e5e9;
          border-radius: 0.8rem;
          outline: none;
          background: white;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          border-color: #ff4d30;
          box-shadow: 0 0 0 3px rgba(255, 77, 48, 0.1);
        }

        .range-input {
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: #e1e5e9;
          outline: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .range-input::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff4d30 0%, #ff6b47 100%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 77, 48, 0.4);
          transition: all 0.2s ease;
        }

        .range-input::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(255, 77, 48, 0.6);
        }

        .range-input::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff4d30 0%, #ff6b47 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(255, 77, 48, 0.4);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .custom-checkbox {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #ff4d30;
        }

        .status-message {
          padding: 1.5rem 2rem;
          border-radius: 0.8rem;
          text-align: center;
          font-weight: 600;
          font-size: 1.6rem;
          margin: 2rem 0;
          transition: all 0.3s ease;
        }

        .status-success {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .status-error {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .map-container {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .map-loading {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .loading-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .spinner {
          width: 24px;
          height: 24px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #ff4d30;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .branch-selector {
          margin: 2rem 0;
        }

        .branch-select {
          width: 100%;
          padding: 1.5rem;
          font-size: 1.8rem;
          border: 2px solid #e1e5e9;
          border-radius: 0.8rem;
          outline: none;
          background: white;
          transition: all 0.3s ease;
        }

        .branch-select:focus {
          border-color: #ff4d30;
          box-shadow: 0 0 0 3px rgba(255, 77, 48, 0.1);
        }

        .cars-section {
          margin: 3rem 0;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .car-card {
          background: white;
          border-radius: 1.2rem;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
        }

        .car-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .car-card.unavailable {
          opacity: 0.7;
        }

        .car-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .car-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .car-card:hover .car-image {
          transform: scale(1.05);
        }

        .distance-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          font-size: 1.4rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .availability-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .car-content {
          padding: 2rem;
        }

        .car-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 1rem;
        }

        .car-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .brand-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 2rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .star {
          color: #f39c12;
          font-size: 1.6rem;
        }

        .rating-number {
          font-size: 1.4rem;
          color: #7f8c8d;
          font-weight: 600;
          margin-left: 0.5rem;
        }

        .car-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 0.8rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          color: #636e72;
          font-weight: 500;
        }

        .detail-icon {
          color: #ff4d30;
          font-size: 1.6rem;
        }

        .branch-info {
          text-align: center;
          padding: 1rem;
          margin: 1rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 0.8rem;
          color: #636e72;
          font-size: 1.5rem;
        }

        .car-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 2px solid #f1f3f4;
        }

        .price-section {
          display: flex;
          flex-direction: column;
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
          color: #27ae60;
          line-height: 1;
        }

        .price-label {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-weight: 500;
        }

        .book-btn {
          padding: 1.2rem 2.5rem;
          font-size: 1.6rem;
          font-weight: 600;
          border: none;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .book-btn.available {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .book-btn.available:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .book-btn.unavailable {
          background: #bdc3c7;
          color: #7f8c8d;
          cursor: not-allowed;
          pointer-events: none;
        }

        .no-results {
          text-align: center;
          padding: 5rem 2rem;
          color: #7f8c8d;
        }

        .no-results-icon {
          font-size: 6rem;
          margin-bottom: 2rem;
          color: #bdc3c7;
        }

        .no-results-title {
          font-size: 2.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #2d3436;
        }

        .no-results-text {
          font-size: 1.8rem;
        }

        .contact-banner {
          background: linear-gradient(135deg, #ff6b47 0%, #ff4d30 100%);
          color: white;
          padding: 4rem 2rem;
          border-radius: 1.2rem;
          text-align: center;
          margin: 4rem 0;
          box-shadow: 0 15px 35px rgba(255, 77, 48, 0.4);
        }

        .contact-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .contact-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 2.2rem;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .filter-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <section className="models-section">
        <div className="container">
          <div className="filter-container">
            <h2 className="section-title">Find Your Perfect Car</h2>
            <p className={`status-message ${isError ? 'status-error' : 'status-success'}`}>{message}</p>
            
            <div className="filter-grid">
              <div className="input-group">
                <label className="input-label" htmlFor="location-search">
                  <i className="fa-solid fa-location-dot detail-icon"></i>
                  Pick-Up Location
                </label>
                <input
                  id="location-search"
                  className="search-input"
                  type="text"
                  placeholder="Enter a location near Hyderabad"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                />
              </div>
              <button
                className="location-btn"
                onClick={handleLocationSearch}
              >
                Search
              </button>
              <button
                className="location-btn"
                onClick={getCurrentLocation}
                disabled={isLoading || !isMapsApiLoaded}
              >
                {isLoading ? "Finding..." : "Get My Location"}
              </button>
              <button
                className="filter-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>

            {showFilters && (
              <div className="advanced-filters">
                <div className="input-group">
                  <label className="input-label" htmlFor="brand-filter">
                    <i className="fa-solid fa-car detail-icon"></i>
                    Car Brand
                  </label>
                  <select
                    id="brand-filter"
                    className="filter-select"
                    value={searchFilters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                  >
                    <option value="">All Brands</option>
                    {[...new Set(carData.map(car => car.brand))].sort().map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="price-filter">
                    <i className="fa-solid fa-tag detail-icon"></i>
                    Max Price: ₹{searchFilters.maxPrice} /day
                  </label>
                  <input
                    id="price-filter"
                    type="range"
                    min="20"
                    max="200"
                    value={searchFilters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                    className="range-input"
                  />
                </div>
                <div className="checkbox-group">
                  <input
                    id="available-filter"
                    type="checkbox"
                    checked={searchFilters.availableOnly}
                    onChange={(e) => handleFilterChange('availableOnly', e.target.checked)}
                    className="custom-checkbox"
                  />
                  <label className="input-label" htmlFor="available-filter">
                    Show Available Only
                  </label>
                </div>
              </div>
            )}
          </div>

          <div id="map" className="map-container" style={{ height: '500px', width: '100%' }}>
            {isLoading && (
              <div className="map-loading">
                <div className="loading-card">
                  <div className="spinner"></div>
                  <span>Loading map...</span>
                </div>
              </div>
            )}
          </div>

          <div className="branch-selector">
            <label className="input-label" htmlFor="branch-select">
              <i className="fa-solid fa-map-pin detail-icon"></i>
              Available Branches
            </label>
            <select
              id="branch-select"
              className="branch-select"
              value={selectedBranch}
              onChange={(e) => e.target.value === "All Nearby Branches" ? loadAllNearbyCars(nearbyBranches) : loadCarsForBranch(e.target.value)}
              disabled={nearbyBranches.length === 0}
            >
              <option value="">Select a branch to view cars</option>
              {nearbyBranches.length > 0 && (
                <option value="All Nearby Branches">All Nearby Branches</option>
              )}
              {nearbyBranches.map((branch) => (
                <option key={branch.name} value={branch.name}>
                  {branch.name} ({branch.distance.toFixed(1)} km)
                </option>
              ))}
            </select>
          </div>

          <div className="cars-section">
            <h2 className="section-title">
              {filteredCars.length > 0 ? `Available Cars` : `No Cars Found`}
            </h2>
            {filteredCars.length > 0 ? (
              <div className="cars-grid">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className={`car-card ${!car.available ? "unavailable" : ""}`}
                  >
                    <div className="car-image-container">
                      <img src={car.image} alt={`${car.brand} ${car.name}`} className="car-image" />
                      {getCarDistance(car) && (
                        <span className="distance-badge">
                          {getCarDistance(car).toFixed(1)} km away
                        </span>
                      )}
                      {!car.available && (
                        <span className="availability-badge">Unavailable</span>
                      )}
                    </div>
                    <div className="car-content">
                      <div className="car-header">
                        <h3 className="car-title">{car.name}</h3>
                        <span className="brand-badge">{car.brand}</span>
                      </div>
                      <div className="rating">
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className={`fa-solid fa-star${car.rating === 5 ? "" : "-half"}-stroke star`}></i>
                        <span className="rating-number">({car.rating} / 5)</span>
                      </div>
                      <div className="car-details">
                        <div className="detail-item">
                          <i className="fa-solid fa-user-group detail-icon"></i>
                          <span>Seats: {car.seats}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fa-solid fa-gears detail-icon"></i>
                          <span>Transmission: {car.transmission}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fa-solid fa-gas-pump detail-icon"></i>
                          <span>Fuel: {car.fuel}</span>
                        </div>
                      </div>
                      <div className="branch-info">
                        <i className="fa-solid fa-map-marker-alt"></i> Available at: {car.branchName}
                      </div>
                      <div className="car-footer">
                        <div className="price-section">
                          <span className="price">₹{car.price}</span>
                          <span className="price-label">per day</span>
                        </div>
                        <button
                          className={`book-btn ${car.available ? "available" : "unavailable"}`}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">
                  <i className="fa-solid fa-car-slash"></i>
                </div>
                <h3 className="no-results-title">No matching cars found.</h3>
                <p className="no-results-text">Try adjusting your filters or searching for a different location.</p>
              </div>
            )}

              <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
          </div>
        </div>
      </section>
    </>
  );
}

export default Models;