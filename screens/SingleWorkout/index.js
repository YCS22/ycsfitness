import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

import Image from '../../components/image/index';
const Index = ({ route, navigation }) => {
  console.log(route.params.item);
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 300,
          height: 270,
          backgroundColor: '#FF4D00',
          margin: 10,
          borderRadius: 20,
          justifyContent: 'center',
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: '#FFFFFF',

            alignSelf: 'center',
            marginTop: 5,
            width: 200,
          }}
        >
          {route.params.item.name.toUpperCase()}
        </Text>

        <Image image={`${route.params.item.image}`} />
      </View>

      <View style={{ height: 180, marginTop: 20 }}>
        <ScrollView horizontal={false}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              margin: 20,
            }}
          >
            {route.params.item.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
