"use client";

import Link from "next/link";
import "./Navbar.css";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const contactSecRef = useRef(null); // Create a ref to the contact section

  // const handleContactClick = (e) => {
  //   e.preventDefault(); // Prevent default navigation
  //   router.push("/contact?scroll=true"); // Navigate with query parameter
  // };

  // const handleContactClick = (e) => {
  //   e.preventDefault();
  //   if (contactSecRef.current) {
  //     contactSecRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  return (
    <nav>
      <div>
        <img
          src="chicken1.png"
          alt="Some chicken"
          width={"100"}
          height={"100"}
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link href={"/order"}>Order Online</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
