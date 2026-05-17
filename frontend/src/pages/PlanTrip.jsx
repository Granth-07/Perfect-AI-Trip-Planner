import React from "react";
import Navbar from "../components/Navbar";
import AITripPlanner from "../components/AITripPlanner";
import Footer from "../components/Footer";

export default function PlanTrip() {
  return (
    <>
      <Navbar />
      <AITripPlanner />
      <Footer />
    </>
  );
}
