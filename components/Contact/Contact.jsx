"use client";

import { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
// import { useSearchParams } from "next/navigation";

const socialsArr = [
  "/socials/facebook.png",
  "/socials/instagram.png",
  "/socials/twitter.png",
];

let contactSec;
export default function Contact() {
  // Create a ref for the contact section
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageInfo, setMessageInfo] = useState([{}]);

  useEffect(() => {
    function handleContactClick() {
      if (window.location.pathname === "/contact") {
        document.getElementsByClassName("contactSection")[0].scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    handleContactClick();
    // console.log(router);
  }, []);

  useEffect(() => {
    async function fetchData() {
      // `${process.env.REACT_APP_API_URL}`;
      const response = await axios.get(
        "https://dacrust.onrender.com/api/comments"
      );
      const result = response.data;
      setMessageInfo(response.data);
    }

    fetchData();
  }, []);

  async function clickSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://dacrust.onrender.com/api/comments/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      }
    );

    if (response.ok) {
      alert("Comment added successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } else {
      alert("Failed to add comment.");
    }
  }

  async function deleteSubmit(e, commentId) {
    e.preventDefault();

    const response = await fetch(
      `https://dacrust.onrender.com/api/comments/delete/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      alert("Comment deleted successfully!");
    } else {
      alert("Failed to delete comment.");
    }
  }

  return (
    <section className="contactSection">
      <div>
        <h1 id="contactH1">CONTACT US</h1>
        <h2 id="contactH2">DROP US A LINE AND WE'LL GET BACK TO YOU</h2>
        <form onSubmit={clickSubmit}>
          <div>
            <div>
              <label>First name</label>
              {/* <br /> */}
              <div></div>
              <input
                type="text"
                name="fName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Last name</label>
              {/* <br /> */}
              <div></div>
              <input
                type="text"
                name="lName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label>Email</label>
              <div></div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Subject</label>
              <div></div>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Leave us a message...</label>
            <div></div>
            <textarea
              cols={15}
              rows={5}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <input type="submit" value={"Submit"} />
          </div>
        </form>
        <form onSubmit={clickSubmit}>
          <div>
            {messageInfo.map((info, index) => (
              <div key={index}>
                <p>
                  Name: {info?.firstName},<br />
                  <br />
                  Surname: {info?.lastName}, <br />
                  <br />
                  Email: {info?.email}, <br />
                  <br />
                  Subject: {info?.subject}, <br />
                  <br />
                  Message: {info?.message}
                </p>
                <button
                  type="button" // Use "button" to prevent form submission
                  onClick={(e) => deleteSubmit(e, info.id)} // Directly call deleteSubmit without submit action
                  style={{
                    border: "none",
                    backgroundColor: "red",
                    color: "white",
                    cursor: "pointer",
                    marginTop: "10px",
                    // marginBottom: "20px",
                    // padding: "10px",
                    // marginLeft: "30px",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div>
        <h1>WE'RE OPEN</h1>
        <p>
          Monday-Friday : 11am-10pm
          <br />
          Saturday-Sunday: 11am-12am
        </p>
        <p>
          500 Terry Francois Street,
          <br />
          San Francisco, CA 94158
        </p>
        <p>
          Tel: 123-456-7890
          <br />
          Email: info@mysite.com
        </p>
        <div>
          {socialsArr.map((social, index) => (
            <a href="#" key={index}>
              <img src={social} key={index} width={"50px"} height={"50px"} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
