import React from "react";
import { FiClock } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import {
  TiWorldOutline,
  TiSortNumerically,
  TiSortAlphabetically
} from "react-icons/ti";

const Table = data => {
  const {
    zone: {
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
    }
  } = data;

  return (
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
          <td>{datetime}</td>
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
  );
};

export default Table;
