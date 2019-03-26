import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";

import { getData } from "../store/selectors";
import headerFooterStyles from "./header-footer-styles";

const Container = styled.footer`
  ${headerFooterStyles};
  border-top: 1px solid darkgray;
`;

const Footer = ({ company, updated }) => (
  <Container>
    {company && <div>Fake copyright {company.name} 2019</div>}
    {updated && <div className="right">Last updated: {updated.date}</div>}
  </Container>
);

const mapStateToProps = state => ({
  company: getData("company", state),
  updated: getData("updated", state)
});

export default connect(mapStateToProps)(Footer);
