import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Place of Interest</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">B&Bs</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Discover monthly stays</li>
          <li className="fListItem">Unpacked: Travel articles</li>
          <li className="fListItem">Travel communities</li>
          <li className="fListItem">Seasonal and holiday deals</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Flight finder</li>
          <li className="fListItem">Restaurant reservations</li>
          <li className="fListItem">Booking.com for Travel Agents</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
          <li className="fListItem">About Booking.com</li>
          <li className="fListItem">Customer Service Help</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms &amp; conditions</li>
          <li className="fListItem">Partner dispute</li>
          <li className="fListItem">How We Work</li>
          <li className="fListItem">Privacy &amp; cookie statement</li>
          <li className="fListItem">MSA statement</li>
          <li className="fListItem">Corporate contact</li>
        </ul>
      </div>
      <div className="fText">
        Copyright &copy; 2022 <span>BookingApp</span>.
      </div>
      <div className="bottomContainer">
        <span>
          <span>Booking.com</span> is part of Booking Holdings Inc., the world
          leader in online travel and related services.
        </span>
        <div className="LinkContainer">
          <img
            src="https://img.shields.io/badge/booking.com-blue"
            alt="booking.com"
          />
          <img
            src="https://img.shields.io/badge/netflix.com-red"
            alt="booking.com"
          />
          <img
            src="https://img.shields.io/badge/amazon.com-003580"
            alt="booking.com"
          />
          <img
            src="https://img.shields.io/badge/Kayak.net-orange"
            alt="booking.com"
          />
          <img
            src="https://img.shields.io/badge/Google.com-green"
            alt="booking.com"
          />
          <img
            src="https://img.shields.io/badge/Microsoft.com-yellow"
            alt="booking.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
