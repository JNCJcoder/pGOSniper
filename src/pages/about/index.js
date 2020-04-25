import React from 'react';
import { View, Text, Linking, useColorScheme } from 'react-native';

import styles from './styles';

const About = () => {
  const defaultTheme = useColorScheme();

  return (
    <View style={[styles.container, styles[defaultTheme]]}>
      <View>
        <Text
          style={[styles.tituloText, styles.boldText, styles[defaultTheme]]}>
          pGO Sniper
        </Text>
        <Text style={[styles.infoText, styles[defaultTheme]]}>
          Versão 0.0.8
        </Text>
      </View>
      <View style={[styles.infoContainer, styles[defaultTheme]]}>
        <Text style={[styles.infoText, styles[defaultTheme]]}>
          Coordenadas conseguidas nos tópicos do subreddit:
        </Text>
        <Text
          style={[styles.subredditText, styles.boldText]}
          onPress={() =>
            Linking.openURL('https://www.reddit.com/r/PokemonGoSniping')
          }>
          /r/PokemonGoSniping
        </Text>
        <Text />
        <Text style={[styles.fs16Text, styles[defaultTheme]]}>
          Usando JSON da própria API do Reddit.
        </Text>
      </View>

      <View>
        <Text style={[styles.createdText, styles[defaultTheme]]}>
          Criado com React Native.
        </Text>
        <Text style={[styles.fs16Text, styles.boldText, styles[defaultTheme]]}>
          Aplicativo criado para fins de Aprendizado.
        </Text>
      </View>
    </View>
  );
};

export default About;
