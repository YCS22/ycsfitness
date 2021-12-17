import React from 'react';
import { Image } from 'react-native-elements';

import { View, ActivityIndicator } from 'react-native';
const Index = ({ image }) => {
  return (
    <View>
      <Image
        source={{
          uri: `${image}`,
        }}
        style={{ width: 300, height: 250, borderRadius: 20 }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default Index;
