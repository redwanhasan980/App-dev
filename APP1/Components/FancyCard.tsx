import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Naruto</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('./asset/naruto.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Naruto Shippuden</Text>
          <Text style={styles.cardLevel}>Geatest Shinobi</Text>
          <Text style={styles.cardDescription}>
            Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of
            Konohagakure's Uzumaki clan. He became the jinchūriki of the
            Nine-Tails on the day of his birth — a fate that caused him to be
            shunned by most of Konoha throughout his childhood. After joining
            Team Kakashi, Naruto worked hard to gain the village's
            acknowledgement all the while chasing his dream to become Hokage.
          </Text>
          <Text style={styles.cardFotter}>7th Hokage</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElevated: {
    backgroundColor: '#f2f0ef',
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: 6,
  },
  cardImage: {
    height: 500,
    marginBottom: 20,
    borderRadius: 12,
  },
  cardBody: {flex: 1, alignItems: 'center'},
  cardTitle: {
    flex: 1,

    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLevel: {
    fontSize: 18,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 6,
  },
  cardFotter: {},
  container: {
    alignItems: 'center',
  },
});
