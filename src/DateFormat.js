import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Moment from 'moment';


class DateFormat extends Component {
render() {
    return (
        <View>
                <Text> Test Git </Text>
                <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100 }} />
                <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 250, height: 300 }} />
            </View>
        )
    }
}

export default DateFormat;
