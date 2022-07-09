import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const[seuPeso, setSeuPeso] = useState(0);
  const[suaAltura, setSuaAltura] = useState(0);
  const[seuImc, setSeuImc] = useState(0);
  const[suaCategoria, setSuaCategoria] = useState('');
 
  function calcular(){
    let imc = (seuPeso / ((suaAltura / 100) * (suaAltura/ 100))).toFixed(2);
    setSeuImc(imc);

    if (imc < 16) {
      setSuaCategoria("Magreza Grave");
    } else if (imc < 17) {
      setSuaCategoria("Magreza Moderada");
    } else if (imc < 18.5) {
      setSuaCategoria("Magreza Leve");
    } else if (imc < 25) {
      setSuaCategoria("Saudável");
    } else if (imc < 30) {
      setSuaCategoria("Sobrepeso");
    } else if (imc < 35) {
      setSuaCategoria("Obesidade Grau I");
    } else if (imc < 40) {
      setSuaCategoria("Obesidade Grau II");
    } else {
      setSuaCategoria("Obesidade Grau III");
    }
  };
  
  return (   
    <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.cabecalho}>Calculadora IMC!</Text>
        </View>

        <View style={styles.entradas}>
          <TextInput placeholder='Peso em Kg' placeholderTextColor="#A9A9A9" keyboardType='numeric' style={styles.input} onChangeText={setSeuPeso}/>
          <TextInput placeholder='Altura em cm' placeholderTextColor="#A9A9A9" keyboardType='numeric' style={styles.input} onChangeText={setSuaAltura}/>
        </View>

        <TouchableOpacity onPress={calcular} style={styles.buttonTextView}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>

        <Text style={styles.resultado}> IMC: {seuImc} </Text>
        <Text style={[styles.resultado, {fontSize: 35}]}> {suaCategoria} </Text>

      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 20,
    height: 120,
    backgroundColor: '#A9A9A9'
  },
  cabecalho: {
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },
  input: {
    height: 80,
    textAlign: "center",
    flex: 1,
    fontSize: 25,
    borderColor: 'rgba(28, 28, 28, 0.2)',
    borderWidth: 1,
    margin: 5,
    borderRadius: 20
  },
  entradas: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10 
  },
  buttonText: {
    alignSelf: 'center',
    padding: 20,
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    borderRadius: 15
  },
  buttonTextView: {
    borderRadius: 20,
    backgroundColor: '#363636',
    width: 150,
    alignSelf: 'center',
  },
  resultado: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 50,
    padding: 10
  }
});
