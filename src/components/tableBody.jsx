import React, { Component } from "react";
import _ from "lodash";
//data = obj
//column = array
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else {
      return _.get(item, column.path);
    }
  };
  renderKey = (column) => {
    return column.path || column.key;
  };
 
  render() {
    const { columns, data } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.renderKey(column)}>
                {this.renderCell(item, column)} 
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
