import React, { useState } from "react";
import "./LandingPage.css";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const { data, error } = await supabase
    .from("Registration")   // make sure this matches your table
    .insert([{ name, email, requirements }]);

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert("Supabase Error: " + error.message);
    return;
  }

  navigate("/thank-you");
};


  return (
    <div className="landing-wrapper">
      <div className="landing-card">
        {/* LEFT SIDE */}
        <div className="landing-left">
          <div className="logo-text">
            <img src={`${process.env.PUBLIC_URL}/rhino-kart.png`} alt="" />
            <span>Rhino Kart</span>
          </div>

          <p className="landing-tagline">
            Register to get early access to our platform
          </p>

          <div className="left-images">
            <img src={`${process.env.PUBLIC_URL}/tshirt.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/shoes.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/purse.png`} alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="landing-right">
          <h2 className="landing-title">Join the Waitlist</h2>
          <p className="landing-sub">
            We will notify you once your dashboard is ready.
          </p>

          <form className="landing-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>
              Special Requirements{" "}
              <span className="optional">(Optional)</span>
            </label>
            <textarea
              placeholder="Write anything you want us to know..."
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />

            <button type="submit" className="join-button">
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
