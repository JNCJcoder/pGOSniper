import React from "react";
import { View, Text, Linking } from "react-native";

import styles from './styles';

const About = () => (
			<View style={styles.container}>
				<Text style={styles.tituloText}>pGO Sniper</Text>
				<Text style={styles.versaoText}>Versão 0.0.5</Text>
				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>Coordenadas conseguidas nos tópicos do subreddit:</Text>
					<Text style={styles.subredditText} onPress={() => Linking.openURL('https://www.reddit.com/r/PokemonGoSniping')}>/r/PokemonGoSniping</Text>
					<Text/>
					<Text style={styles.jsonText}>Usando JSON da própria API do Reddit.</Text>
				</View>
				<View style={styles.endContainer}>
					<Text style={styles.createdText}>Criado com React Native.</Text>
					<Text style={styles.endText}>Aplicativo criado para fins de Aprendizado.</Text>
				</View>
			</View>
);

About.navigationOptions = { headerTitle: "Sobre" }

export default About;