import React from "react";
import HowToPay from "./HowToPay";
import PricingCards from "./PricingCards";

export default function Home() {
  return (
    <div className="home">
      <h1 style={{ fontSize: "24px" }}>
        Sure Bet Tips & Predictions from Football Highway
      </h1>
      <p style={{ fontSize: "15px" }}>
        We provide sure bet tips daily with an almost 100 percent win rate. We
        offer both free and VIP membership with access to daily accurate
        football betting tips with sure 10 to 20 odds. These tips are
        well-researched with a high probability of winning and generating
        immense profits in your betting endeavors
      </p>
      <div>
        <PricingCards />
      </div>
      <div>
        <HowToPay/>
      </div>
    </div>
  );
}
