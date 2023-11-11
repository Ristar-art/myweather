import { Routes, Route } from "react-router-dom";
import Weather from "./Weather";
import { AuthProvider } from "./Components/auth";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import About from "./Components/About";
import LoginPage from "./Components/Login";
import { RequreAuth } from "./Components/RequreAuth";
import RegistrationPage from "./Components/Registration";
//import "./App.css";
function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", height:"100vh", width:"100wh", justifyContent:"flext-start", alignItems:"center"}}>
      <AuthProvider>
        <Navbar></Navbar>
      <div style={{ height:"95vh", width : "100vw", justifyContent:"center", alignItems:"center", display:"flex"}}>

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/weather"
            element={
              <RequreAuth>
                <Weather />
              </RequreAuth>
            }
          ></Route>
        </Routes>
      </div>
        
      </AuthProvider>
    </div>
  );
}

export default App;

// import { Home } from "./Components/Home";
// import { About } from "./Components/About";

//import { Navbar } from "./Components/Navbar";
//import { RequreAuth } from "./Components/RequreAuth";
//import { AuthProvider } from "./Components/auth";
// import LoginPage from "./Components/Login";
// import RegistrationPage from "./Components/Registration";

// <AuthProvider>
// <Navbar />

// <Routes>

// <Route
//     path="/weather"
//     element={

//         <Weather />

//     }
//   ></Route>
//   <Route path="/" element={<Home />}></Route>
//   <Route path="/about" element={<About />}></Route>
//   <Route
//     path="/rationpage"
//     element={<RegistrationPage />}
//   ></Route>
//   <Route path="/login" element={<LoginPage />}></Route>
//   <Route
//     path="/weather"
//     element={
//       <RequreAuth>
//         <Weather />
//       </RequreAuth>
//     }
//   ></Route>
// </Routes>
// </AuthProvider>
