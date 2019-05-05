/* eslint-disable camelcase */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTimeZone } from "../models/timezone";

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
      <div>
        <h2>TimeZone Details</h2>
        <div>
          <h2>Abbreviation: {abbreviation}</h2>
          <h2>DateTime: {datetime}</h2>
          <h2>Day of Week: {dayOfWeek}</h2>
          <h2>Day of Year: {dayOfYear}</h2>
          <h2>DST: {dst}</h2>
          <h2>DST From: {dstFrom}</h2>
          <h2>DST Until: {dstUntil}</h2>
          <h2>Timezone: {timezone}</h2>
          <h2>UnixTime {unixtime}</h2>
          <h2>UTC Offset {utcOffset}</h2>
          <h2>Week Number {weekNumber}</h2>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  url: PropTypes.string.isRequired
};

export default Clock;
