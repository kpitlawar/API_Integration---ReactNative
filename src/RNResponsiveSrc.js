import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class RNResponsiveSrc extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.myText}>Login</Text>
                </View>
            </View>
        )
    }
}


export default RNResponsiveSrc;


const styles = StyleSheet.create({
    container: { flex: 1 },
    textWrapper: {
        backgroundColor:'red',
      height: hp('70%'), // 70% of height device screen
      width: wp('80%')   // 80% of width device screen
    },
    myText: {
      fontSize: hp('5%') // End result looks like the provided UI mockup
    }
  });
