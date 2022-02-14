import React, { Component } from "react";
import { getMovies } from "./Services/fakeMovieService";
import { getGenres } from "./Services/fakeGenreService";
import Pagination from "./components/Pagination";
import { Paginate } from "./utils/paginate";
import List from "./components/listGroup";
import MoviesTable from "./components/MoviesTable";
import _ from "lodash";
class Objects extends Component {
  state = {
    objects: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    sortedColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ objects: getMovies(), genres });
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
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleListChange = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortedColumn) => {
    this.setState({ sortedColumn });
  };
  render() {
    const { length: count } = this.state.objects;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortedColumn,
      objects: allObjects,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allObjects.filter((obj) => obj.genre._id === selectedGenre._id)
        : allObjects;
    const sorted = _.orderBy(
      filtered,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    if (count === 0) return <p>There are no objects in database!</p>;
    const objects = Paginate(sorted, currentPage, pageSize);
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
          <MoviesTable
            objects={objects}
            onLike={this.handleLike}
            sortedColumn={sortedColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Objects;
