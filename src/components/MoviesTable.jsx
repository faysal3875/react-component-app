import React, { Component } from "react";
import Like from "./Like";
const MoviesTable = ({ objects, onLike, onDelete, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={()=>onSort('title')}>Title</th>
          <th onClick={()=>onSort('genre.name')} >Genre</th>
          <th onClick={()=>onSort('numberInStock')}>Stock</th>
          <th onClick={()=>onSort('dailyRentalRate')}>Rental</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {objects.map((obj) => (
          <tr key={obj._id}>
            <td>{obj.title}</td>
            <td>{obj.genre.name}</td>
            <td>{obj.dailyRentalRate}</td>
            <td>{obj.numberInStock}</td>
            <td>
              <Like onLike={() => onLike(obj)} liked={obj.Liked} />
            </td>
            <td>
              <button
                onClick={() => onDelete(obj)}
                className="btn-danger m-2 btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
