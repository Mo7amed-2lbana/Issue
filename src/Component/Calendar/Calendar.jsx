import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { Link } from "react-router-dom";

export default function CalendarComp() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className=" myCalendar position-absolute">
        <Link to={"/"}>
          <i className=" fa fa-close fa-lg"></i>
        </Link>
        <div className="app">
          <div className="calendar-container ms-3">
            <Calendar onChange={setDate} value={date} />
          </div>
          <div className="text-center">{date.toDateString()}</div>
        </div>
      </div>
    </>
  );
}
