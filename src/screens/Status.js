import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;
  const progresss = useRef(new Animated.Value(0)).current;
  const statusBatHeight = getStatusBarHeight();
  const progresssAnimation = progresss.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(
    () =>
      Animated.timing(progresss, {
        toValue: 5,
        duration: 5000,
        useNativeDriver: false,
      }).start(),
    [progresss],
  );

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
          marginTop: Platform.OS === 'ios' ? statusBatHeight : 0,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progresssAnimation,
          }}
        />
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
          marginTop: Platform.OS === 'ios' ? statusBatHeight : 0,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              width: '92%',
              height: '92%',
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{color: 'white', opacity: 0.6, fontSize: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{
          position: 'absolute',
          width: '100%',
          height: 700,
          top: 90,
        }}
      />
    </SafeAreaView>
  );
};

export default Status;
