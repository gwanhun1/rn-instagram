import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const PostItem = ({data}) => {
  const [like, setLike] = useState(data.isLiked);
  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={data.postPersonImage}
              style={{width: 40, height: 40, borderRadius: 100}}
            />
            <View style={{paddingLeft: 5}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {data.postTitle}
              </Text>
            </View>
          </View>
          <Feather name="more-vertical" style={{fontsize: 20}} />
        </View>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={data.postImage} style={{width: '100%', height: 400}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setLike(prev => !prev)}>
              <AntDesign
                name={like ? 'heart' : 'hearto'}
                style={{
                  fontSize: 20,
                  paddingRight: 10,
                  color: like ? 'red' : 'gray',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionic
                name="ios-chatbubble-outline"
                style={{fontSize: 20, paddingRight: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="navigation" style={{fontSize: 20}} />
            </TouchableOpacity>
          </View>

          <Feather name="bookmark" style={{fontSize: 20, paddingRight: 10}} />
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{fontSize: 14, fontWeight: '700', paddingVertical: 2}}>
            좋아요 {like ? data.likes + 1 : data.likes} 개
          </Text>
          <Text>게시글 설명글입니다.</Text>
          <Text
            style={{
              opacity: 0.4,
              paddingVertical: 2,
              marginTop: 5,
              marginBottom: 5,
            }}>
            댓글 모두 보기
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={data.postPersonImage}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 100,
                  backgroundColor: 'orange',
                  marginRight: 10,
                }}
              />
              <TextInput placeholder="댓글 달기..." style={{opacity: 0.5}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#0095F6'}}>게시</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
