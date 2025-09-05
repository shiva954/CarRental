import { useEffect, useState } from "react";
import CarImg4 from "../images/cars-big/Volkswagen.jpeg";
import CarImg5 from "../images/cars-big/Honda.jpg";
import CarImg6 from "../images/cars-big/Hyundai.jpg";
import CarImg7 from "../images/cars-big/Jeep.jpeg";
import CarImg8 from "../images/cars-big/Kia.jpeg";
import CarImg9 from "../images/cars-big/Mahindra.jpeg";
import CarImg10 from "../images/cars-big/maruthi.jpeg";
import CarImg11 from "../images/cars-big/Mg.jpeg";
import CarImg12 from "../images/cars-big/Nissan.jpg";
import CarImg13 from "../images/cars-big/Renault.webp";
import CarImg14 from "../images/cars-big/Skoda.jpeg";
import CarImg16 from "../images/cars-big/Suzuki.jpg";
import CarImg17 from "../images/cars-big/Tata.jpeg";
import CarImg18 from "../images/cars-big/Toyota.jpg";
import CarImg19 from "../images/cars-big/Audi.jpeg";
import CarImg20 from "../images/cars-big/Bajaj.jpeg";
import CarImg1 from "../images/cars-big/Bmw.jpeg";
import CarImg2 from "../images/cars-big/Ford.jpg";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Maruti Swift":
      imgUrl = CarImg10;
      break;
    case "Hyundai Creta":
      imgUrl = CarImg6;
      break;
    case "Toyota Innova":
      imgUrl = CarImg18;
      break;
    case "Honda City":
      imgUrl = CarImg5;
      break;
    case "Mahindra XUV500":
      imgUrl = CarImg9;
      break;
    case "Volkswagen Polo":
      imgUrl = CarImg4;
      break;
      case "Tata Nexon":
      imgUrl = CarImg17;
      break;
    case "Kia Seltos":
      imgUrl = CarImg8;
      break;
    case "Ford EcoSport":
      imgUrl = CarImg2;
      break;
    case "Renault Duster":
      imgUrl =  CarImg13;
      break;
    case "Nissan Magnite":
      imgUrl = CarImg12;
      break;
    case "Skoda Kushaq":
      imgUrl = CarImg14;
      break;
      case "MG Hector":
      imgUrl = CarImg11;
      break;
    case "Jeep Compass":
      imgUrl = CarImg7;
      break;
    case "Suzuki Vitara Brezza":
      imgUrl = CarImg16;
      break;
    case "Mahindra Thar":
      imgUrl = CarImg9;
      break;
    case "Hyundai Venue":
      imgUrl = CarImg6;
      break;
    case "Bajaj Qute":
      imgUrl =  CarImg20;
      break;
      case "BMW 3 Series":
      imgUrl = CarImg1;
      break;
    case "Audi A4":
      imgUrl = CarImg19;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    {/* <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option> */}
                        <option>Select your car type</option>
                    <option value="Maruti Swift">Maruti Swift</option>
                    <option value="Hyundai Creta">Hyundai Creta</option>
                    <option value="Toyota Innova">Toyota Innova</option>
                    <option value="Honda City">Honda City </option>
                    <option value="Mahindra XUV500">Mahindra XUV500</option>
                    <option value="Volkswagen Polo">Volkswagen Polo</option>
                    <option value="Tata Nexon">Tata Nexon</option>
                    <option value="Kia Seltos">Kia Seltos</option>
                    <option value="Ford EcoSport">Ford EcoSport</option>
                    <option value="Renault Duster">Renault Duster</option>
                    <option value="Nissan Magnite">Nissan Magnite</option>
                    <option value="Skoda Kushaq">Skoda Kushaq</option>
                    <option value="MG Hector">MG Hector</option>
                    <option value="Jeep Compass">Jeep Compass</option>
                    <option value="Suzuki Vitara Brezza">Suzuki Vitara Brezza</option>
                    <option value="Mahindra Thar">Mahindra Thar</option>
                    <option value="Hyundai Venue">Hyundai Venue</option>
                    <option value="Bajaj Qute">Bajaj Qute</option>
                    <option value="BMW 3 Series">BMW 3 Series</option>
                    <option value="Audi A4">Audi A4</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Dilsukhnagar</option>
                    <option>HITEC City</option>
                    <option>Khairatabad</option>
                    <option>Kukatpally</option>
                    <option>LB Nagar</option>
                    <option>KPHB Colony</option>
                    <option>Lakdi-ka-pul</option>
                    <option>MG Bus Station</option>
                    <option>Miyapur</option>
                    <option>Nampally</option>
                    <option>Punjagutta</option>
                    <option>R.T.C. X Roads</option>
                    <option>S.R. Nagar</option>
                    <option>Secunderabad</option>
                    <option>Uppal</option>
                    <option>Tarnaka</option>
                    <option>Yusufguda</option>
                    <option>Musheerabad</option>
                    <option>Jubilee Hills Check Post</option>
                    <option>Gandhi Bhavan</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Dilsukhnagar</option>
                    <option>HITEC City</option>
                    <option>Khairatabad</option>
                    <option>Kukatpally</option>
                    <option>LB Nagar</option>
                    <option>KPHB Colony</option>
                    <option>Lakdi-ka-pul</option>
                    <option>MG Bus Station</option>
                    <option>Miyapur</option>
                    <option>Nampally</option>
                    <option>Punjagutta</option>
                    <option>R.T.C. X Roads</option>
                    <option>S.R. Nagar</option>
                    <option>Secunderabad</option>
                    <option>Uppal</option>
                    <option>Tarnaka</option>
                    <option>Yusufguda</option>
                    <option>Musheerabad</option>
                    <option>Jubilee Hills Check Post</option>
                    <option>Gandhi Bhavan</option>

                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-off <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
