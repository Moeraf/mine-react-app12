import React, { useContext, useRef, useEffect } from "react";
import "./AboutText.css";
import { UserContext } from "../../ContextAll/UserContext";
import up from "../../assets/images/up.ico";

function AboutText() {
  const { UserText } = useContext(UserContext);

  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        btnRef.current.classList.add("show");
      } else {
        btnRef.current.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // let span = document.querySelector('.up');
  // console.log(span);

  // window.onscroll = function () {
  //   this.scrollY >= 500 ? btnRef.classList.add("show") : btnRef.classList.remove("show");
  // }

  const scrolling = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-texts">
      <h1>
        About <span className="rafei">Me</span>
      </h1>
      <h5>
        Full <span className="rafei">Stack</span> developper
      </h5>
      <p>{UserText}</p>
      <img
        onClick={() => {
          scrolling();
        }}
        ref={btnRef}
        className="up"
        src={up}
        alt=""
      />
    </div>
  );
}

export default AboutText;
