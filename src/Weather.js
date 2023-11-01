import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  return (
    <>
      <div
        style={{
          width: "60%",
          height: "80%",
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
              height: "10%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              //   backgroundColor: "red",
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
              <p>Hi Boiketlo</p>
            </div>
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
              <p>Maluti</p>
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
              <p>20.04.2023</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "80%",
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
                20
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
              <p>wind Speed: 2.4 km/h</p>
              <p>Humidity: 60%</p>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Weather;
