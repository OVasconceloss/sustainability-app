import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function DropdownChoice({ label, options }) {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{label}</Text>
      <RNPickerSelect
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }
        items={options.map(option => ({
          label: option.label,
          value: option.value
        }))}
      />
    </View>
  );
}
