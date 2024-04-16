import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric`
      );
      console.log(response.data);
      setWeatherData(response.data);
      setCityName("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="fullscreen-background flex flex-col">
      <div className="bg-blue-300 left-0 absolute top-0 p-10 rounded-full rounded-t-lg rounded-bl "></div>
      <div className="bg-blue-300 absolute top-0 right-0 p-10 rounded-full rounded-t-lg rounded-br"></div>
      <div className="flex flex-col justify-center items-center mt-32 ">
        <h1 className="text-white text-3xl mb-5">Weather App</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="bg-white mb-5 px-6 p-1 text-center"
            placeholder="Your City"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white text-2xl px-2"
          >
            Search
          </button>
        </form>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        {weatherData && (
          <WeatherCard
            cityName={weatherData.name}
            temp={weatherData.main.temp}
            description={weatherData.weather[0].description}
            iconCode={weatherData.weather[0].icon}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from "react";
// import axios from "axios";
// import WeatherCard from "./WeatherCard";

// const Home = () => {
//   const [cityName, setCityName] = useState("");
//   const [Data, setData] = useState(null);

//   const SubmitHandler = async (e) => {
//     e.preventDefault();
//     console.log("I am function");

//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric`
//       );
//       console.log("response".response);
//       setData(response.data);
//       setCityName("");
//     } catch (error) {
//       console.log("error".error);
//     }
//   };

//   return (
//     <div className="fullscreen-background flex flex-col">
//       <div className="bg-blue-300 left-0 absolute top-0 p-10 rounded-full rounded-t-lg rounded-bl "></div>
//       <div className="bg-blue-300 absolute top-0 right-0 p-10 rounded-full rounded-t-lg rounded-br"></div>
//       <div className="flex flex-col justify-center items-center mt-32 ">
//         <h1 className="text-white text-3xl mb-5">Weather App</h1>
//         <form onSubmit={SubmitHandler} className="flex flex-col">
//           <input
//             className="bg-white mb-5 px-6 p-1 text-center"
//             placeholder="Your City"
//             type="text"
//             value={cityName}
//             onChange={(e) => setCityName(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white text-2xl px-2"
//           >
//             Search
//           </button>
//         </form>

//         {Data && (
//           <WeatherCard
//             cityName={Data.name}
//             temp={Data.main.temp}
//             description={Data.weather[0].description}
//             iconCode={Data.weather[0].icon}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// mam code
// import React, { useState } from "react";
// import axios from "axios";

// import WeatherCard from "./WeatherCard";

// const Home = () => {
//   let [cityName, setCityName] = useState("");
//   let [data, setData] = useState([]);

//   let SubmitHandler = async (e) => {
//     e.preventDefault();
//     console.log("I am a function");

//     try {
//       let response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric`
//       );
//       // console.log("response",response) //user ko agar hamay koi cheez nh dekhani ho aur
//       setData(response.data.list);
//       //us cheez ko test krna ho
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   return (
//     <div
//
//     >
//       <h1>Welcome to My Weather App</h1>
//       <form onSubmit={SubmitHandler}>
//         CityName:{" "}
//         <input
//           className="bg-blue-400"
//           type="text"
//           onChange={(e) => setCityName(e.target.value)}
//         />
//         <button type="submit" className="bg-black text-white">
//           Get Weather
//         </button>
//       </form>
//       {data.map((eachForcast, index) => (
//         <WeatherCard
//           key={index}
//           date={eachForcast.dt_txt}
//           temp={eachForcast.main.temp}
//           min={eachForcast.main.temp_min}
//           max={eachForcast.main.temp_max}
//         />
//       ))}
//     </div>
//   );
// };

// export default Home;
