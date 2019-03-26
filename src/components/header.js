import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";

import { getData } from "../store/selectors";
import headerFooterStyles from "./header-footer-styles";
import Notifications from "./notifications";

const Container = styled.header`
  ${headerFooterStyles};
  border-bottom: 1px solid darkgray;
`;

const Header = ({ company, user, notifications }) => (
  <Container>
    {company && user && (
      <div>
        {company.name} welcomes {user.name}
      </div>
    )}
    {notifications && (
      <Notifications className="right">{notifications.count}</Notifications>
    )}
  </Container>
);

const mapStateToProps = state => ({
  company: getData("company", state),
  user: getData("user", state),
  notifications: getData("notifications", state)
});

export default connect(mapStateToProps)(Header);
