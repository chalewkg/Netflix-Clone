import React from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Banner from "../../components/Banner/Banner.js";
import RowList from "../../components/Rows/RowLsit/RowList.js";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
