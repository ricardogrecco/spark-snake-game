"use client";

import "@/app/styles/clock.css";

import { useCallback, useEffect, useRef, useState } from "react";

export default function ComingSoon() {
  const secondCount = useRef(0);
  const minuteCount = useRef(0);
  const hourCount = useRef(0);

  const setDate = useCallback(() => {
    const secondHand = document.querySelector<HTMLDivElement>(".second-hand");
    const minuteHand = document.querySelector<HTMLDivElement>(".minute-hand");
    const hourHand = document.querySelector<HTMLDivElement>(".hour-hand");

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    if (seconds === 0) {
      secondCount.current++;
      if (minutes === 0) {
        minuteCount.current++;
        if (hours === 0) {
          hourCount.current++;
        }
      }
    }

    const secondsDegrees = (seconds / 60 + secondCount.current) * 360;
    const minutesDegrees = (minutes / 60 + minuteCount.current) * 360;
    const hoursDegrees =
      minutesDegrees / 12 + (hours / 12 + hourCount.current) * 360;

    secondHand!.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand!.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand!.style.transform = `rotate(${hoursDegrees}deg)`;
  }, [secondCount, minuteCount, hourCount]);

  useEffect(() => {
    const interval = setInterval(setDate, 1000);

    return () => clearInterval(interval);
  }, [setDate]);

  return (
    <main className="main">
      <div className="clock-content">
        <p>NEW WEBSITE</p>
        <h1>
          <strong>
            COMING
            <br />
            SOON
          </strong>
        </h1>
        <p>STAY TUNED!</p>
      </div>
      <div className="clock">
        <div className="hour-hand"></div>
        <div className="minute-hand"></div>
        <div className="second-hand"></div>
        <div
          className="hour-mark"
          style={{
            transform: "rotate(0deg)",
          }}
        >
          <div className="hour-line">|</div>
          <div className="hour-line">|</div>
        </div>
        <div
          className="hour-mark"
          style={{
            transform: "rotate(30deg)",
          }}
        >
          <div className="hour-line">|</div>
          <div className="hour-line">|</div>
        </div>
        <div
          className="hour-mark"
          style={{
            transform: "rotate(60deg)",
          }}
        >
          <div className="hour-line">|</div>
          <div className="hour-line">|</div>
        </div>
        <div
          className="hour-mark"
          style={{
            transform: "rotate(90deg)",
          }}
        >
          <div className="hour-line">|</div>
          <div className="hour-line">|</div>
        </div>
        <div
          className="hour-mark"
          style={{
            transform: "rotate(120deg)",
          }}
        >
          <div className="hour-line">|</div>
          <div className="hour-line">|</div>
        </div>
        <div
          className="hour-mark"
          style={{
            transform: "rotate(150deg)",
          }}
        >
          <div className="hour-line">|</div>
          <div className="hour-line">|</div>
        </div>
      </div>
    </main>
  );
}
