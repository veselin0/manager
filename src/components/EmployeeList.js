import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListView from 'deprecated-react-native-listview';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  state = {};

  componentDidMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employees != this.props.employees) {
      this.createDataSource(this.props);
    }
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const dataSource = ds.cloneWithRows(employees);
    this.setState({ dataSource });
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    if (!this.state.dataSource) {
      return null;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
