import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const PantallaFinal = () =>{

    const navigation = useNavigation();

    return (
        <View style={styles.fondo}>
            
            <Text style={styles.pregunta}>
                Pronto podrás seguir aquí la ruta jurídica para el caso.
            </Text>
            
            <Text style={styles.logo}>
                MuHo
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    
    fondo:{
      flex:1,
      backgroundColor: '#4E045C'
  
    },
  
    pregunta: {
      marginTop: 200,
      fontSize: 30,
      fontWeight: '900',
      color: '#FFF',
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
        color: '#FFF',
        alignItems: 'center',
        alignContent:'center',
        textAlign:'center',
        fontStyle: 'bold',
        marginBottom: 0,
    },
  
    Boton: {
        marginTop:10,
        paddingBottom:8,
        backgroundColor: '#FDAF01',
        marginLeft: 120,
        marginRight: 120,
        borderRadius: 5,
      
    },
    
    BotonTexto: {
        fontWeight: '900',
        textAlign:'center',
        color: '#FFF',
        fontSize: 15,
        marginTop: 8,
    },

    logo:{
        marginTop:80,
        padding:6,
        textAlign:'center',
        color:'#FFF',
        alignContent:'center',
        fontSize:45,
        fontWeight:'500'
    }

  })

export default PantallaFinal;