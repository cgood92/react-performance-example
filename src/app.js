import React, { Component } from "react";
import { connect } from "react-redux";

import * as api from "./api";
import { storeData } from "./store/other";
import { storeItems } from "./store/items";
import Grid from "./components/grid";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

class App extends Component {
  componentDidMount() {
    const { storeData } = this.props;
    api.fetchCompany.then(data => storeData("company", data));
    api.fetchUser.then(data => storeData("user", data));
    api.fetchNotifications.then(data => storeData("notifications", data));
    api.fetchUpdated.then(data => storeData("updated", data));
    this.fetchItems(0);
  }
  async fetchItems(page) {
    const { storeItems } = this.props;

    const { more, items } = await api.fetchItems(page);
    storeItems(items);

    if (more) {
      this.fetchItems(page + 1);
    }
  }
  render() {
    return (
      <section>
        <Header />
        <Main>
          <Grid />
        </Main>
        <Footer />
      </section>
    );
  }
}

const mapDispatchToProps = {
  storeData,
  storeItems
};

export default connect(
  null,
  mapDispatchToProps
)(App);
