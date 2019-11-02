import React, { Component } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Clipboard } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import Moment from "react-moment";

import styles from "./styles";
import "moment/locale/pt";

export default class Main extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: "pGO Sniper",
		headerRight: <TouchableOpacity onPress={() => navigation.navigate('About')}><Text style={styles.sobreText}>Sobre </Text></TouchableOpacity>,
	});

	state = {
		children: [],
	};

	componentDidMount() {
		NetInfo.fetch().then(sTate => {
			if(sTate.isConnected){ this.loadTopics(); } 
			else { this.loadStorage(); }
		});
	}

	loadStorage = async () => {
		const result = await AsyncStorage.getItem('@topics');
		const response = JSON.parse(result);

		const { children } = response.data.data;

		this.setState({ children });
		
		alert("Não foi possivel se conectar a internet, usando a ultima lista baixada.");
	};

	loadTopics = async () => {
		await AsyncStorage.removeItem('@topics');
		const response = await axios.get('https://www.reddit.com/r/PokemonGoSniping/new.json?sort=new&limit=5');

		const { children } = response.data.data; 
		await AsyncStorage.setItem('@topics', JSON.stringify(response));
		
		this.setState({ children });
	};

	renderItem = ({ item }) => (
		<View style={styles.topicContainer}>
			<Text style={styles.topicTitle}>{item.data.title}</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.topicAuthor}>Publicado por: {item.data.author} </Text>
				<Moment unix toNow element={Text} locale="pt" style={styles.topicAuthor}>{item.data.created_utc}</Moment>
				<Text style={styles.topicAuthor}> atras</Text>
			</View>
			<Text style={styles.topicDescription}>{item.data.selftext.split("/n")[0]}</Text>
			<View style={styles.coordsContainer}>
				<TextInput style={styles.topicCoord} maxLength={23}> {item.data.selftext.split("  ")[0]} </TextInput>
				<Text>  </Text>
				<TouchableOpacity style={styles.copyButton} onPress={() => { Clipboard.setString(item.data.selftext.split(" ")[0]); }}>
					<Text style={styles.copyButtonText}>{ !item.data.selftext == "" ? "Copiar" : "Coordenada Não Encontrada no Post Oficial" }</Text>
				</TouchableOpacity>
			</View>
		</View>
	)

	render() {
		return (
			<View style={styles.container}>
				<FlatList
				contentContainerStyle={styles.list}
				data={this.state.children}
				keyExtractor={item => item.data.selftext}
				renderItem={this.renderItem}
				/>
			</View>
		);
	}
}