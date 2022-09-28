import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const images = [
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="fpItem" key={i}>
                <img src={img} alt={data[i]?.name} className="fpImg" />
                <span className="fpName">{data[i]?.name}</span>
                <span className="fpCity">{data[i]?.city}</span>
                <span className="fpPrice">
                  Starting from {data[i]?.cheapestPrice}$
                </span>
                {/* data[i].rating */}
                {false && (
                  <span className="fpRating">
                    <button>{data[i]?.rating}</button>
                    <span>Excellent</span>
                  </span>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
// 1:51:00
