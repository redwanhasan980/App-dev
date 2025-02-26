import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import styles from './style/styles';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProp = NativeStackScreenProps<RootStackParamList, 'CategoryCard'>;

export default function CategoryCard({navigation}: HomeProp) {
  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          height: 50,

          elevation: 5,
          marginRight: 400,
        }}>
        <View
          style={{
            height: 50,
            width: 105,

            position: 'absolute',
          }}>
          <Image
            source={require('./asset/mainlogo.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <ScrollView>
        <View>
          <View style={styles.headingStyle}>
            <Text style={styles.headingFont}>
              Select Your Favourite Category
            </Text>
          </View>
          <View>
            <ScrollView>
              <TouchableOpacity
                style={pageStyle.card}
                onPress={() => navigation.navigate('HyperMenu')}>
                <View style={pageStyle.imgContainer}>
                  <Image
                    source={require('./asset/bugatti.jpg')}
                    style={pageStyle.img}
                  />

                  <LinearGradient
                    colors={[
                      'rgba(255,255,255,1)',
                      'rgba(255,255,255,0.0)',
                      'rgba(255,255,255,0.5)',
                      'rgba(255,255,255,1)',
                    ]}
                    style={pageStyle.gradient}
                  />
                  <Text style={pageStyle.cardHeading}>Hyper Car</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={pageStyle.card}
                onPress={() => navigation.navigate('Fancy')}>
                <View style={pageStyle.imgContainer}>
                  <Image
                    source={require('./asset/ferrariGto.jpg')}
                    style={[pageStyle.img, {marginBottom: 60}]}
                  />

                  <LinearGradient
                    colors={[
                      'rgba(255,255,255,1)',

                      'rgba(255,255,255,0.0)',
                      'rgba(255,255,255,0.5)',
                      'rgba(255,255,255,1)',
                    ]}
                    style={pageStyle.gradient}
                  />
                  <Text style={pageStyle.cardHeading}>Iconic Cars</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={pageStyle.card}
                onPress={() => navigation.navigate('Fancy')}>
                <View style={pageStyle.imgContainer}>
                  <Image
                    source={require('./asset/vintage.png')}
                    style={[pageStyle.img, {marginBottom: 60}]}
                  />

                  <LinearGradient
                    colors={[
                      'rgba(255,255,255,1)',

                      'rgba(255,255,255,0.0)',
                      'rgba(255,255,255,0.5)',
                      'rgba(255,255,255,1)',
                    ]}
                    style={pageStyle.gradient}
                  />
                  <Text style={pageStyle.cardHeading}>Vintage Car</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={pageStyle.card}
                onPress={() => navigation.navigate('Fancy')}>
                <View style={pageStyle.imgContainer}>
                  <Image
                    source={require('./asset/rolls2.png')}
                    style={[{width: '100%', height: '80%', marginTop: 20}]}
                  />

                  <LinearGradient
                    colors={[
                      'rgba(255,255,255,1)',

                      'rgba(255,255,255,0.0)',
                      'rgba(255,255,255,0.5)',
                      'rgba(255,255,255,1)',
                    ]}
                    style={pageStyle.gradient}
                  />
                  <Text style={pageStyle.cardHeading}>Luxury Car</Text>
                </View>
              </TouchableOpacity>
              <View style={{height: 70}}></View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const pageStyle = StyleSheet.create({
  card: {
    width: 350,
    height: 300,
    borderRadius: 6,
    marginVertical: 20,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    elevation: 7,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },

  img: {
    flex: 1,
    height: 300,
    width: 350,
    borderRadius: 6,
    resizeMode: 'stretch',
  },
  imgContainer: {
    flex: 1,
    height: 300,
    width: 350,

    borderRadius: 6,
  },
  cardHeadingContainer: {},
  cardHeading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#4d5656',
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{translateX: -60}, {translateY: 80}], // Adjust position
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // Apply the gradient on all edges for the vignette effect
    backgroundColor: 'transparent',
  },
});
