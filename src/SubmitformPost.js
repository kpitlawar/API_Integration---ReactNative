import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import axios from 'axios';


class SubmitformPost extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            salary: '',
            age: ''
        }
    }

    updateValue(text, field) {
        if (field == 'name') {
            this.setState({ name: text })
        } else if (field == 'salary') {
            this.setState({ salary: text })
        } else if (field == 'age') {
            this.setState({ age: text })
        }
    }

    submit() {
        let url = "http://dummy.restapiexample.com/api/v1/create";
        let data = this.state;
        axios.post(url, data,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then(response => {
                alert(response.data.message + "ID = " + response.data.data.id);
                // alert(response.data.message)

            }).catch(error => {
                alert(error)
            })


        //    fetch(url,{
        //        method:'POST',
        //        headers:{
        //            "Content-Type":"application/json",
        //            "Accept":"application/json"
        //        },
        //        body: JSON.stringify(data)
        //    }).then((results) => {
        //         results.json().then((resp) =>{
        //                 // console.warn("Response = "+ resp.message);
        //                 alert(resp.message);
        //         })
        //    })


    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Simple Post API example </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Name :'
                    onChangeText={(text) => this.updateValue(text, 'name')}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Salary :'
                    onChangeText={(text) => this.updateValue(text, 'salary')}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Age :'
                    onChangeText={(text) => this.updateValue(text, 'age')}
                />

                <TouchableOpacity onPress={() => this.submit()}>
                    <Text style={styles.txtSubmit}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default SubmitformPost;


const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'

    },

    input: {
        borderWidth: 0.5,
        borderColor: 'red',
        width: '100%',
        marginBottom: 10,
        marginTop: 5
    },
    txtSubmit: {
        padding: 10,
        color: 'white',
        backgroundColor: 'red'

    }
})