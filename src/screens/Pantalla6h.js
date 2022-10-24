import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Pantalla6h = () =>{

    const navigation = useNavigation();

    return (
        <View style={styles.fondo}>
            <Text style={styles.titulo}>Sesión de preguntas</Text>
            <Text style={styles.pregunta}>
                ¿Usted tiene hijos?
            </Text>
            
            
            <Pressable 
                style={styles.Boton}
                onPress={() => {
                    navigation.navigate('Pantalla7h');
                    
                  }}>
                <Text style={styles.BotonTexto}>Sí</Text>
            </Pressable>
            
            <Pressable 
                style={styles.Boton}
                onPress={() => {
                    navigation.navigate('Pantalla7h');
                    
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
      backgroundColor: '#4E045C'
  
    },
  
    pregunta: {
      marginTop: 50,
      fontSize: 30,
      fontWeight: '900',
      color: '#FFF',
      alignItems: 'center',
      alignContent:'center',
      textAlign:'center',
      fontStyle: 'bold',
      marginBottom: 90,
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
        paddingBottom:15,
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
        marginTop: 15,
    },

    logo:{
        marginTop:70,
        padding:6,
        textAlign:'center',
        color:'#FFF',
        alignContent:'center',
        fontSize:45,
        fontWeight:'500'
    }

  })

export default Pantalla6h;