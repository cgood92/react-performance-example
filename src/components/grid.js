import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { getItems } from "../store/selectors";
import Card from "./card";

const GridContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

export const Grid = ({ items }) => (
  <GridContainer>
    {items.map(item => (
      <Card key={item.id} item={item} />
    ))}
  </GridContainer>
);

const mapStateToProps = state => ({
  items: getItems(state)
});

export default connect(mapStateToProps)(Grid);
