import React from "react";
//import { Icon } from 'react-native-elements'
//import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, Button, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Pantalla2 = () =>{

    const navigation = useNavigation();

    return (
        <View style={styles.fondo}>
            <Text style={styles.titulo}>
                Elige tu sexo
            </Text>
            <Pressable 
                style={styles.BotonSexo}
                onPress={() => {
                    navigation.navigate('Pantalla3m');
                    
                  }}>
                <Text style={styles.BotonIconoSexo}>Mujer</Text>
            </Pressable>
            

            <Pressable 
                style={styles.BotonSexo}
                onPress={() => {
                    navigation.navigate('Pantalla3h');
                    
                  }}>
                <Text style={styles.BotonIconoSexo}>Hombre</Text>
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
  
    titulo: {
      marginTop: 100,
      fontSize: 35,
      fontWeight: '900',
      color: '#FFF',
      alignItems: 'center',
      alignContent:'center',
      textAlign:'center',
      fontStyle: 'bold',
      marginBottom: 70,
    },
  
    BotonSexo: {
        marginTop:30,
        paddingBottom:15,
        backgroundColor: '#FDAF01',
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 5,
      
    },
    
    BotonIconoSexo: {
        fontWeight: '900',
        textAlign:'center',
        color: '#FFF',
        fontSize: 15,
        marginTop: 15,
    },

    logo:{
        marginTop:100,
        padding:6,
        textAlign:'center',
        color:'#FFF',
        alignContent:'center',
        fontSize:45,
        fontWeight:'500'
    }

  })

export default Pantalla2;