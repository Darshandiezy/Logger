import React from "react";
import first from "./Images/img-1.jpg";
import second from "./Images/img2.jpg";
import three from "./Images/img3.jpg";
import four from "./Images/img4.jpg";
import five from "./Images/img5.jpg";
import six from "./Images/img6.jpg";
import seven from "./Images/img7.jpg";
import eight from "./Images/img8.jpg";
import nine from "./Images/imh1.jpg";
import ten from "./Images/img10.jpg";
import Carousel from "react-elastic-carousel";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center", background: "gray" }}>
        Home Component
      </h1>
      <h2 style={{textAlign: "center", background: "gray"}} className="dropdn">width:100 & height:200px</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <img className="bor" src={first}></img>
          <img src={second}></img>
          <img src={three}></img>
          <img src={four}></img>
          <img src={five}></img>
          <img src={six}></img>
          <img src={seven}></img>
          <img src={eight}></img>
          <img src={nine}></img>
          <img src={ten}></img>
          <img src={first}></img>
          <img src={second}></img>
          <img src={three}></img>
          <img src={four}></img>
          <img src={five}></img>
          <img src={six}></img>
          <img src={eight}></img>
          <img src={nine}></img>
        </Carousel>
      </div>
    </>
  );
}
export default Home;
