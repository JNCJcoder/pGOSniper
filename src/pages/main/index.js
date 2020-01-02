import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import { formatDistance, fromUnixTime } from 'date-fns';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

import styles from './styles';
import pt from 'date-fns/locale/pt-BR';

export default class Main extends Component {
  state = {
    darktheme: 'false',
    hournow: new Date(),
    children: [],
  };

  componentDidMount() {
    this.firstTime();
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        this.loadTopics();
      } else {
        this.loadStorage();
      }
    });
  }

  firstTime = async () => {
    if ((await AsyncStorage.getItem('@firsttime')) == null) {
      // eslint-disable-next-line no-alert
      alert(
        'Bem Vindo ao pGO Sniper.\nAplicativo feito para fins de aprendizado.\n\nContribua acessando nosso repositorio no Github:\n\nhttps://github.com/drawciamage/pGOSniper\n\n\n\nClique em Sobre para mais informações',
      );
      await AsyncStorage.setItem('@firsttime', 'false');
      await AsyncStorage.setItem('@darktheme', 'false');
    } else {
      const result = await AsyncStorage.getItem('@darktheme');
      this.setState({ darktheme: result === 'true' ? true : false });
    }
  };

  mudarTema = async () => {
    this.setState({ darktheme: !this.state.darktheme });
    await AsyncStorage.setItem(
      '@darktheme',
      this.state.darktheme ? 'false' : 'true',
    );
  };

  loadStorage = async () => {
    const response = JSON.parse(await AsyncStorage.getItem('@topics'));

    const { children } = response.data.data;

    this.setState({ children });

    alert(
      'Não foi possivel se conectar a internet, usando a ultima lista baixada.',
    );
  };

  loadTopics = async () => {
    const response = await axios.get(
      'https://www.reddit.com/r/PokemonGoSniping/new.json?sort=new&limit=5',
    );

    const { children } = response.data.data;
    await AsyncStorage.setItem('@topics', JSON.stringify(response));

    this.setState({ children });
  };

  renderItem = ({ item }) => (
    <View
      style={[
        styles.topicContainer,
        { backgroundColor: this.state.darktheme ? '#151515' : '#FFF' },
      ]}>
      <Text
        style={[
          styles.fs18Text,
          styles.boldText,
          { color: this.state.darktheme ? '#7a7a7a' : '#333' },
        ]}>
        {item.data.title}
      </Text>
      <View style={styles.rowContainer}>
        <Text
          style={[
            styles.topicAuthor,
            { color: this.state.darktheme ? '#7a7a7a' : '#333' },
          ]}>
          Publicado por: {item.data.author}{' '}
        </Text>
        <Text
          style={[
            styles.topicAuthor,
            { color: this.state.darktheme ? '#7a7a7a' : '#333' },
          ]}>
          a{' '}
          {formatDistance(
            new Date(fromUnixTime(item.data.created_utc)),
            this.state.hournow,
            { locale: pt },
          )}{' '}
          atrás
        </Text>
      </View>
      <Text
        style={[
          styles.topicDescription,
          styles.fs16Text,
          { color: this.state.darktheme ? '#7a7a7a' : '#999' },
        ]}>
        {item.data.selftext.split('/n')[0]}
      </Text>
      <View style={[styles.coordsContainer, styles.rowContainer]}>
        <TextInput
          style={[
            styles.topicCoord,
            styles.fs18Text,
            styles.boldText,
            { color: this.state.darktheme ? '#a9a9a9' : '#000' },
          ]}
          maxLength={23}>
          {' '}
          {item.data.selftext.split('  ')[0]}{' '}
        </TextInput>
        <Text />
        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => {
            Clipboard.setString(item.data.selftext.split(' ')[0]);
          }}>
          <Text
            style={[styles.copyButtonText, styles.fs16Text, styles.boldText]}>
            {!item.data.selftext == ''
              ? 'Copiar'
              : 'Coordenada Não Encontrada no Post Oficial'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.darktheme ? '#1e1e1e' : '#FAFAFA' },
        ]}>
        <TouchableOpacity onPress={() => this.mudarTema()}>
          <Text
            style={[
              styles.sobreText,
              {
                color: this.state.darktheme ? '#a9a9a9' : '#333',
                alignItems: 'center',
                textAlign: 'center',
              },
            ]}>
            Mudar Tema
          </Text>
        </TouchableOpacity>
        <FlatList
          //contentContainerStyle={styles.list}
          data={this.state.children}
          keyExtractor={item => String(item.data.created_utc)}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

Main.navigationOptions = ({ navigation }) => ({
  headerTitle: 'pGO Sniper',
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <Text style={[styles.sobreText, styles.boldText]}>Sobre </Text>
    </TouchableOpacity>
  ),
});
