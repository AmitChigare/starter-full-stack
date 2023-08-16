import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main className="py-3">
          <Router>
            <Routes>
              {/* <Route path="/" element={<HomeScreen />} exact /> */}
              <Route path="/" Component={HomeScreen} exact />
            </Routes>
          </Router>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
