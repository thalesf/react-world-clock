/* eslint-disable camelcase */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTimeZone } from "../models/timezone";
import ClockWrapper from "./style";
import Container from "../components/shared";

class Clock extends Component {
  state = {
    abbreviation: "",
    datetime: "",
    dayOfWeek: "",
    dayOfYear: 0,
    dst: false,
    dstFrom: null,
    dstUntil: null,
    timezone: "",
    unixtime: "",
    utcOffset: "",
    weekNumber: 0
  };

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

    const {
      abbreviation,
      datetime,
      day_of_week,
      day_of_year,
      dst,
      dst_from,
      dst_until,
      timezone,
      unixtime,
      utcOffset,
      weekNumber
    } = zone;

    this.setState({
      abbreviation,
      datetime,
      dayOfWeek: day_of_week,
      dayOfYear: day_of_year,
      dst,
      dstFrom: dst_from,
      dstUntil: dst_until,
      timezone,
      unixtime,
      utcOffset,
      weekNumber
    });
  };

  render() {
    const {
      abbreviation,
      datetime,
      dayOfWeek,
      dayOfYear,
      dst,
      dstFrom,
      dstUntil,
      timezone,
      unixtime,
      utcOffset,
      weekNumber
    } = this.state;
    return (
      <ClockWrapper>
        <Container>
          <h1 style={{ textAlign: "center" }}>TimeZone Details</h1>
          <p>
            Abbreviation: <strong>{abbreviation}</strong>
          </p>
          <p>
            DateTime: <strong>{datetime}</strong>
          </p>
          <p>
            Day of Week: <strong>{dayOfWeek}</strong>
          </p>
          <p>
            Day of Year: <strong>{dayOfYear}</strong>
          </p>
          <p>
            DST: <strong>{dst}</strong>
          </p>
          <p>
            DST From: <strong>{dstFrom}</strong>
          </p>
          <p>
            DST Until: <strong>{dstUntil}</strong>
          </p>
          <p>
            Timezone: <strong>{timezone}</strong>
          </p>
          <p>
            UnixTime <strong>{unixtime}</strong>
          </p>
          <p>
            UTC Offset <strong>{utcOffset}</strong>
          </p>
          <p>
            Week Number <strong>{weekNumber}</strong>
          </p>
        </Container>
      </ClockWrapper>
    );
  }
}

Clock.propTypes = {
  url: PropTypes.string.isRequired
};

export default Clock;
