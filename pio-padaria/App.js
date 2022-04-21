import React from 'react';
import {Text, View, TextInput, Image, Dimensions, ImageBackground, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import logo from './assets/logo.png';
import { rgbaColor } from 'react-native-reanimated/src/reanimated2/Colors';

const win = Dimensions.get('window');
//const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();


const ConstButton = (props) => {
  return (
    <View>
      <button style={{
        width: 236,
        height: 41, 
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textShadowColor: "#F24F00",
        textShadowOffset: {width: 10, height: 10},
        textShadowRadius: 5,
        margin: "auto",
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: "#cecece",
        borderWidth: 3,
        borderColor: "#F24F00"}}>
          <Text style={{
            fontWeight: "bold",
            textShadowColor: "#F24F00",
            textShadowOffset: {width: 0.1, height: 0.1},
            textShadowRadius: 5,
            color: "#fff"
          }}>
            {props.nameButton}
          </Text>
      </button>

        
    </View>
  );
}

// PARTE LUCAS ===========================================================================================================

function Principal() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#000"
    }} >

    <button style={{
      width: 84,
      height: 46,
      backgroundColor: "#000",
      color: "#fff",
      borderWidth: 3,
      borderColor: "#fff"
    }}>MENU</button>
    
      <View style={{
        flex: 1
      }}>
      
        <ImageBackground style={{
          height: 140,
          width: 140,
          borderWidth: 2,
          marginTop: -30,
          borderColor: "transparent",
          flex: 2,
          alignItems: "center",
          margin: "auto"
          }} source={logo}>
            
            
        </ImageBackground>

      </View>
      
     
        <ConstButton nameButton="CAIXA"  onPress={() => {Listar}}/>
        <ConstButton nameButton="RELATÓRIOS"/>
        <ConstButton nameButton="ENCOMENDAS"/>
        <ConstButton nameButton="USUÁRIOS"/>
        <ConstButton nameButton="PRODUTOS"/>
        <ConstButton nameButton="EMPRESAS CLIENTES"/>
        <ConstButton nameButton="FORNECEDORES"/>
        <ConstButton nameButton="MANUTENÇÃO"/>
        <ConstButton nameButton="INVESTIMENTOS"/>
        <ConstButton nameButton="DESPEZAS"/>
        <ConstButton nameButton="OBS/ PLANEJAMENTOS"/>
    </View>
  );
}

function Caixa() {
  return(
  <View style={{
      flex: 1,
      backgroundColor: "#000"
    }} >

    <button style={{
      width: 84,
      height: 46,
      backgroundColor: "#000",
      color: "#fff",
      borderWidth: 3,
      borderColor: "#fff"
    }}>MENU
      </button>
      
      <ImageBackground style={{
          height: 40,
          width: 40,
          left: 280,
          marginTop: -40,
          flexDirection: "row-reverse"
          }} source={logo}>
              
      </ImageBackground>
        <Text style={{
                backgroundColor: "transparent",
                fontWeight: "bold",
                textShadowColor: "#F24F00",
                textShadowOffset: {width: 0.1, height: 0.1},
                textShadowRadius: 10,
                color: "#fff",
                fontSize: 20,
                position: "absolute",
                padding: 0,
                left: 140,
                marginTop: 10,
                margin: "auto"
              }}>
                CAIXA
              </Text>
      <View style={{
        flex: 1
        }}>
      
          <View style={{
            width: 300,
            height: 400,
            borderWidth: 3,
            borderColor: "#F24F00",
            backgroundColor: "#fff",
            margin: "auto",
            marginTop: 30
            }}>
              <Text style={{
                fontSize: 8,
                padding: 20,
                fontWeight: "bold"
              }}>
                  PÃO FRANCÊS - 10,00/KG..........................0,500 KG - VALOR: R$ 5,00.
              </Text> 
          </View>

          <Text style={{
            margin: "auto",
            fontSize: 30,
            fontWeight: "bold",
            textShadowColor: "#F24F00",
            textShadowOffset: {width: 0.1, height: 0.1},
            textShadowRadius: 10,
            color: "#fff",
            backgroundColor: "transparent"
            }}>
            TOTAL: R$ 05,00
          </Text>
          <ConstButton nameButton="CÓDIGO DE BARRAS"/>
          <ConstButton nameButton="QRcode"/>
          <ConstButton nameButton="DIGITAR CÓDIGO"/>
          <ConstButton nameButton="CANCELAR PRODUTO"/>
          <ConstButton nameButton="FINALIZAR PEDIDO"/>
      </View>
      
    </View>
  );
}


// FINAL DA PARTE LUCAS ==================================================================================================



// PARTE CLARA ===========================================================================================================

// FINAL PARTE CLARA =====================================================================================================



// PARTE EDIELSON ========================================================================================================

// FINAL PARTE EDIELSON ==================================================================================================



// PARTE THIAGO ==========================================================================================================

// FINAL PARTE THIAGO ====================================================================================================



// PARTE MATHEUS ==========================================================================================================

// FINAL PARTE MATHEUS ====================================================================================================
export default Caixa;
