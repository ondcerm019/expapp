import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Choices } from './components/Choices'

export const NONE = 0;
export const ROCK = 1;
export const PAPER = 2;
export const SCISSORS = 3;

export default function App() {
  const [player, setPlayer] = useState(NONE);
  const [computer, setComputer] = useState(NONE);
  useEffect(() => {
    if (player !== NONE) {
      let lol = Math.floor(Math.random() * 3 + 1);
      console.log(lol);
      setComputer(lol);
    }
  },[player]);
  return (
    <View style={styles.container}>
      <Text>Počítač</Text>
      <Choices choice={computer} setChoice={setComputer} />
      <Text>Hráč</Text>
      <Choices choice={player} setChoice={setPlayer} />
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
