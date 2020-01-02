import React from 'react';
import { View, Text, Linking } from 'react-native';

import styles from './styles';

const About = () => (
  <View style={styles.container}>
    <View>
      <Text style={[styles.tituloText, styles.boldText]}>pGO Sniper</Text>
      <Text style={styles.infoText}>Versão 0.0.5</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>
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
      <Text style={styles.fs16Text}>Usando JSON da própria API do Reddit.</Text>
    </View>

    <View>
      <Text style={styles.createdText}>Criado com React Native.</Text>
      <Text style={[styles.fs16Text, styles.boldText]}>
        Aplicativo criado para fins de Aprendizado.
      </Text>
    </View>
  </View>
);

About.navigationOptions = { headerTitle: 'Sobre' };

export default About;
