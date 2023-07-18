import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const HomeScreen = () => {
  const [salaryRange, setSalaryRange] = useState([0, 200]);
  const [salaryText, setSalaryText] = useState('');

  const formatSalary = (value) => {
    const crore = Math.floor(value / 10000000);
    const lakh = Math.floor((value - crore * 10000000) / 100000);
    const thousand = Math.floor((value - crore * 10000000 - lakh * 100000) / 1000);

    let formattedSalary = '';
    if (crore > 0) {
      formattedSalary += crore + ' Cr ';
    }
    if (lakh > 0) {
      formattedSalary += lakh + ' Lakh ';
    }
    if (thousand > 0) {
      formattedSalary += thousand + ' Thousand ';
    }

    return formattedSalary.trim();
  };

  const handleSalaryChange = (values) => {
    setSalaryRange(values);
    const formattedMinSalary = formatSalary(values[0] * 100000);
    const formattedMaxSalary = formatSalary(values[1] * 100000);
    const formattedSalary = `${formattedMinSalary} - ${formattedMaxSalary}`;
    setSalaryText(formattedSalary);
  };

  return (
    <View>
      <Text style={{ color : '#000000' }}>Salary Range: {salaryText}</Text>
      <MultiSlider
      style={styles.slider}
        values={salaryRange}
        min={0}
        max={200}
        step={1}
        sliderLength={300}
        onValuesChange={handleSalaryChange}
        allowOverlap
        snapped
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider : {
    color : '#000000',
    marginLeft : '5%',
  }
})

export default HomeScreen;
