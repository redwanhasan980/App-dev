import {StyleSheet, Text, View, Linking, Image} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';


export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={(styles.card, styles.CardElevated)}>
        <Text> what</Text>
      </View>
      <Image
      />
      </View>
    
  );
}
const styles2 =StyleSheet.create({
  cardImage:{
    
  }
}

)

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
  CardElevated: {},
});
