import React, { Component } from "react";
import { getMovies } from "./Services/fakeMovieService";
import { getGenres } from "./Services/fakeGenreService";
import Like from "./components/Like";
import Pagination from "./components/Pagination";
import { Paginate } from "./utils/paginate";
import List from "./components/listGroup";
class Objects extends Component {
  state = {
    objects: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
  };
  componentDidMount() {
    this.setState({ objects: getMovies(), genres: getGenres() });
  }
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

  handleListChange = (genre) => {
    this.setState({ selectedGenre: genre });
  };
  render() {
    const { length: count } = this.state.objects;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      objects: allObjects,
    } = this.state;

    const filtered = selectedGenre
      ? allObjects.filter((obj) => obj.genre._id === selectedGenre._id)
      : allObjects;
    if (count === 0) return <p>There are no objects in database!</p>;
    const objects = Paginate(filtered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <List
            items={this.state.genres}
            onItemChange={this.handleListChange}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} objects in database.</p>
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
                    <Like
                      onLike={() => this.handleLike(obj)}
                      liked={obj.Liked}
                    />
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
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePage}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Objects;
