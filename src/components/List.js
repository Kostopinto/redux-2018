import React, { PureComponent } from "react";
import { arrayOf, shape, string } from "prop-types";

import ListItem from "./ListItem";

export default class List extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        id: string,
        title: string,
        url: string,
        tags: string
      })
    )
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { total, items, remove, edit } = this.props;

    const list = items.map(item => (
      <ListItem key={item.id} remove={remove} edit={edit} {...item} />
    ));

    return (
      <div>
        <div>
          {items.length}/{total}
        </div>
        <ul className="itemArea">{list}</ul>
      </div>
    );
  }
}
