import {View, Text} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <View>
      {postInfo.map((post, index) => {
        return <PostItem key={index} data={post} />;
      })}
    </View>
  );
};

export default Posts;

const postInfo = [
  {
    postTitle: 'John Doe',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 743,
    isLiked: true,
  },
  {
    postTitle: 'Tony Smith',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 111,
    isLiked: true,
  },
  {
    postTitle: 'Tom Smith',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 32,
    isLiked: true,
  },
  {
    postTitle: 'Doe',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 73,
    isLiked: true,
  },
];
