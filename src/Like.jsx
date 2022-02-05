import React, { Component } from "react";
const Like = ({ onLike}) => {
  let classes = "fa fa-heart";
  classes += onLike ? "-o" : "";
  return <i onClick={()=>{onLike()}} className={classes} style={{ cursor: "pointer" }}></i>;
};

export default Like;
