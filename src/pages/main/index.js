import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { GuardarItem, PegarItem } from '../../util/AsyncStorage';

import styles from './styles';
import Topicos from '../../components/Topicos';

const Main = () => {
  const [darktheme, setDarktheme] = useState(useColorScheme());

  useEffect(() => {
    firstTime();
  }, []);

  const firstTime = async () => {
    if ((await PegarItem('@firsttime')) == null) {
      // eslint-disable-next-line no-alert
      alert(
        'Bem Vindo ao pGO Sniper.\nAplicativo feito para fins de aprendizado.\n\nContribua acessando nosso repositorio no Github:\n\nhttps://github.com/drawciamage/pGOSniper\n\n\n\nClique em Sobre para mais informações',
      );
      await GuardarItem('@firsttime', 'false');
      await GuardarItem('@darktheme', useColorScheme());
    } else {
      setDarktheme(await PegarItem('@darktheme'));
    }
  };

  const mudarTema = async () => {
    const changeTheme = darktheme == 'dark' ? 'light' : 'dark';
    setDarktheme(changeTheme);
    await GuardarItem('@darktheme', changeTheme);
  };

  return (
    <View style={[styles.container, styles['dark']]}>
      <TouchableOpacity onPress={() => mudarTema()}>
        <Text
          style={[
            styles.sobreText,
            styles[darktheme],
            {
              alignItems: 'center',
              textAlign: 'center',
            },
          ]}>
          Mudar Tema
        </Text>
      </TouchableOpacity>
      <Topicos theme={darktheme} />
    </View>
  );
};

export default Main;
