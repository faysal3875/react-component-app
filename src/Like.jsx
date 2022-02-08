import React, { Component } from "react";
const Like = ({ onLike, liked }) => {
  let classes = "fa fa-heart";
  classes += !liked ? "-o" : "";
  return (
    <i onClick={onLike} className={classes} style={{ cursor: "pointer" }}></i>
  );
};

export default Like;
