import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Pantalla3h = () =>{

    const navigation = useNavigation();

    return (
        <View style={styles.fondo}>
            <Text style={styles.titulo}>Sesión de preguntas</Text>
            <Text style={styles.pregunta}>
                ¿Es usted maltratado físicamente?
            </Text>
            <Pressable 
                style={styles.Boton}
                onPress={() => {
                    navigation.navigate('Pantalla4h');
                    
                  }}>
                <Text style={styles.BotonTexto}>Sí</Text>
            </Pressable>
            
            <Pressable 
                style={styles.Boton}
                onPress={() => {
                    navigation.navigate('Pantalla4h');
                    
                  }}>
                <Text style={styles.BotonTexto}>No</Text>
            </Pressable>

            <Text style={styles.logo}>
                MuHo
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    
    fondo:{
      flex:1,
      backgroundColor: '#FFF'
  
    },
  
    pregunta: {
      marginTop: 60,
      fontSize: 30,
      fontWeight: '900',
      color: '#FDAF01',
      alignItems: 'center',
      alignContent:'center',
      textAlign:'center',
      fontStyle: 'bold',
      marginBottom: 70,
      marginLeft:30,
      marginRight:30,
    },

    titulo:{
        marginTop: 10,
        fontSize: 18,
        fontWeight: '900',
        color: '#4E045C',
        alignItems: 'center',
        alignContent:'center',
        textAlign:'center',
        fontStyle: 'bold',
        marginBottom: 0,
    },

    texto:{
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: '#FDAF01',
        alignItems: 'center',
        alignContent:'center',
        textAlign:'center',
        fontStyle: 'bold',
        marginBottom: 10,
        marginLeft:20,
        marginRight:20,
    },
  
    Boton: {
        marginTop:10,
        paddingBottom:15,
        backgroundColor: '#4E045C',
        marginLeft: 120,
        marginRight: 120,
        borderRadius: 5,
      
    },
    
    BotonTexto: {
        fontWeight: '900',
        textAlign:'center',
        color: '#FFF',
        fontSize: 15,
        marginTop: 15,
    },

    logo:{
        marginTop:80,
        padding:6,
        textAlign:'center',
        color:'#4E045C',
        alignContent:'center',
        fontSize:45,
        fontWeight:'500'
    }

  })

export default Pantalla3h;