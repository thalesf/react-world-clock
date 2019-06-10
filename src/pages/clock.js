/* eslint-disable camelcase */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { getTimeZone } from "../models/timezone";
import ClockWrapper from "./style";
import Container from "../components/shared";

import Table from "../components/Table";

class Clock extends Component {
  state = {};

  static getDerivedStateFromProps = (prevProps, prevState) => {
    if (prevProps.url !== prevState.url) {
      return {
        url: prevProps.url
      };
    }
    return null;
  };

  componentDidMount() {
    this.loadTimeZone();
  }

  componentDidUpdate(prevProps) {
    const { url } = this.state;
    if (url !== prevProps.url) {
      this.loadTimeZone();
    }
    return null;
  }

  loadTimeZone = async () => {
    const { url } = this.props;

    const zone = await getTimeZone(url);
    this.setState({
      zone
    });
  };

  render() {
    const { zone } = this.state;
    return (
      <ClockWrapper>
        {zone ? (
          <Container>
            <Table zone={zone} />
          </Container>
        ) : null}
      </ClockWrapper>
    );
  }
}

Clock.propTypes = {
  url: PropTypes.string.isRequired
};

export default Clock;
