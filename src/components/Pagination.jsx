import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, currentPage, onPageChange } = this.props;
    const pageCount = itemsCount / pageSize;
    const pages = _.range(1, pageCount + 1);
    if (pages.length === 1) return null;
    return (
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
