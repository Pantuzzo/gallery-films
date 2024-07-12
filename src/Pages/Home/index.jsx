import React from "react";
import Banner from "../../Components/Banner";
import Movies from "../../Components/Movies";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Movies genre="16" page="1" />
      <Movies genre="37" page="2" />
      <Movies genre="10752" page="3" />
      <Movies genre="53" page="4" />
      <Movies genre="10770" page="5" />
      <Movies genre="878" page="6" />
      <Movies genre="10749" page="7" />
      <Movies genre="9648" page="8" />
      <Movies genre="36" page="9" />
      <Movies genre="14" page="10" />
      <Movies genre="10751" page="11" />
      <Movies genre="18" page="12" />
      <Movies genre="99" page="13" />
      <Movies genre="80" page="14" />
      <Movies genre="35" page="15" />
      <Movies genre="12" page="16" />
      <Movies genre="28" page="17" />
    </div>
  );
};

export default HomePage;
