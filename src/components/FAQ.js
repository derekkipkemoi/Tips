import React from "react";

import { Card} from "antd";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div>
      <Card
        bordered={false}
        style={{ marginBottom: "10px", fontSize: " 20px", color: "#1890ff", marginTop:"20px" }}
      >
        Frequently Asked Questions About Sure Bet Tips
      </Card>
      <Card
        title="How accurate are Predictions? "
        bordered={true}
        style={{ marginBottom: "10px" }}
      >
        <p>
          We provide Premium tips and jackpot predictions which are nearly 100%
          sure. Our proven winning record for football bets is 95-100%. We also
          offer free football tips that are not as accurate as the VIP tips.
          Subscribe to the VIP tips to win all your bets consistently. You are
          guaranteed of making substantial profits.
        </p>
      </Card>

      <Card
        title="What is the cost of your VIP tips? "
        bordered={true}
        style={{ marginBottom: "10px" }}
      >
        <p>
          We charge only $2 per week [5 Sure Odds Daily] and $4 per week [10
          Sure Odds daily]. Follow this link to{" "}
          <Link to={"/how_to_pay"}>Learn more</Link>
        </p>
      </Card>

      <Card
        title="Do you offer accurate jackpot predictions ? "
        bordered={true}
        style={{ marginBottom: "10px" }}
      >
        <p>Yes. We offer jackpot predictions for customers in Kenya</p>
      </Card>

      <Card
        title="What is included in the VIP plan? "
        bordered={true}
        style={{ marginBottom: "10px" }}
      >
        <p>
          The Vip plan includes sure bets from the following betting market: –
          1X2 – HT/FT – GG and NG Predictions – Over and Under Predictions The
          total odds are between 10 to 15. We believe that small sure odds are
          better than thousands of odds from risky correct score betting market.
        </p>
      </Card>

      <Card
        title="Which betting market is the most profitable?? "
        bordered={true}
        style={{ marginBottom: "10px" }}
      >
        <p>
          We use various betting markets in coming up with sure bet predictions.
          The most profitable betting market from our assessment is Over/Under
          1.5, Double Chance, Draw No Bet and 1X2 markets.
        </p>
      </Card>
    </div>
  );
}
