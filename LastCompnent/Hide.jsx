import React from "react";
import Style from "../styles/Hide.module.css";
export const Hide = (props) => {
  return (
    <div className={Style.popupbox}>
      <div className={Style.box}>
        <span className={Style.closeicon} onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};
