import React from "react";
import HowToPay from "../components/HowToPay";
import PricingCards from "../components/PricingCards";
import { Card, Typography } from "antd";
const { Title } = Typography;

export default function Home() {
  return (
    <div className="home">
      <Card
        title={
          <Title style={{ marginBottom: "10px", fontSize: " 24px", color: "#1890ff"  }} level={2}>
            Sure Bet Tips & Predictions from Football Highway
          </Title>
        }
        bordered={false}
        style={{ marginBottom: "10px", fontSize: " 20px" }}
      >
        <p>
          We provide sure bet tips daily with an almost 100 percent win rate. We
          offer both free and VIP membership with access to daily accurate
          football betting tips with sure 10 to 20 odds. These tips are
          well-researched with a high probability of winning and generating
          immense profits in your betting endeavors
        </p>
      </Card>

      <PricingCards />

      <div>
        <HowToPay />
      </div>
    </div>
  );
}
