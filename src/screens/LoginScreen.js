import React from 'react';

import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Form,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

  const ingresoHandler = () =>{
    console.log('diste click...')
  }
  
  return (
    <View style={styles.fondo}>
      <Text style = {styles.titulo}>
        Bienvenid@{' '}
      </Text>
      <Text style = {styles.titulo2}>
          a MuHo
        </Text>
      {/* <Form> */}
        <Text style={styles.email}>
          Email
          
        </Text>
        <TextInput 
          style={styles.inputs}>
          Ingresa tu direccion email
        </TextInput>
        <Text 
          style={styles.contraseña}>
          Contraseña
        </Text>
        <TextInput 
          style={styles.inputs}>
            Ingresa tu contraseña
        </TextInput>
        {/* <Button
          title='Ingresar'
          style={styles.botonTextoIngresar}
          onPress={() => {
              navigation.navigate('Pantalla2');
            }}
        /> */}
        <Pressable 
          onPress={() => {
              navigation.navigate('Pantalla2');
              
            }}
          style={styles.botonIngresar}
        >
          <Text 
            style={styles.botonTextoIngresar}>
            Ingresar
          </Text>
        </Pressable>
      {/* </Form> */}
      <Pressable 
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}        
      >
        <Text style={styles.olvidasteContraseña}>
          ¿Olvidaste la contraseña?
        </Text>
      </Pressable>
      <Pressable 
        onPress={ingresoHandler}        
      >
        <Text style={styles.olvidasteContraseña}>
          Registrarse
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    
  fondo:{
    flex:1,
    backgroundColor: '#FFF'

  },

  titulo: {
    marginTop: 80,
    fontSize: 45,
    fontWeight: '900',
    color: '#FDAF01',
    alignItems: 'center',
    alignContent:'center',
    textAlign:'center',
    fontStyle: 'bold',
    marginLeft:-70,
    
  },

  titulo2: {
    marginTop:-7,
    marginLeft:100,
    fontSize: 50,
    fontWeight: '600',
    color: '#4E045C',
    alignItems: 'center',
    alignContent:'center',
    textAlign:'center',
    
  },

  email: {
    marginTop: 25,
    fontWeight:'500',
    marginLeft: 80,
    color: '#4E045C',
    fontSize:15,
  },

  contraseña: {
    marginTop: 25,
    fontWeight:'500',
    marginLeft: 80,
    color: '#4E045C',
    fontSize:15,
  },

  inputs:{
    borderBottomWidth:1,
    padding: 6,
    margin: 10,
    width: 250,
    marginLeft:80,
    borderBottomColor: '#808080',
  },

  botonIngresar:{
    marginTop:20,
    paddingBottom:15,
    backgroundColor: '#4E045C',
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 5,
  
  },

  botonTextoIngresar:{
    fontWeight: '900',
    textAlign:'center',
    color: '#FFF',
    fontSize: 15,
    marginTop: 15,

  },

  olvidasteContraseña:{
    marginTop:15,
    padding:6,
    textAlign:'center',
    color:'#4E045C',
    alignContent:'center',
    fontSize:15,
    fontWeight:'500'
  }


  
})

export default LoginScreen;