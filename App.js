import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Exemplo1 from './src/exemplos/ex_01';
import Exemplo2 from './src/exemplos/ex_02'
import Atividade1 from './src/atividades/atv_01';


export default function App() {
  return (
    <View style={styles.container}>
     <Exemplo2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3dcf2',
    padding: 18, 
    paddingTop: Constants.statusBarHeight || 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
