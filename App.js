import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

let emoji = [
  require('./imagens_fantasia/freira.png'), require('./imagens_fantasia/Bruxa.png'), require('./imagens_fantasia/demonios.png'),
  require('./imagens_fantasia/corvo.png'), require('./imagens_fantasia/gatopreto.png'), require('./imagens_fantasia/coringa.png'),
  require('./imagens_fantasia/belzebu.png'), require('./imagens_fantasia/gatodanoite.png'), require('./imagens_fantasia/gemeas.png'),
  require('./imagens_fantasia/anjodaluz.png'), require('./imagens_fantasia/olho.png'), require('./imagens_fantasia/criança.png'),
  require('./imagens_fantasia/listrado.png'),  require('./imagens_fantasia/freiradois.png'),  require('./imagens_fantasia/enfermeira.png'),
  require('./imagens_fantasia/olhepramim.png'),  require('./imagens_fantasia/aleatório.png'), require('./imagens_fantasia/sl.png')
]


export default function App() {
  function emojiSort() {
    setEmojiAleatorio(emoji[Math.floor(Math.random() * emoji.length)]);
  }
  const [emojiAleatorio, setEmojiAleatorio] = useState('')

  return (
    <View style={styles.container}>

      <Text style={styles.textoCima}>HISTÓRIAS DE TERROR </Text>
      <Text style={styles.textoBaixo}>Eu sou cada pesadelo que você já teve </Text>
     


      {emojiAleatorio && (
        <Image
          source={emojiAleatorio}
          style={styles.image}
        />
      )}


      <TouchableOpacity style={styles.botao} onPress={emojiSort}>
        <Text style={styles.textoBotao}>Seguir</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  image: {
    width: 180,
    height: 250,
    borderRadius: 20,
    margin: 50,
  },
  botao: {
    width: 180,
    height: 50,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    cursor: 'Pointer',

  },

  textoBotao: {

    fontSize: 25,
    color: 'white',

  },
  textoCima: {

    fontSize: 20,
    padding: 5,
    color: 'black',

  },
  textoBaixo:{
    fontSize: 15,
    color: 'black',
   

  }

});
