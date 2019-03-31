import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { getItemIds } from "../store/selectors";
import Card from "./card";

const GridContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

export const Grid = ({ ids }) => (
  <GridContainer>
    {ids.map(id => (
      <Card key={id} id={id} />
    ))}
  </GridContainer>
);

const mapStateToProps = state => ({
  ids: getItemIds(state)
});

export default connect(mapStateToProps)(Grid);
