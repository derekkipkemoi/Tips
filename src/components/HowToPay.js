import React from "react";
import { Card, Typography } from "antd";
const { Title } = Typography;
export default function HowToPay() {
  return (
    <Card
      title={
        <Title
          style={{ marginBottom: "10px", fontSize: " 24px", color: "#1890ff" }}
          level={2}
        >
          Buy Sure Bet Tips & Predictions Today
        </Title>
      }
      bordered={false}
      style={{ marginBottom: "10px", fontSize: " 20px" }}
    >
      <p style={{ fontSize: " 18px" }}>
        Go to
        <span style={{ fontWeight: "bolder" }}>
          {" "}
          Lipa Na M-PESA - Buy Goods
        </span>
      </p>
      <p style={{ fontSize: " 18px" }}>
        Enter the Till Number{" "}
        <span style={{ fontWeight: "bolder" }}>5204479</span>
      </p>
      <p style={{ fontSize: " 18px" }}>
        <span style={{ fontWeight: "bolder" }}>Enter Amount</span>
      </p>
      <p style={{ fontSize: " 18px" }}>
        <span style={{ fontWeight: "bolder", color: "#1bbc9d" }}>
          Ksh. 200 for Basic Plan (5 Daily odds)
        </span>
      </p>
      <p style={{ fontSize: " 18px" }}>
        <span style={{ fontWeight: "bolder", color: "#1bbc9d" }}>
          Ksh 400 for Weekly VIP plan (10+ sure odds )
        </span>
      </p>
      <p style={{ fontSize: " 18px" }}>
        <span style={{ fontWeight: "bolder", color: "#1bbc9d" }}>
          Ksh 1000 for Monthly VIP Plan (20+ sure odds )
        </span>
      </p>
      <p style={{ fontSize: " 18px" }}>
        You will receive SMS with your Username & password
      </p>
      <p style={{ fontSize: " 18px" }}>Login to access our tips </p>
    </Card>
  );
}
