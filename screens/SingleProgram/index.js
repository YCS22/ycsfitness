import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Image from '../../components/image/index';
const Index = ({ navigation, route }) => {
  const renderItem = ({ item }) => (
    <View
      style={{
        width: 300,
        height: 320,
        backgroundColor: '#FF4D00',
        margin: 10,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
      }}
    >
      {console.log(item.program_workout.image)}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Single', { item: item.program_workout });
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-around',
            }}
          >
            <View>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  width: 200,
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Tekrar: {item.set}
              </Text>
            </View>

            <View>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  width: 200,
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Set: {item.re}
              </Text>
            </View>
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontSize: 20,

              textAlign: 'center',
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}
          >
            {item.program_workout.name.toUpperCase()}
          </Text>

          <Image image={`${item.program_workout.image}`} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ backgroundColor: '#000000', flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={route.params.item.program_prog_work}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Index;
