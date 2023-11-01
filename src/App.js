import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './Weather';
import { Home } from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Replace 'Home' with your home component */}
          <Route path="/weather" element={<Weather />} />
          {/* Add more Route components as needed */}
        </Routes>
      </div>
    </Router>
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
