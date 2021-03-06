import React, { Component } from "react";
import { Link } from "react-router-dom";
import Downshift from "downshift";

import Input from "../Input";

import { getAllTimezones } from "../../models/timezone";
import filterElement from "../../lib/filter";
import ListWrapper from "./style";

class SearchBar extends Component {
  state = {
    city: "",
    timezones: []
  };

  componentDidMount() {
    this.getTimeZones();
  }

  getTimeZones = async () => {
    const timezone = await getAllTimezones();
    this.setState({
      timezones: timezone
    });
  };

  handleInputChange = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { city, timezones } = this.state;

    return (
      <Downshift itemToString={item => (item ? item.value : "")}>
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          inputValue
        }) => (
          <div>
            <Input
              placeholder="Timezone..."
              onChange={this.handleInputChange}
              {...getInputProps()}
            />
            <ListWrapper {...getMenuProps(city)}>
              {isOpen
                ? filterElement(timezones, inputValue).map(item => {
                    return (
                      <li
                        {...getItemProps({
                          key: item,
                          item
                        })}
                      >
                        <Link to={`/timezone/${item}`}>{item}</Link>
                      </li>
                    );
                  })
                : null}
            </ListWrapper>
          </div>
        )}
      </Downshift>
    );
  }
}

export default SearchBar;
