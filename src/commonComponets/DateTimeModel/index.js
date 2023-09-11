import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

const DateTimePicker = props => {
  return (
    <View>
      {props.type === 'date' ? (
        <DatePicker
          modal
          mode={'date'}
          open={props.open}
          date={new Date()}
          onDateChange={date => {
            // props.setDateshow(date)
          }}
          onConfirm={date => {
            props.setData(date);
            props.setOpen(false);
          }}
          onCancel={() => {
            props.setOpen(false);
          }}
        />
      ) : (
        <DatePicker
          modal
          mode={'time'}
          open={props.open}
          date={new Date()}
          onDateChange={date => {
            // props.setDateshow(date)
          }}
          onConfirm={date => {
            props.setData(date);
            props.setOpen(false);
          }}
          onCancel={() => {
            props.setOpen(false);
          }}
        />
      )}
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({});
