import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity }from 'react-native';
import Logo from '../assets/icone.png'; 

import * as Animatable from 'react-native-animatable'

export default function Home({navigation}) {
    return (
        <View style={Styles.container}>
            <View style={Styles.containerLogo}>
                <Animatable.Image
                delay={300}
                animation="flipInY"
                source={Logo}
                style={{width: '100%'}}
                resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={Styles.containerForm}>
                <Text style={Styles.title}>Experimente os melhores lanches, faça seu pedido já!</Text>
                <Text style={Styles.Text}>Faça o login para começar!</Text>
            </Animatable.View>

            <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CD853F'
    },
    containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#000080',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    Text: {
        color: '#a1a1a1'
        
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FF8C00',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})