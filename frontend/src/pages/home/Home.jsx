import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};

const Home = () => {
  
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
   
        <div className="widgets">
          <Widget type="valid" count= {10000} />
          <Widget type="fraud" count={1000} />
          <Widget type="total" count={10100} />
          
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months Fraud Transaction Recordings" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
