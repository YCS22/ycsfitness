import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import { PROGRAM } from '../../graphql/query';
const Index = ({ navigation }) => {
  const { loading, data } = useQuery(PROGRAM);

  const renderItem = ({ item }) => (
    <View
      style={{
        width: '90%',
        height: 80,
        backgroundColor: '#FF4D00',
        margin: 10,
        borderRadius: 20,
        alignSelf: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SingleProgram', { item: item });
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: '#FC997C',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 20,
              marginLeft: 5,
              textAlign: 'left',
              color: '#FFFFFF',
              fontWeight: 'bold',
              alignSelf: 'center',

              width: 150,
            }}
          >
            {item.description}
          </Text>

          {item.level == 1 && (
            <Image
              source={require('../../assets/icons/star.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
              }}
            />
          )}

          {item.level == 2 && (
            <>
              <Image
                source={require('../../assets/icons/star.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
              <Image
                source={require('../../assets/icons/star.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </>
          )}

          {item.level == 3 && (
            <>
              <Image
                source={require('../../assets/icons/star.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
              <Image
                source={require('../../assets/icons/star.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
              <Image
                source={require('../../assets/icons/star.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 25,
              marginLeft: 5,
              textAlign: 'left',
              color: '#FFFFFF',
              fontWeight: 'bold',
              alignSelf: 'center',

              width: 200,
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  if (loading)
    return <View style={{ flex: 1, backgroundColor: '#000000' }}></View>;
  return (
    <View
      style={{ flexDirection: 'column', backgroundColor: '#000000', flex: 1 }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.program}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Index;
