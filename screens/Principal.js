import React, {Component} from 'react';
import {View,Text, ActivityIndicator, FlatList, Modal} from 'react-native';

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            isloading : true
        }
    }
    async componentDisMount (){
        try{
            const response = 
            await fetch('http://reactnative.dev/movies.json');   
            const responseJson = await response.json();    
            this.setState({
                isloading: false,
                dataSource:responseJson.movies,
            },function(){
            });
        }catch(error){
            console.log(error);
        }
    }
    render(){
        if(this.state.isloading){
            return (
                <View style={{flex:1, paddin: 20}}> 
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View>
                <FlatList
                  data = {this.state.dataSource}
                  renderItem= {({item}) => 
                  <Text>
                      {item.title},{item.releaseYear}
                  </Text>
                  }
                  keyExtractor = {({id},index) => id}
                />
            </View>
        )
    }
}
export default Principal;