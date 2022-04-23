import React, { useState} from 'react';
import {Text, CheckBox , View, TextInput, Image, Dimensions, ImageBackground, Button, StyleSheet } from 'react-native';
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

const CaixaDeTexto = (props) => {
  return(
    <View>
      <Text style={{
        fontWeight: "bold",
        textShadowColor: "#F24F00",
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 5,
        color: "#fff",
        margin: "auto",
        marginTop: 5
        }}>{props.titulo}</Text>
      <TextInput style={{
        width: 300,
        height: 33,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#f24f00",
        margin: "auto"

      }}/>
    </View>
  );
}

const CheckBox1 = (props) => {
  return(
    <View style={{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    }}>
      <View style={{
    flexDirection: "row",
    marginBottom: 20,
      }}>
        <CheckBox style={{
    alignSelf: "center",
          borderWidth: 0.5,
          borderColor: "#f24f00",
          width: 17,
          height: 17
        }}
            /><Text style={{
            fontWeight: "bold",
            left: 10,
            color: "#F24F00",
            textShadowOffset: {width: 0.1, height: 0.1},
            textShadowRadius: 5,
            marginTop: 5,
        margin: 8,
            }}>{props.titulo}</Text>
        </View>
    </View>
  );
}

const EmpresasView = (props) => {
  return (
    <View style={{
      flex:1,
      justifyContent: "center",
      width: 256,
      marginTop: 8,
      padding: 10,
      margin: "auto",
      borderColor: "#f24f00",
      borderWidth: 2,
      backgroundColor: "#fff"
      }}>
      <Text style={{
        fontWeight: "bold",
        fontSize: 18}}>
          {props.nome}</Text>
      <Text style={{
        color: "gray",
        fontSize: 16
      }}>
        {props.endereco}<br/><b>Nº</b>{props.num} - <b>Bairro:</b> {props.bairro}<br/><b>Cep:</b> {props.cep}<br/>{props.cidade} </Text>
    </View>
  );
}

// PARTE LUCAS ===========================================================================================================
      // Menu principal ==================================================================================================


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
       // Fim do menu principal ==========================================================================================
      // Caixa ===========================================================================================================

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
       // Fim do caixa ==================================================================================================
       // Empresas clientes =============================================================================================
function EmpresasClientes() {
  return (
    <View
    style={{
    flex: 1,
    backgroundColor: '#000',
    }}>
      <View style={{
        flex: 0.55
      }}>
        <button
        style={{
        width: 84,
        height: 46,
        backgroundColor: '#000',
        color: '#fff',
        borderWidth: 3,
        borderColor: '#fff'
      }}>
        MENU
      </button>
      <ImageBackground style={{
        height: 40,
        alignItems: "flex-end",
        width: 40,
        left: 280,
        marginTop: -40,
        }} source={logo}>
            
      </ImageBackground>

      <Text style={{
        width: 300,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "#F24F00",
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10,
        color: "#fff",
        fontSize: 20,
        margin: "auto"
        }}>EMPRESAS CLIENTES</Text>
      </View>


      <View style={{
        flex: 2
      }}>
        <CaixaDeTexto titulo="NOME DA EMPRESA" />
          <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            }}>
            <View style={{
              flex: 2,
              flexDirection: "row",
              marginBottom: 40,
              width: 300
              }}>
              <Text style={{
                fontWeight: "bold",
                textShadowColor: "#F24F00",
                textShadowOffset: {width: 0.1, height: 0.1},
                textShadowRadius: 5,
                color: "#fff",
                margin: "auto",
                marginTop: 5,
                }}>ENDEREÇO</Text>
              <TextInput style={{
                width: 219,
                height: 33,
                position: "absolute",
                marginTop: 25,
                backgroundColor: "#fff",
                borderWidth: 3,
                borderColor: "#f24f00",
                margin: "auto"
              }}/>
              <Text style={{
                fontWeight: "bold",
                textShadowColor: "#F24F00",
                textShadowOffset: {width: 0.1, height: 0.1},
                textShadowRadius: 5,
                color: "#fff",
                margin: "auto",
                marginTop: 5
                }}>Nº</Text>
              <TextInput style={{
                width: 84,
                height: 33,
                position: "absolute",
                marginTop: 25,
                left: 216,
                backgroundColor: "#fff",
                borderWidth: 3,
                borderColor: "#f24f00",
                margin: "auto"
                }}/>
            </View>
          </View>
          
          <CaixaDeTexto titulo="CIDADE" />
          <CaixaDeTexto titulo="BAIRRO" />
          <CaixaDeTexto titulo="CEP" />

          <CheckBox1 titulo="O RESPONSÁVEL RETIRARÁ"/>
        </View>


        <View style={{
          flex: 1
        }}>
          <Text style={{
            backgroundColor: "transparent",
            fontWeight: "bold",
            textShadowColor: "#F24F00",
            textShadowOffset: {width: 0.1, height: 0.1},
            textShadowRadius: 10,
            color: "#fff",
            fontSize: 20,
            margin: "auto"
            }}>Pagamento</Text>

            <CheckBox1 titulo="SEMANAL"/>
            <CheckBox1 titulo="QUINZENAL"/>
            <CheckBox1 titulo="MENSAL"/>
        </View>


        <View style={{
        }}>
          <ConstButton nameButton="SALVAR"/>
        </View>   
      </View>
);
}
       // Fim de Empresas clientes ======================================================================================

 function ListaEmpresasClientes() {
   return(
    <View style={{
      backgroundColor: "#000",
      flex: 1
    }} >
     <View style={{
        flex: 0.2
      }}>
        <button
        style={{
        width: 84,
        height: 46,
        backgroundColor: '#000',
        color: '#fff',
        borderWidth: 3,
        borderColor: '#fff'
      }}>
        MENU
      </button>
      <ImageBackground style={{
        height: 40,
        alignItems: "flex-end",
        width: 40,
        left: 260,
        marginTop: -40,
        }} source={logo}>
            
      </ImageBackground>

      <Text style={{
        width: 300,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "#F24F00",
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10,
        color: "#fff",
        fontSize: 20,
        margin: "auto"
        }}>LISTA DE EMPRESAS CLIENTES</Text>
      </View>


      <View style={{
        backgroundColor: "#c4c4c4",
        flex: 1.5,
        borderWidth: 3,
        borderColor: "#000",
        width: 280,
        height: 654,
        margin: "auto"}}>

      <EmpresasView nome="Posto 57" endereco="Régis Bittencourt - km 60" num="1234" cidade="São lourenço da Serra - SP" bairro="Paiol do meio" cep="01234-567"/>
      <EmpresasView nome="BemFixa" endereco="Regis Bittencourt - km 75" num="4321" cidade="Juquitiba - SP" bairro="Jd. das Palmeiras" cep="01234-567"/>
      <EmpresasView nome="Posto 70" endereco="Regis Bittencourt - km 80" num="1243" cidade="Juquitiba - SP" bairro="Senhorinhas" cep="01234-567"/>
      <EmpresasView nome="Lord's Burguer" endereco="Av. 31 e Março" num="761" cidade="Juquitiba - SP" bairro="centro" cep="01234-567"/>
      <EmpresasView nome="Mercadinho" endereco="Av 31 de Março" num="1000" cidade="Juquitiba - SP" bairro="Justino" cep="01234-567"/>  
        
        
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


const CadastroProduto = (props) =>{
  const [idProduto, setIdProduto] = useState("");
  const [nome, setNome] = useState("");
  const [valor, setValor]= useState("");
  const [valorKG, setValorKG] = useState("")

  return(
    <SafeAreaView style={estilo.container}>
      <View style={estilo.viewPrincipal}>

        <View style={estilo.views}>  
          <Text style={estilo.texto}> Código do Produto </Text>
          <TextInput
            style={estilo.input}
            value={idProduto}
            onChangeText={(txt)=>setIdProduto(txt)}
          />
        </View>

        <View style={estilo.views}>  
          <Text style={estilo.texto}>Nome </Text>
          <TextInput
            style={estilo.input}
            value={nome}
            onChangeText={(txt)=>setNome(txt)}
          />
        </View>

        <View style={estilo.views}>  
          <Text style={estilo.texto}> Valor </Text>
          <TextInput
            style={estilo.input}
            value={valor}
            onChangeText={(txt)=>setValor(txt)}
          />
        </View >

        <View style={estilo.views}>  
          <Text style={estilo.texto}> Valor por Kg </Text>
          <TextInput
            style={estilo.input}
            value={valorKG}
            onChangeText={(txt)=>setValorKG(txt)}
          />
        </View >

        <Button style={estilo.button}
          title="Salvar"
           onPress={()=>{
            props.adicionar({idProduto:idProduto,nome:nome,valor:valor});
            setIdProduto("")
            setNome("")
            setValor("")
            
          }}
        />

        

      </View>
    </SafeAreaView>
  );
}

const Lista = (props) =>{
  const listaTela = [];
  for (let i =0; i < props.lista.length; i++){
    const obj = props.lista[i];
    listaTela.push(
      <View style={estilo.produtos}>
        <Text>{obj.idProduto}</Text>
        <Text>{obj.nome}</Text>
        <Text>{obj.valor}</Text>
      </View>
    );
  }
  return(
    <View style={{flex:1, backgroundColor:"black"}}>
      <View  style={{backgroundColor:"#D3D3D3", margin:10}}>
        {listaTela}
      </View>
    </View>
  )
}

function Principalprodutos (){
  const [lista, setLista] = useState([]);
  const adicionar =(obj)=>{
    const tempLista = [...lista];
    tempLista.push(obj);
    setLista(tempLista);
  };
  return( 
    
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="CadastroProduto">
        <Drawer.Screen name="Cadastro de Produto">
          {(props) => <CadastroProduto {...props} adicionar={(obj)=>{adicionar(obj)}}/> }
        </Drawer.Screen>

        <Drawer.Screen name="Lista de Produtos">
          {(props) => <Lista {...props} lista={lista}/> }
        </Drawer.Screen>
      </Drawer.Navigator>
       
    </NavigationContainer>
  
   
  );
}

const estilo = StyleSheet.create({
  viewPrincipal:{
    alignItems:"center",
    
  },
  input:{
    
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
    }, 
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"black",
    },
  views:{
    marginBottom:50
  },
  texto:{
      margin: 5,
      fontSize: 17,
      fontWeight: "bold",
      
      textShadowColor: "#F90F00",
      textShadowOffset: {width: 0.1, height: 0.1},
      textShadowRadius: 20,
      color: "#fff",
      backgroundColor: "transparent"
  },
  button:{
    width: 200,
    height: 45,
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 3,
    shadowColor: "#F24F00",
    shadowOffset:{width:0.1, height:0.1},
    shadowRadius:5
    },
  produtos:{
    borderColor:"#F24F00",
    borderWidth:2,
    margin:10,
    backgroundColor:"white"
  }
})



// FINAL PARTE THIAGO ====================================================================================================

 /**/

// PARTE MATHEUS ==========================================================================================================================

// FINAL PARTE MATHEUS ==========================================================================================================================
     
          //FIM DA VIEW PRINCIPAL, NÃO APAGUEM!
export default EmpresasClientes;
