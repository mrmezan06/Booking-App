import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Khulna,Dhaka,Rangpur"
  );
  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Laoding..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{data[0].city}</h1>
              <h2>{data[0].count} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{data[1].city}</h1>
              <h2>{data[1].count} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1599233068253-dd2fda2458db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{data[2].city}</h1>
              <h2>{data[2].count} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
