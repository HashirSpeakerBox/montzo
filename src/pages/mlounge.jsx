import React from "react";
import logo from "../assets/Untitled-1-03 1.png";
import bgimg from "../assets/shirt-mockup-concept-with-plain-clothing 1.png";
import centerlogo from "../assets/image 3.png";
import menu from "../assets/Component 1.svg";
import insta from "../assets/Vector (1).png";
import twitter from "../assets/Vector (2).png";
import linkedin from "../assets/Vector (3).png";
import utube from "../assets/Vector (4).png";
import img1 from "../assets/image 7.png";
import img2 from "../assets/pngwing 2.png";
import img3 from "../assets/image 9.png";
import img4 from "../assets/MLounge logo png 1.png";

function Mlounge() {
  return (
    <div>
      <div className="bgimg">
        <img src={bgimg} />
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="centerlogo">
          <img src={centerlogo} />
        </div>
        <div className="menu">
          <p>Meet the family</p>
          <img src={menu} />
        </div>
        <div className="location">
          <p>
            Now Stores @ Kannur, Kottakkal, Manjeri,<br></br> Perinthalmanna &
            Calicut
          </p>
          <div className="icons">
            <img src={insta} />
            <img src={twitter} />
            <img src={linkedin} />
            <img src={utube} />
          </div>
        </div>
      </div>
      <div className="text1">
        <p>
          A lifestyle fashion store set to dress your needs, vogue your passion
          and lift your style. <br></br>The splendour of never before choices
          woven with the finest of quality across a <br></br>plethora of
          diversified menswear, womenswear and kidswear.
        </p>
      </div>
      <div className="text2">
        <p>
          Apparels - Men, Women & Juniors <br></br>Showrooms of 10,000 to 25,000
          Sq.fts<br></br>
          Price Range 199 to 19,999<br></br> Franchise opportunities -
          Investment Rs.2,500/Sq.ft
        </p>
      </div>
      <div className="footer">
        <p>Benchmarking Brands</p>
        <div>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </div>
      </div>
    </div>
  );
}

export default Mlounge;
