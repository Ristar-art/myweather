import React, { useState, useEffect } from "react";
import axios from "axios";
import { AuthProvider } from "./Components/auth";
const Weather = ({ userName }) => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
   const [location,setLocation] = useState("")
   
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,precipitation_probability_max,windspeed_10m_max&timezone=auto"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };
    fetchData();
    const fetchLocation = async (latitude, longitude) => {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          setLocation(response.data.display_name);
        } catch (error) {
          console.error("Error fetching location data: ", error);
        }
      };
    const successCallback = (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocation(latitude, longitude);
      };
  
      const errorCallback = (error) => {
        console.error(error.message);
      };
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
  }, []);

  if (error) {
    return <div>Error fetching weather data: {error.message}</div>;
  }
 

  return (
    <>
      <div
        style={{
          width: "60%",
          height: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            // display: "flex",
            // flexDirection: "row",
            justifyContent: "center",
            // backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "30%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              //  backgroundColor: "yellow",
              borderRadius: 20,
              alignItems: "center",
              // paddingLeft:20
            }}
          >
             <div
              style={{
                width: "20%",
                height: "10%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // backgroundColor: "red",
                borderRadius: 20,
                alignItems: "center",
                // paddingLeft:20
              }}
            >
              <p> Hi {userName}</p>
            </div>
            <div
              style={{
                width: "20%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                 //backgroundColor: "red",
                borderRadius: 20,
                alignItems: "center",
                // paddingLeft:20
              }}
            >
              <p>{location}</p>
            </div>
            <div
              style={{
                width: "60%",
                height: "10%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // backgroundColor: "red",
                borderRadius: 20,
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <p>{weatherData.daily && weatherData.daily.time[0]}</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "60%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              //   backgroundColor: "brown",
              borderRadius: 20,
            }}
          >
            <div
              style={{
                width: "50%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                // backgroundColor: "yellow",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "15%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  //   backgroundColor: "red",
                }}
              >
                <p
                  style={{
                    // backgroundColor: "red",
                    fontSize: "30px",
                    // marginBottom: "30px", // Add margin to create a gap
                  }}
                >
                  cloudy
                </p>
              </div>
              <p
                style={{
                  // backgroundColor: "red",
                  fontSize: "200px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
            {weatherData.daily && weatherData.daily.temperature_2m_max[0]}
                <span style={{ fontSize: "40px", alignSelf: "flex-start" }}>
                  °C
                </span>
              </p>
            </div>

            <div
              style={{
                width: "40%",
                height: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f7f7f7",
                 borderRadius: 20,
              }}
            >
              <p>wind Speed:{weatherData.daily && weatherData.daily.windspeed_10m_max[0]} km/h</p>
              {/* <p>Humidity: {weatherData.daily.precipitation_probability_max[0]}%</p> */}
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Weather;
