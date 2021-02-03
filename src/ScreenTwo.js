import React, { Component } from 'react'
import { Text, View } from 'react-native'

// using props 

const ScreenTwo = (props) => {
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20 }}> User name is : {props.name} </Text>
        </View>
    )
}

// class ScreenTwo extends Component {
//     render() {
//         return (
//             <View style={{ margin: 10 }}>
//                 <Text style={{ fontSize: 20 }}> User name is : {this.props.route.params.p1} </Text>
//             </View>
//         )
//     }
// }

export default ScreenTwo;
