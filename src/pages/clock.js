/* eslint-disable camelcase */
import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FiClock } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import {
  TiWorldOutline,
  TiSortNumerically,
  TiSortAlphabetically
} from "react-icons/ti";

import { getTimeZone, timeIncrement } from "../models/timezone";
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
          <table>
            <thead>
              <tr>
                <th colSpan="3">TimeZone Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <TiSortAlphabetically size={30} />
                </td>
                <td>Abbreviation:</td>
                <td>{abbreviation}</td>
              </tr>

              <tr>
                <td>
                  <FiClock size={30} />
                </td>
                <td> DateTime: </td>
                <td>{moment(datetime).format("MMMM Do YYYY, h:mm:ss a")}</td>
              </tr>

              <tr>
                <td>
                  <FaCalendarAlt size={30} />
                </td>
                <td>Day of Week:</td>
                <td>{dayOfWeek}</td>
              </tr>

              <tr>
                <td>
                  <GoCalendar size={30} />
                </td>
                <td>Day of Year:</td>
                <td>{dayOfYear}</td>
              </tr>

              <tr>
                <td>DST</td>
                <td>DST:</td>
                <td>{dst}</td>
              </tr>

              <tr>
                <td>From</td>
                <td> DST From:</td>
                <td>{dstFrom}</td>
              </tr>

              <tr>
                <td>Until</td>
                <td>DST Until:</td>
                <td>{dstUntil}</td>
              </tr>

              <tr>
                <td>
                  <TiWorldOutline size={32} />
                </td>
                <td>Timezone:</td>
                <td>{timezone}</td>
              </tr>

              <tr>
                <td>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2e/UNIX%C2%AE.png"
                    width="30"
                    alt="Unix Logo"
                  />
                </td>
                <td>UnixTime:</td>
                <td>{unixtime}</td>
              </tr>

              <tr>
                <td>Ofs</td>
                <td>UTC Offset:</td>
                <td>{utcOffset}</td>
              </tr>

              <tr>
                <td>
                  <TiSortNumerically size={30} />
                </td>
                <td>Week Number:</td>
                <td>{weekNumber}</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </ClockWrapper>
    );
  }
}

Clock.propTypes = {
  url: PropTypes.string.isRequired
};

export default Clock;
