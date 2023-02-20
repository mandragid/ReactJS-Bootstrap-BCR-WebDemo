import "../components/payBefore.css";
import React, { useState, useEffect, useRef } from "react";
// import moment from "moment/moment";
// import "moment/locale/id";

// Countdown Status
const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const INITIAL_COUNT = 3600;

const PayBefore = () => {
  // const today = new Date();
  // const todayAddedOneHour = today.setHours(today.getHours() + 1);
  // const formattedToday = moment(todayAddedOneHour).format("LLL")
  const deadline = localStorage.getItem("DeadlineToPay")
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  // const date = new Date();
  // date.setHours(date.getHours() + 1);
  // console.log(date); // 2022-06-18T03:00:00.000Z

  useEffect(() => {
    setStatus(STATUS.STARTED);
    // setTodayAddedOneHour(date.setHours(date.getHours() + 1));
  }, []);

  // const handleStart = () => {
  //   setStatus(STATUS.STARTED);
  // };
  // const handleStop = () => {
  //   setStatus(STATUS.STOPPED);
  // };
  // const handleReset = () => {
  //   setStatus(STATUS.STOPPED);
  //   setSecondsRemaining(INITIAL_COUNT);
  // };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

  // source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // https://stackoverflow.com/a/2998874/1673761
  const twoDigits = (num) => String(num).padStart(2, "0");

  return (
    <div className="payBefore-outer-container">
      <div className="payBefore-inner-container">
        <div className="payBefore-txt-container">
          <div className="payBefore-heading">
            <h1>Selesaikan Pembayaran Sebelum</h1>
          </div>
          <div className="payBefore-subHeading">
            {/* <h6>Rabu, 19 Mei 2022 jam 13.00 WIB</h6> */}
            <h6>{deadline}</h6>
          </div>
        </div>
        <div className="deadline-container">
          {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
        </div>
      </div>
    </div>
  );
};

export default PayBefore;
