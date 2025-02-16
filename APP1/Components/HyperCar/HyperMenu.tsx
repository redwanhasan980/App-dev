import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextComponent,
  View,
} from 'react-native';
import React from 'react';
import styles from '../style/styles';
export default function HyperMenu() {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView>
        {/* bugatti */}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/bugattiTourbillon.png')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>BUGATTI TOURBILLON</Text>
              <Text style={pageStyle.smallText}>V16 2025</Text>
            </View>
          </View>
        </View>
        {/* ferrari */}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/ferrariF90.webp')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>FERRARI {'\n'}SPIDER</Text>
              <Text style={pageStyle.smallText}>V8 2025</Text>
            </View>
          </View>
        </View>
        {/* alfa romeo */}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/alphaRomeoStradale.jpg')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>ALFA ROMEO STRADALE</Text>
              <Text style={pageStyle.smallText}>Twin-Turbo V6 2025</Text>
            </View>
          </View>
        </View>
        {/* aston martin*/}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/astonMartin.jpg')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>
                {'Aston Martin Valkyrie'.toUpperCase()}
              </Text>
              <Text style={pageStyle.smallText}>V12 2025</Text>
            </View>
          </View>
        </View>
        {/* koenigsegg*/}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/Koenigsegg.jpg')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>
                {'Koenigsegg Jesko Attack'.toUpperCase()}
              </Text>
              <Text style={pageStyle.smallText}>Twin-Turbocharged V8 2025</Text>
            </View>
          </View>
        </View>
        {/* Mclaren*/}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/mclarenw1.jpg')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>
                {'McLaren \nW1'.toUpperCase()}
              </Text>
              <Text style={pageStyle.smallText}>Twin-Turbocharged V8 2024</Text>
            </View>
          </View>
        </View>
        {/* Pagani*/}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/Pagani.jpg')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>
                {'PAGANI UTOPIA ROADSTER'.toUpperCase()}
              </Text>
              <Text style={pageStyle.smallText}>V12 2025</Text>
            </View>
          </View>
        </View>
        {/* Pagani*/}
        <View style={pageStyle.cardContainer}>
          <View style={pageStyle.card}>
            <View style={pageStyle.imgContainer}>
              <Image
                style={pageStyle.img}
                source={require('../asset/mercedes.jpg')}
              />
            </View>
            <View style={pageStyle.TextContainer}>
              <Text style={pageStyle.headingText}>
                {'Mercedes AMG One'.toUpperCase()}
              </Text>
              <Text style={pageStyle.smallText}> Turbocharged V6 2025</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const pageStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#e5e7e9',
    height: 100,
    width: 360,
    marginTop: 10,
    borderRadius: 6,
    marginBottom: 10,
    elevation: 7,
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: '#e5e7e9',
    flexDirection: 'row',
    borderRadius: 6,
  },
  imgContainer: {
    height: 100,
    width: 100,
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    borderRadius: 6,
  },
  TextContainer: {
    height: 100,
    width: 260,
  },
  headingText: {
    fontSize: 25,
    fontFamily: 'sac',
    marginTop: 7,
    marginLeft: 7,
  },
  smallText: {
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 10,
    marginBottom: 10,
  },
});
