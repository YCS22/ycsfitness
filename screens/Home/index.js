import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { WORKOUT_CATEGORY, WORKOUT } from '../../graphql/query';
import Image from '../../components/image/index';

const Index = ({ navigation }) => {
  const { loading, data } = useQuery(WORKOUT_CATEGORY);

  const renderItem = ({ item }) => (
    <View
      style={{
        width: 300,
        height: 270,
        backgroundColor: '#FF4D00',
        margin: 10,
        borderRadius: 20,

        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Single', { item: item });
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: '#FFFFFF',

            alignSelf: 'center',

            width: 200,
          }}
        >
          {item.name.toUpperCase()}
        </Text>

        <Image image={`${item.image}`} />
      </TouchableOpacity>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={{ borderColor: '#E4FBFF' }}>
      <Text
        numberOfLines={1}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'left',

          padding: 5,
          color: '#FFFFFF',
        }}
      >
        {item.name.toUpperCase()}
      </Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={item.workoutCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  useEffect(() => {}, [loading]);

  if (loading)
    return (
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <ActivityIndicator color="#0000ff" />
      </View>
    );

  return (
    <View style={{ flexDirection: 'column', backgroundColor: '#000000' }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.workoutcategory}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Index;
