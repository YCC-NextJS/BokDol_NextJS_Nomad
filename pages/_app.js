import React from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
};

export default App;
