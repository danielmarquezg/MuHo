import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Pantalla5m = () =>{

    const navigation = useNavigation();

    return (
        <View style={styles.fondo}>
            <Text style={styles.titulo}>Sesión de preguntas</Text>
            <Text style={styles.texto}>La fijacion de cuota alimentaria es el proceso
            mediante el cual por medio de un documento formal se consigna el monto
            de la cuota que le corresponde al menor de edad a cargo del padre.</Text>
            <Text style={styles.pregunta}>
                ¿Cuenta con el documento de fijacion de cuota alimentaria?
            </Text>
            <Pressable 
                style={styles.Boton}
                onPress={() => {
                    navigation.navigate('Pantalla6m');
                    
                  }}>
                <Text style={styles.BotonTexto}>Sí</Text>
            </Pressable>
            
            <Pressable 
                style={styles.Boton}
                onPress={() => {
                    navigation.navigate('Pantalla6m');
                    
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
      marginTop: 20,
      fontSize: 25,
      fontWeight: '900',
      color: '#FDAF01',
      alignItems: 'center',
      alignContent:'center',
      textAlign:'center',
      fontStyle: 'bold',
      marginBottom: 40,
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
        marginTop:50,
        padding:6,
        textAlign:'center',
        color:'#4E045C',
        alignContent:'center',
        fontSize:45,
        fontWeight:'500'
    }

  })

export default Pantalla5m;