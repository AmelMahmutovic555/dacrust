"use client";
import Link from "next/link";
import "./SectionFavorites.css";
import { useState, useEffect } from "react";

export default function SectionFavorites() {
  const [showRecipe1, setShowRecipe1] = useState(0);

  useEffect(() => {
    //   window.onscroll = () => {
    window.addEventListener("scroll", function () {
      const recipeView1 = document.querySelectorAll(
        ".favoriteSection > div"
      )[0];
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
    <section className="favoriteSection">
      <div
        style={{ opacity: showRecipe1, transition: "opacity 1s ease-in-out" }}
      >
        <div>
          <img
            src="/food/crispy-chicken-sandwich-recipe.jpg"
            alt="crispy-chicken-sandwich"
            width={"200"}
            height={"200"}
          />
          <h1>CRISPY CHICKEN SANDWICH</h1>
        </div>
        <div>
          <p id="favoritesParagraph">ALL TIME FAVORITES</p>

          <img
            src="/food/spicy-wings.jpg"
            alt="crispy-chicken-sandwich"
            width={"200"}
            height={"200"}
          />
          <h1>HOT & SPICY WINGS</h1>
          <Link href={"/menu"}>
            <button style={{ marginBottom: "30px" }}>Full Menu</button>
          </Link>
        </div>
        <div>
          <img
            src="/food/french-fries.jpg"
            alt="crispy-chicken-sandwich"
            width={"200"}
            height={"200"}
          />
          <h1>FRENCH FRIES</h1>
        </div>
      </div>
    </section>
  );
}
