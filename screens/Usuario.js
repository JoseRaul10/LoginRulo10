import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator,Text, View, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
/*import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";*/

class Usuario extends Component {
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
  /*render(){
    const navegar = this.props.navigation;
    return (

    <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>
                {this.props.route.params.verUsuario}
              </Text>

            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
              <Text style= {misEstilos.textCenter}>
                Usuario: {this.props.route.params.nombre}
              </Text>
              <Text style= {misEstilos.textCenter}>
                Contraseña: {this.props.route.params.contraseña}
              </Text> 
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 20,
  }
});*/

export default Usuario;