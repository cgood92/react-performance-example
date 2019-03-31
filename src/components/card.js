import React, { Component } from "react";
import { connect } from "react-redux";

import { select } from "../store/selected";
import CardContainer from "./card-container";
import Caption from "./caption";
import Image from "./image";
import { isSelected, getItem } from "../store/selectors";

const getImage = name => `https://api.adorable.io/avatars/200/${name}.png`;

class Card extends Component {
  shouldComponentUpdate(nextProps) {
    console.group();
    Object.keys(nextProps).forEach(key => {
      if (nextProps[key] !== this.props[key]) {
        console.log(`${key} has changed...`);
        console.log("old:", this.props[key]);
        console.log("new:", nextProps[key]);
        console.log(
          "do objects look the same:",
          JSON.stringify(this.props[key]) === JSON.stringify(nextProps[key])
        );
      }
    });
    console.groupEnd();
    return true;
  }
  render() {
    const { id, isSelected, item, select } = this.props;
    const { name } = item;
    console.count(`${name} is rendered`);
    return (
      <CardContainer onClick={() => select(id)} selected={isSelected}>
        <Image src={getImage(name)} />
        <Caption>{name}</Caption>
      </CardContainer>
    );
  }
}

const mapStateToProps = (state, { id }) => ({
  isSelected: isSelected(state, id),
  item: getItem(state, id)
});
export default connect(
  mapStateToProps,
  { select }
)(Card);
