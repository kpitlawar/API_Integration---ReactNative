import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Appbar,
    TextInput,
    Button,
    Card,
    List
} from 'react-native-paper'

class LocalStorageDemo extends Component {
    arr = []
    id = 0

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            item: [
                {
                    id: 1, data: 'loading'
                }
            ]
        }
    }




    _storeData = async () => {

        this.arr.push({ id: this.id, data: this.state.text })
        this.id++;
        try {
            await AsyncStorage.setItem('mykey', JSON.stringify(this.arr));
            this.setState({
                item: JSON.parse(await AsyncStorage.getItem('mykey'))
            })
            console.log(this.state);
            // this.setState({
            //     item: value
            // })

        } catch (error) {
            // Error saving data
            console.log('error', error)
        }
    };

    _deleteData = async () => {
        AsyncStorage.removeItem('mykey', async () => {
            console.log('deleted')
            this.setState({
                item: await AsyncStorage.getItem('mykey')
            })
        })


    };



    async componentDidMount() {
        this.setState({
            item: JSON.parse(await AsyncStorage.getItem('mykey'))
        })
        this.arr = JSON.parse(await AsyncStorage.getItem('mykey'))
        this.id = this.arr[this.arr.length - 1].id + 1

    }

    render() {

        if (this.state.item.length > 0) {
            renderList = this.state.item.map(item => {
                return (
                    <Card key={item.id} style={{ marginBottom: 10 }}>
                        <List.Item
                            title={item.data}
                            right={() => <List.Icon icon="delete" onPress={this._deleteData} />}
                        />
                    </Card>
                )
            })
        } else {
            renderList = <Text>No items</Text>
        }

        const _goBack = () => console.log('Went back');


        return (
            <View style={styles.container}>

                <Appbar.Header>
                    <Appbar.BackAction onPress={_goBack} />
                    <Appbar.Content title="Todo List" />
                </Appbar.Header>

                <TextInput
                    style={{ margin: 10 }}
                    label="Add todo item"
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}

                />
                <Button style={{ margin: 10 }} mode="contained" onPress={this._storeData}>
                    Add Todo
                </Button>
                <View style={{ margin: 10 }}>
                    {renderList}
                </View>
            </View>
        )
    }
}
export default LocalStorageDemo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7f6'
    }
})

