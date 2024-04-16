import React from "react";
import moment from "moment";

const WeatherCard = ({ cityName, temp, description, iconCode }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className="bg-blue-500 justify-center items-center m-5 p-6 rounded rounded-xl">
      <h2 className="text-white">{cityName}</h2>
      <img src={iconUrl} alt="Weather Icon" />
      <h1 className="text-white">{temp}°C </h1>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default WeatherCard;

// import React from "react";
// import moment from "moment";

// const WheatherCard = ({ date, temp, min, max }) => {
//   return (
//     <div className="card">
//       <div> {moment(date).format("dddd ha")} </div>
//       <h1> {temp}°C </h1>
//       <div>
//         {min}°C - {max}°C
//       </div>
//     </div>
//   );
// };

// export default WheatherCard;
