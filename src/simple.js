import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import axios from 'axios';

class Simple extends Component {

    state={
        data:[],
    };

    componentDidMount(){

        // this.fetchData();

        this.getDataUsingAxios();
    }

    getDataUsingAxios = async () =>{
    let response = await axios.get('https://randomuser.me/api?results=100');
    this.setState({data: response.data.results});
    }


    fetchData = async () =>{
        const response = await fetch('https://randomuser.me/api?results=100');
        const json = await response.json();
        this.setState({data:json.results});
    }

    render(){
    
        return (
            <View>
                <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({item}) => 
                    <Text>{item.name.first}</Text>
                }
                />
            </View>
        )
    }
   
}

export default Simple;
