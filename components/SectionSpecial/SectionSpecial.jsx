"use client";
import { useEffect, useState } from "react";
import "./SectionSpecial.css";

export default function SectionSpecial() {
  const [showRecipe1, setShowRecipe1] = useState(0);

  useEffect(() => {
    //   window.onscroll = () => {
    window.addEventListener("scroll", function () {
      const recipeView1 = document.querySelectorAll(".specialSection > div")[0];
      const topRecipe1 = recipeView1.getBoundingClientRect().bottom;
      if (window.pageYOffset > topRecipe1) {
        setShowRecipe1((prevShowRecipe) => {
          if (prevShowRecipe >= 1) {
            return prevShowRecipe;
          }

          prevShowRecipe + 0.1;
        });
      }
    });
    //   };
  }, []);
  return (
    <section className="specialSection">
      <div
        style={{ opacity: showRecipe1, transition: "opacity 2s ease-in-out" }}
      >
        <div>
          <h1
            style={{
              color: "black",
            }}
          >
            SPECIAL OF THE WEEK
          </h1>
          <h2
            style={{
              color: "black",
            }}
          >
            YOUR NEW GUILTY PLEASURE
          </h2>
          {/* <p
            style={{
              color: "black",
            }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p> */}
        </div>
        <div>
          <img src="PALACINKA_EUROKREM_PLAZMA.jpg" />
        </div>
      </div>
    </section>
  );
}
