import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BatteryFetcher} from '@asurion-private/heka-rn';

const batteryFetcher = BatteryFetcher();

const App = async () => {
  const [capacity, setCapacity] = useState<string>();

  useEffect(() => {
    getBatteryData();
  }, []);

  const getBatteryData = async () => {
    const {capacity} = await batteryFetcher.getProperties();

    setCapacity(JSON.stringify(capacity));
  };

  return (
    <View>
      <Text>Capacity {capacity}</Text>
    </View>
  );
};

export default App;
