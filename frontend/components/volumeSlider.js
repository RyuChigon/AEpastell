import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import VolumeSlider from 'react-native-volume-slider';

class PlayerVolume extends React.Component {
 
  volumeChange(value) {
    // body
  }

  render() {
    return(
        <View>
            <VolumeSlider style = {styles.slider} thumbSize={{
                width: 8,
                height: 8
                }}
                thumbTintColor="rgb(146,146,157)"
                minimumTrackTintColor="rgb(146,146,157)"
                maximumTrackTintColor="rgba(255,255,255, 0.1)"
                showsRouteButton={true}
                onValueChange={this.volumeChange.bind(this)} />
        </View>
    );
  }
};

const styles = StyleSheet.create({
    slider:{
        height: 30,
        marginLeft: 7,
    }
})

