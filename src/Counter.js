import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Counter() {
    const [count, setCount] = useState(0);

    // function addCount() {
    //     setCount(count + 1)
    // }

    addCount = () => {
        setCount(count + 1)
    }

    return (
        <View>
            <Text>You clicked {count} times.</Text>
            <Button
                onPress={addCount}
                title="Click me"
                color="red"
                accessibilityLabel="Click this button to increase count"
            />
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});