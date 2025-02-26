import React, {useRef} from 'react';
import {
  View,
  Image,
  Animated,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window'); // Get screen width

const Test = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Interpolate translateX based on scrollY
  const translateX = scrollY.interpolate({
    inputRange: [0, 300], // Adjust the range as needed
    outputRange: [-width / 2, width / 2], // Moves left to right
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.scrollContent}>
        <Animated.Image
          source={require('./asset/bugatti.jpg')} // Replace with your image path
          style={[styles.image, {transform: [{translateX}]}]}
        />
      </View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        {/* Dummy content for scrolling */}
        <View style={styles.dummyContent} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 50, // Adjust for scrolling effect
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  dummyContent: {
    height: 1000, // Extra height to enable scrolling
    backgroundColor: '#f2f2f2',
    width: '100%',
  },
});

export default Test;
