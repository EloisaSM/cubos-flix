import React from "react";

import { useState, useEffect } from "react";

function BannerCupom() {
  const durationBannerCupom = 8 * 60;

  const [countdown, setCountdown] = useState(durationBannerCupom);

  const min = String(Math.floor(countdown / 60)).padStart(2, "0");
  const seg = String(Math.floor(countdown % 60)).padStart(2, "0");

  useEffect(() => {
    setInterval(() => {
      const interval = setCountdown((countdown) => {
        if (countdown > 0) {
          return countdown - 1;
        }

        return 0;
      });

      return clearInterval(interval);
    }, 1000);
  }, []);
  //criar componente banner
  return (
    <div>
      {countdown > 0 && (
        <div className="banner-cupom">
          <div className="ticket-content">
            <div className="cupom-container">
              <h2>aproveite agora</h2>
              <div className="coupom-content">
                <img src="images/coupon-icon.svg" alt="imagem de um cupom" />
                <p>CUPOM: htmlnaoelinguagem</p>
              </div>
            </div>
            <div className="counter-container">
              <h2>Finaliza em:</h2>
              <div className="counter">
                <img src="images/time-icon.svg" alt="" />
                <p>{`00:${min}:${seg}`}</p>
              </div>
            </div>
            <img src="images/money.png" alt="notas de dinheiro e moedas" />
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerCupom;
