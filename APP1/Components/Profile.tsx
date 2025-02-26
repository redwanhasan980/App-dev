import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const Profile = () => {
  return (
    <View style={[pageStyle.head, {}]}>
      <View style={pageStyle.profileContainer}>
        <Image
          source={require('./asset/shelbyblack.jpg')}
          style={{width: '100%', height: '100%'}}
        />
        <View style={pageStyle.profile}>
          <View
            style={{
              height: 70,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              marginBottom: 80,
            }}>
            <Text style={pageStyle.name}>Md Redwan hasan</Text>
          </View>
          <View
            style={[
              {
                marginRight: 200,
              },
              pageStyle.rating,
            ]}>
            <Text style={[pageStyle.heading]}>Follower</Text>
          </View>
          <View style={[{}, pageStyle.rating]}>
            <Text style={pageStyle.heading}>Rating</Text>
          </View>
          <View
            style={[
              {
                marginLeft: 200,
              },
              pageStyle.rating,
            ]}>
            <Text style={pageStyle.heading}>Question</Text>
          </View>
          <View
            style={[
              {
                marginRight: 200,
              },
              pageStyle.ratingNum,
            ]}>
            <Text style={pageStyle.headingNum}>12.5k</Text>
          </View>
          <View style={[{}, pageStyle.ratingNum]}>
            <Text style={pageStyle.headingNum}>4.6</Text>
          </View>
          <View style={[{marginLeft: 200}, pageStyle.ratingNum]}>
            <Text style={pageStyle.headingNum}>373</Text>
          </View>
        </View>

        <View style={pageStyle.ProfilePic}>
          <Image
            source={require('./asset/myprofile.jpg')}
            style={{width: '100%', height: '100%', opacity: 10}}
          />
        </View>
      </View>
      <View style={{height: 120}}></View>

      <View style={pageStyle.card}>
        <View style={pageStyle.menuImg}>
          <Image
            source={require('./asset/car.png')}
            style={{width: '90%', height: '90%'}}
          />
        </View>
        <View style={pageStyle.menuTxt}>
          <Text style={pageStyle.menuFont}>Favourite Cars</Text>
        </View>
        <View style={pageStyle.menuArrow}>
          <Image
            source={require('./asset/arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View style={pageStyle.card}>
        <View style={pageStyle.menuImg}>
          <Image
            source={require('./asset/Question.png')}
            style={{width: '90%', height: '90%'}}
          />
        </View>
        <View style={pageStyle.menuTxt}>
          <Text style={pageStyle.menuFont}>Questions</Text>
        </View>
        <View style={pageStyle.menuArrow}>
          <Image
            source={require('./asset/arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View style={pageStyle.card}>
        <View style={pageStyle.menuImg}>
          <Image
            source={require('./asset/post2.png')}
            style={{width: '90%', height: '90%'}}
          />
        </View>
        <View style={pageStyle.menuTxt}>
          <Text style={pageStyle.menuFont}>Posts</Text>
        </View>
        <View style={pageStyle.menuArrow}>
          <Image
            source={require('./asset/arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View style={pageStyle.card}>
        <View style={pageStyle.menuImg}>
          <Image
            source={require('./asset/setting.png')}
            style={{width: '90%', height: '90%'}}
          />
        </View>
        <View style={pageStyle.menuTxt}>
          <Text style={pageStyle.menuFont}>Settings</Text>
        </View>
        <View style={pageStyle.menuArrow}>
          <Image
            source={require('./asset/arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View style={pageStyle.card}>
        <View style={pageStyle.menuImg}>
          <Image
            source={require('./asset/loc.png')}
            style={{width: '90%', height: '90%'}}
          />
        </View>
        <View style={pageStyle.menuTxt}>
          <Text style={[pageStyle.menuFont, {fontSize: 18}]}>
            Kapasia, Gazipur, Dhaka
          </Text>
        </View>
        <View style={pageStyle.menuArrow}>
          <Image
            source={require('./asset/arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View style={pageStyle.card}>
        <View style={pageStyle.menuImg}>
          <Image
            source={require('./asset/logout.png')}
            style={{width: '90%', height: '90%'}}
          />
        </View>
        <View style={pageStyle.menuTxt}>
          <Text style={[pageStyle.menuFont, {fontSize: 18}]}>Log Out</Text>
        </View>
        <View style={pageStyle.menuArrow}>
          <Image
            source={require('./asset/arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const pageStyle = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#f4f6f7',
    height: height * 0.2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: 'rgba(244, 246, 247, 0.8)',
    borderRadius: 6,
    elevation: 1,
    position: 'absolute',
    width: width * 0.8,
    height: height * 0.2,
    marginTop: height * 0.13,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfilePic: {
    position: 'absolute',
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 60,
    backgroundColor: '#f4f6f7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 15,
  },
  name: {
    fontSize: 18,

    fontWeight: 700,
    color: '#515a5a',
    paddingTop: 50,
  },

  head: {flex: 1, backgroundColor: '#f0f3f4'},
  heading: {
    fontSize: 18,

    fontWeight: 300,
    color: '#515a5a',
  },
  headingNum: {
    fontSize: 22,
    fontWeight: 500,
    color: '#909497',
  },
  rating: {
    marginTop: 50,
    position: 'absolute',
  },
  ratingNum: {
    marginTop: 110,
    position: 'absolute',
  },
  card: {
    height: 60,
    backgroundColor: '#f4f6f7',
    width: width * 0.9,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5,
    elevation: 20,
  },
  menuImg: {
    height: 50,
    width: 50,
    backgroundColor: '#f4f6f7',
    margin: 5,
    marginLeft: 10,
  },
  menuArrow: {
    position: 'absolute',
    marginLeft: 300,
    height: 50,
    width: 50,
    backgroundColor: '#f4f6f7',
    margin: 5,
  },
  menuTxt: {position: 'absolute', marginLeft: 100, marginTop: 10},
  menuFont: {fontSize: 20, fontWeight: 300},
});
