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

  const loadStorage = async () => {
    const response = JSON.parse(await PegarItem("@topics"));

    const { children } = response.data.data;

    setChildren(children);

    alert("Não foi possivel se conectar a internet.");
  };

  const loadTopics = async () => {
    //let response = await api.get(
    //  "/r/PokemonGoSniping/new.json?sort=new&limit=5",
    //);

    let response = data;

    /*
    const finalResponse = await response.data.data.children.filter(
      async ({ data }) => {
        await api.get(`${data.permalink}.json?sort=old&limit=1`)
          .then((res) => {
            data.selftext_html = res.data[1].data.children[0].data.body;
          })
          .catch((err) => {
            data.selftext_html = "Erro ao pegar coordenadas";
          });

        data.approved_at_utc = FormatDate(data.created_utc, hournow);
      },
    );

    const children = finalResponse;
    */

    for (let index = 0; index < 4; index++) {
      await apiAxios.get(
        `${
          response.data.data.children[index].data.permalink
        }.json?sort=old&limit=1`,
      )
        .then((res) => {
          response.data.data.children[index].data.selftext_html =
            res.data[1].data.children[0].data.body;
        })
        .catch((error) => {
          response.data.data.children[index].data.selftext_html =
            "Erro ao pegar coordenadas";
        });
      response.data.data.children[index].data.approved_at_utc = FormatDate(
        response.data.data.children[index].data.created_utc,
        hournow,
      );
    }

    const { children } = response.data.data;
    await GuardarItem("@topics", JSON.stringify(response));

    setChildren(children);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.topicContainer, styles[props.theme]]}>
      <Text style={[styles.fs18Text, styles.boldText, styles[props.theme]]}>
        {item.data.title}
      </Text>
      <View style={styles.rowContainer}>
        <Text style={[styles.topicAuthor, styles[props.theme]]}>
          Publicado por: {item.data.author}
          {" "}
        </Text>
        <Text style={[styles.topicAuthor, styles[props.theme]]}>
          a {item.data.approved_at_utc} atrás
        </Text>
      </View>
      <Text
        style={[styles.topicDescription, styles.fs16Text, styles[props.theme]]}
      >
        {item.data.selftext}
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
          {item.data.selftext_html}
        </TextInput>
        <Text />
        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => {
            Clipboard.setString(item.data.selftext_html);
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

  if (
    !data && !error
  ) {
    return (<View>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          textAlign: "center",
          textShadowRadius: 1,
          textShadowColor: "black",
        }}
      >
        Carregando...
      </Text>
    </View>);
  }

  return (
    <FlatList
      data={children}
      keyExtractor={(item) => String(item.data.created_utc)}
      renderItem={renderItem}
    />
  );
}
