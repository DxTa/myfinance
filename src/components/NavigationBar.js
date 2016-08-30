import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';

const historyIcon = <FontIcon className="material-icons">history</FontIcon>;
const comparisonIcon = <FontIcon className="material-icons">dashboard</FontIcon>;
const mapIcon = <FontIcon className="material-icons">place</FontIcon>;

const tabIndex = ['history', 'map', 'comparison'];

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.index || 0,
    };
  }

  select = (index) => browserHistory.push(`/${tabIndex[index]}`);

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="History"
            icon={historyIcon}
            onClick={() => this.select(0)}
          />

          <BottomNavigationItem
            label="Map"
            icon={mapIcon}
            onClick={() => this.select(1)}
          />

          <BottomNavigationItem
            label="Comparison"
            icon={comparisonIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default NavigationBar;
