import React, { Component } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Clipboard } from "react-native";
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
		this.loadTopics();
	}

	loadTopics = async () => {
		const response = await axios.get('https://www.reddit.com/r/PokemonGoSniping/new.json?sort=new&limit=5')
			.catch(function (error) {
    			alert("Erro ao carregar a lista. Não foi possivel se conectar a internet");
    		});

		const { children } = response.data.data;

		this.setState({ children });
	};

	renderItem = ({ item }) => (
		<View style={styles.productcontainer}>
			<Text style={styles.topicTitle}>{item.data.title}</Text>
			<View style={styles.coordsorder}>
				<Text style={styles.topicAuthor}>Publicado por: {item.data.author} </Text>
				<Moment unix toNow element={Text} locale="pt" style={styles.topicAuthor}>{item.data.created_utc}</Moment>
				<Text style={styles.topicAuthor}> atras</Text>
			</View>
			<Text style={styles.topicDescription}>{item.data.selftext.split("/n")[0]}</Text>
			<View style={styles.coordsorder}>
				<TextInput style={styles.topicCoord} maxLength={23}> {item.data.selftext.split("  ")[0]} </TextInput>
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
				keyExtractor={item => item.data.title}
				renderItem={this.renderItem}
				/>
			</View>
		);
	}
}