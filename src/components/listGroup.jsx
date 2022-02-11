import React, { Component } from "react";
class List extends Component {
  render() {
    const { items, textProperty, valueProperty, onItemChange, selectedGenre } =
      this.props;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemChange(item)}
            style={{ cursor: "pointer" }}
            key={item[valueProperty]}
            className={
              item === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default List;
