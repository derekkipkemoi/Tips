import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";
export default function PricingCards() {
  return (
    <div>
      <div class="w-table">
        <div class="w-table-cell">
          <div class="w-container">
            <div class="w-card color-violet">
              <div class="card-header">
                <div class="w-title">Basic</div>
                <div class="w-price">Ksh 200</div>
                <div class="container-button">
                  <Link className="w-button" to={"/how_to_pay"}>
                    Subscribe
                  </Link>
                </div>
              </div>
              <div class="card-content">
                <div class="w-item">
                  <span>7 Day </span>Access
                </div>
                <div class="w-item">
                  <span>5 Sure Odds </span>Daily
                </div>
              </div>
            </div>
            <div class="w-card color-green">
              <div class="card-header">
                <div class="w-title">VIP Plan - Weekly</div>
                <div class="w-price">Ksh 400</div>
                <div class="container-button">
                  <Link className="w-button" to={"/how_to_pay"}>
                    Subscribe
                  </Link>
                </div>
              </div>
              <div class="card-content">
                <div class="w-item">
                  <span>7 Day </span>Access
                </div>
                <div class="w-item">
                  <span>10 - 20 Sure Odds </span>Daily
                </div>
              </div>
            </div>
            <div class="w-card color-blue">
              <div class="card-header">
                <div class="w-title">VIP Plan - Monthly</div>
                <div class="w-price">Ksh 1000</div>
                <div class="container-button">
                  <Link className="w-button" to={"/how_to_pay"}>
                    Subscribe
                  </Link>
                </div>
              </div>
              <div class="card-content">
                <div class="w-item">
                  <span>30 Day </span>Access
                </div>
                <div class="w-item">
                  <span>10 - 30 Sure Odds </span>Daily
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
