"use client";
import Link from "next/link";
import "./DeliverSection.css";
import { useEffect, useState } from "react";

export default function DeliverSection() {
  const [showRecipe1, setShowRecipe1] = useState(0);

  useEffect(() => {
    //   window.onscroll = () => {
    window.addEventListener("scroll", function () {
      const recipeView1 = document.querySelectorAll(".shippingBox")[0];
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
    <section id="shippingSection">
      <div
        className="shippingBox"
        style={{ opacity: showRecipe1, transition: "opacity 3s ease-in-out" }}
      >
        <div>
          <h1>WE DELIVER</h1>
          <h2
            style={{
              color: "black",
            }}
          >
            SATISFYING YOUR CRAVING JUST GOT EASIER
          </h2>
          <p
            style={{
              color: "black",
            }}
          >
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <button>
            <Link href={"/order"}>Order Online</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
