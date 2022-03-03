import React from "react";
import style from "../../App.module.css";

export const Message = (props) => {
  return (
    <>
      <p className={style.message} style={{ fontSize: "20px" }}>
        A message has created
      </p>
    </>
  );
};
