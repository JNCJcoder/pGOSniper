/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import { GuardarItem, PegarItem } from "../../util/AsyncStorage";
import FormatDate from "../../util/FormatDate";
import { useApi, apiAxios } from "../../config/Api";

import styles from "./styles";

export default function Topicos(props) {
  const { data, error } = useApi(
    "/r/PokemonGoSniping/new.json?sort=new&limit=5",
  );
  const [hournow, setHournow] = useState(new Date());
  const [children, setChildren] = useState([]);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    if (data) {
      if (offline) {
        setChildren([]);
        setOffline(false);
        setHournow(new Date());
      }
      loadTopics();
    }
  }, [data]);

  useEffect(() => {
    if (error && !offline) {
      loadStorage();

      setOffline(true);

      console.log(`Error: ${error}`);
    }
  }, [error]);

  const getTopics = async (data) => {
    const finalResponse = [];

    for (let index = 0; index < 4; index++) {
      const {
        title,
        author,
        approved_at_utc,
        created_utc,
        permalink,
        selftext,
      } = data.children[index].data;

      let res = {};
      try {
        res = await apiAxios.get(
          `${permalink}.json?sort=old&limit=1`,
        );
      } catch (error) {
        console.error(error);
        continue;
      }

      finalResponse.push({
        title,
        author,
        created_utc,
        approved_at_utc: FormatDate(created_utc, hournow),
        selftext,
        selftext_html: res.data[1].data.children[0].data.body ||
          "Erro ao pegar coordenadas",
      });
    }

    return finalResponse;
  };

  const loadStorage = async () => {
    const response = JSON.parse(await PegarItem("@topics"));

    setChildren(response);

    alert("Não foi possivel se conectar a internet.");
  };

  const loadTopics = async () => {
    const Topics = await getTopics(data.data.data);

    await GuardarItem("@topics", JSON.stringify(Topics));

    setChildren(Topics);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.topicContainer, styles[props.theme]]}>
      <Text style={[styles.fs18Text, styles.boldText, styles[props.theme]]}>
        {item.title}
      </Text>
      <View style={styles.rowContainer}>
        <Text style={[styles.topicAuthor, styles[props.theme]]}>
          Publicado por: {item.author}
          {" "}
        </Text>
        <Text style={[styles.topicAuthor, styles[props.theme]]}>
          a {item.approved_at_utc} atrás
        </Text>
      </View>
      <Text
        style={[styles.topicDescription, styles.fs16Text, styles[props.theme]]}
      >
        {item.selftext}
      </Text>
      <View style={[styles.coordsContainer, styles.rowContainer]}>
        <TextInput
          style={[
            styles.topicCoord,
            styles.fs18Text,
            styles.boldText,
            styles[props.theme],
          ]}
        >
          {item.selftext_html}
        </TextInput>
        <Text />
        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => {
            Clipboard.setString(item.selftext_html);
          }}
        >
          <Text
            style={[styles.copyButtonText, styles.fs16Text, styles.boldText]}
          >
            Copiar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (!data && !error) {
    return (
      <View>
        <Text style={styles.textCarregando}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={children}
      keyExtractor={(item) => String(item.created_utc)}
      renderItem={renderItem}
    />
  );
}
