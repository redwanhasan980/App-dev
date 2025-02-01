import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>GREEN</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>BLUE1</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>BLUE2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>BLUE3</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>BLUE4</Text>
        </View>
      </ScrollView>
    </View>
  );
}

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
