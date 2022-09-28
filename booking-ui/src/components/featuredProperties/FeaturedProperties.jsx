import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
          alt="Madrid"
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from 120$</span>
        <span className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </span>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="London"
          className="fpImg"
        />
        <span className="fpName">Hotel Meridine</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from 240$</span>
        <span className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </span>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="New York"
          className="fpImg"
        />
        <span className="fpName">Hotel Paradise</span>
        <span className="fpCity">New York</span>
        <span className="fpPrice">Starting from 590$</span>
        <span className="fpRating">
          <button>8.3</button>
          <span>Excellent</span>
        </span>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="New Jersey"
          className="fpImg"
        />
        <span className="fpName">Hotel Bliss</span>
        <span className="fpCity">New Jersey</span>
        <span className="fpPrice">Starting from 400$</span>
        <span className="fpRating">
          <button>9.5</button>
          <span>Excellent</span>
        </span>
      </div>
    </div>
  );
};

export default FeaturedProperties;
