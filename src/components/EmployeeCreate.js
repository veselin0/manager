import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(value) =>
              this.props.employeeUpdate({
                prop: 'name',
                value,
              })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555´-5555"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.employeeUpdate({
                prop: 'phone',
                value,
              })
            }
          />
        </CardSection>

        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={(value) =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerStyle: {
    flex: 1,
    paddingTop: 100,
  },
  cardSectionStyle: {
    flexDirection: 'column',
  },
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
