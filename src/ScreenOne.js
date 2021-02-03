import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

    }
    render() {
        return (
            <View style={{ margin: 15 }}>
                <TextInput
                    placeholder="Enter user name"
                    style={{ borderBottomWidth: 1, borderBottomColor: 'red', marginBottom: 20 }}
                    onChangeText={(text) => this.setState({ username: text })}   // used to store the value of textcomponent into the state variable i.e username
                />
                <Button
                    title="LogIn"
                    onPress={() => this.props.navigation.navigate('ScreenTwo', { p1: this.state.username })}
                />
            </View>
        )
    }
}

export default ScreenOne;