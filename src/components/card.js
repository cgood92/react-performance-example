import React from "react";
import { connect } from "react-redux";

import { select } from "../store/selected";
import CardContainer from "./card-container";
import Caption from "./caption";
import Image from "./image";
import { isSelected, getItem } from "../store/selectors";

const getImage = name => `https://api.adorable.io/avatars/200/${name}.png`;

const Card = ({ id, isSelected, item, select }) => {
  const { name } = item;
  return (
    <CardContainer onClick={() => select(id)} selected={isSelected}>
      <Image src={getImage(name)} />
      <Caption>{name}</Caption>
    </CardContainer>
  );
};

const mapStateToProps = (state, { id }) => ({
  isSelected: isSelected(state, id),
  item: getItem(state, id)
});
export default connect(
  mapStateToProps,
  { select }
)(Card);
