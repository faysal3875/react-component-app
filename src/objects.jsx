import React, { Component } from "react";
import { getMovies } from "./Services/fakeMovieService";
import Like from "./components/Like";
import Pagination from "./components/Pagination";
import { Paginate } from "./utils/paginate";
class Objects extends Component {
  state = {
    objects: getMovies(),
    pageSize: 5,
    currentPage: 1,
  };
  handleDelete = (obj) => {
    const objects = this.state.objects.filter(
      (object) => object._id !== obj._id
    );
    this.setState({ objects });
  };
  handleLike = (obj) => {
    const objects = [...this.state.objects];
    const index = objects.indexOf(obj);
    objects[index] = { ...objects[index] };
    objects[index].Liked = !objects[index].Liked;
    this.setState({ objects });
  };
  handlePage = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.objects;
    const { pageSize, currentPage, objects: allObjects } = this.state;
    if (count === 0) return <p>There are no objects in database!</p>;
    const objects = Paginate(allObjects, currentPage, pageSize)
    return (
      <React.Fragment>
        <p>Showing {count} objects in database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rental</th>
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
                  <Like onLike={() => this.handleLike(obj)} liked={obj.Liked} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(obj)}
                    className="btn-danger m-2 btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePage}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Objects;
