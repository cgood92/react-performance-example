import React from "react";
import { connect } from "react-redux";

import { select } from "../store/selected";
import CardContainer from "./card-container";
import Caption from "./caption";
import Image from "./image";

const getImage = name => `https://api.adorable.io/avatars/200/${name}.png`;

const Card = ({ item, select }) => {
  const { id, name, isSelected } = item;
  console.count(`${name} is rendered`);
  return (
    <CardContainer onClick={() => select(id)} selected={isSelected}>
      <Image src={getImage(name)} />
      <Caption>{name}</Caption>
    </CardContainer>
  );
};

export default connect(
  null,
  { select }
)(Card);
