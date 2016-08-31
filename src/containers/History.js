import React, { Component, PropTypes } from 'react';
import NavigationBar from '../components/NavigationBar';
import CakeChart from 'cake-chart';
import TableTransaction from '../components/TableTransaction';

const TREE = {
  value: 100,
  label: 'SUM = 100',
  children: [{
    value: 50,
    children: [{
      value: 10
    },
    {
      value: 20
    }]
  }, {
    value: 30
  }, {
    value: 20
  }]
};

function findParentNode(node, child, parent = null) {
  if (node === child) return parent;
  for (let c of child.children || []) {
    const p = findParentNode(node, c, child);
    if (p) return p;
  }
}

export default class History extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedNode: TREE
    }
  }

  handleClick = (node) => {
    if (node === this.state.selectedNode) {
      /* user clicked on the chart center - rendering parent node */
      this.setState({ selectedNode: findParentNode(node, TREE) || TREE });
    } else {
      this.setState({ selectedNode: node });
    }
  };

  render() {
    return (
      <div>
        <NavigationBar index={0} />
        <CakeChart data={this.state.selectedNode}
          style={{width: '50%'}}
          coreRadius={200}
          ringWidth={100}
          ringWidthFactor={1}
          onClick={this.handleClick}/>
        <TableTransaction />
      </div>
    );
  }
}
