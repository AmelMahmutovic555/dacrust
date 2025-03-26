"use client";
import Link from "next/link";
import "./Header.css";
import { useEffect, useState } from "react";

let opacity1 = 0.0;
let opacity2 = 0.0;
let opacity3 = 0.0;
export default function Header({
  header1,
  header2,
  btn,
  h1Style1,
  h1Style2,
  btnStyle,
}) {
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  const [opacity3, setOpacity3] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setOpacity1((prevOpacity) => {
        if (prevOpacity >= 1) {
          clearInterval(intervalId);
        }
        return prevOpacity + 0.1;
      });
    }, 100);

    setTimeout(function () {
      let intervalId1 = setInterval(() => {
        setOpacity2((prevOpacity2) => {
          if (prevOpacity2 >= 1) {
            clearInterval(intervalId1);
          }
          return prevOpacity2 + 0.1;
        });
      }, 100);
    }, 1000);

    setTimeout(function () {
      let intervalId2 = setInterval(() => {
        setOpacity3((prevOpacity3) => {
          if (prevOpacity3 >= 1) {
            clearInterval(intervalId2);
          }
          return prevOpacity3 + 0.1;
        });
      }, 100);
    }, 2000);
  }, []);
  return (
    <header>
      <div>
        {/* <div>
          <img src="HeaderChicken.jpg" alt="chicken-wings" />
        </div> */}
        <div>
          {/* <h1 style={h1Style1}>{header1}</h1> */}
          <h1 style={{ ...h1Style1, opacity: opacity1 }}>{header1}</h1>
          <h1 style={{ ...h1Style2, opacity: opacity2 }}>{header2}</h1>
          <button style={{ ...btnStyle, opacity: opacity3 }}>
            <Link href={"/order"}>{btn}</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
