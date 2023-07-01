import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityRecommend from '../components/ActivityRecommend';
import {FriendsProfileData} from '../components/Database';

const Activity = () => {
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomColor: '#DEDEDE',
          borderBottomWidth: 0.5,
          padding: 10,
        }}>
        활동
      </Text>
      <ScrollView style={{margin: 10}}>
        <ActivityThisWeek />
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>이전 활동</Text>
        {FriendsProfileData.slice(0, 3).map((data, index) => (
          <ActivityPrevious data={data} key={index} />
        ))}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          회원님을 위한 추천
        </Text>
        {FriendsProfileData.slice(4, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
