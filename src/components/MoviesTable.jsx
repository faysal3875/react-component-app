import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import Table from "./table";
class MoviesTable extends Component {
  render() {
    const columns = [
      {
        path: "title",
        label: "Title",
        content: (obj) => <Link to={`/movies/${obj._id}`}>{obj.title}</Link>,
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rental" },
      {
        key: "Like",
        content: (obj) => (
          <Like onLike={() => this.props.onLike(obj)} liked={obj.Liked} />
        ),
      },
      {
        key: "Delete",
        content: (obj) => (
          <button
            onClick={() => this.props.onDelete(obj)}
            className="btn-danger m-2 btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    const { objects, onSort, sortedColumn } = this.props;

    return (
      <Table
        columns={columns}
        data={objects}
        onSort={onSort}
        sortedColumn={sortedColumn}
      />
    );
  }
}

export default MoviesTable;
