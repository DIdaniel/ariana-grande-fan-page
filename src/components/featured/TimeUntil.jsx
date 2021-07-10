import React, { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
  const renderItem = (time, value) => (
    <div className="countdown_item">
      <div className="countdown_time">{time}</div>
      <div className="countdown_tag">{value}</div>
    </div>
  );

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event Starts in</div>
        <div className="countdown_bottom">
          {renderItem(27, "Days")}
          {renderItem(4, "hs")}
          {renderItem(10, "min")}
          {renderItem(50, "sec")}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
