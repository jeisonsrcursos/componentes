import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Incrementar from './src/components/BotaoInc';
import Decrementar from './src/components/BotaoDec';

export default function App() {

  const [contar, setContar] = useState(0);

  return (
      <View style={styles.container}>
        <Text>Valor atualizado: {contar}</Text>
        <Incrementar func={setContar} valor={contar} nome="incrementar"/>
        {contar > 0 ? <Decrementar func={setContar} valor={contar} nome="Decrementar"/> : null }
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
});
