import React, { Component } from "react";
const ObjectForm = ({ match, history }) => {
  return (
    <div>
      <h1>Objects {match.params.id}</h1>
      <button className="btn btn-primary" onClick={() => history.push("/movies")}>
        Save
      </button>
    </div>
  );
};

export default ObjectForm;
