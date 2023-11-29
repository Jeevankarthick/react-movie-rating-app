import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} />
//       <p>movie rating was {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      message={["Horrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating color="green" size={30} defaultRating={5} />
    <Test /> */}
  </React.StrictMode>
);
