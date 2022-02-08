import React, { Component } from "react";
import { getMovies } from "./Services/fakeMovieService";
import Like from "./Like";
class Objects extends Component {
  state = {
    objects: getMovies(),
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
  render() {
    if (this.state.objects.length === 0)
      return <p>There are no objects in database!</p>;
    return (
      <React.Fragment>
        <p>Showing {this.state.objects.length} objects in database.</p>
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
            {this.state.objects.map((obj) => (
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
      </React.Fragment>
    );
  }
}

export default Objects;
