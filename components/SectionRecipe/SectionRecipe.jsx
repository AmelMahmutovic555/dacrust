"use client";
import { useEffect, useState } from "react";
import "./SectionRecipe.css";

export default function SectionRecipe({ name, paragraph }) {
  const [showRecipe, setShowRecipe] = useState(0);

  useEffect(() => {
    // window.onscroll = () => {
    window.addEventListener("scroll", function () {
      const recipeView = document.querySelectorAll(".recipeSection > div")[0];
      const topRecipe = recipeView.getBoundingClientRect().bottom;
      if (window.pageYOffset > topRecipe) {
        setShowRecipe((prevShowRecipe) => {
          if (prevShowRecipe >= 1) {
            return prevShowRecipe;
          }

          prevShowRecipe + 0.1;
        });
      }
    });
    // };
  }, []);
  return (
    <section className="recipeSection">
      <div
        style={{ opacity: showRecipe, transition: "opacity 1s ease-in-out" }}
      >
        <h1
          className="orderColor"
          style={{
            width: "100%",
          }}
        >
          ORDER ON THE GO
        </h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div
        style={{ opacity: showRecipe, transition: "opacity 1s ease-in-out" }}
      >
        <h1 className="orderColor">DOORSTEP DELIVERY</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div
        style={{ opacity: showRecipe, transition: "opacity 1s ease-in-out" }}
      >
        <h1 className="orderColor">CURBSIDE PICKUP</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div
        style={{ opacity: showRecipe, transition: "opacity 1s ease-in-out" }}
      >
        <h1>ORIGINAL RECIPE SINCE 2035</h1>
      </div>
    </section>
  );
}
