import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import Topicos from '../../components/Topicos';

export default class Main extends Component {
  state = {
    darktheme: 'false',
  };

  componentDidMount() {
    this.firstTime();
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

        {this.state.darktheme ? (
          <Topicos
            corPrimaria="#151515"
            corSecundaria="#a9a9a9"
            corTerciaria="#7a7a7a"
            corQuaternaria="#7a7a7a"
          />
        ) : (
          <Topicos
            corPrimaria="#FFF"
            corSecundaria="#000"
            corTerciaria="#999"
            corQuaternaria="#333"
          />
        )}
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
