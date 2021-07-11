import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : "large"}
      style={{ ...props.style }}
    >
      {props.iconTicket ? (
        <img src={TicketIcon} alt="icon_button" className="iconImage" />
      ) : null}

      {props.text}
    </Button>
  );
};

export default MyButton;
