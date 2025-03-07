import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Layout from "./layout";
import { useRoute } from "@react-navigation/native";
import translate from "translate";

export default Detalle = ({ navigation }) => {
  const {
    params: { url, title, desc, date },
  } = useRoute();

  const [translatedDesc, setTranslatedDesc] = useState("");

  useEffect(() => {
    const translateDescription = async () => {
      try {
        const translatedText = await translate(desc, { from: "en", to: "es" });
        setTranslatedDesc(translatedText);
      } catch (error) {
        console.error("Error translating description:", error);
      }
    };
    translateDescription();
  }, [desc]);

  return (
    <Layout>
      <Text style={styles.titulo}>{title}</Text>

      <Text style={{ color: "white" }}>{date}</Text>
      <View style={styles.imagenConainer}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.img}
        />
      </View>
      <ScrollView style={{ marginVertical: 15, height: "100%" }}>
        <View style={styles.descripcionContainer}>
          <Text style={styles.descripcion}>{translatedDesc}</Text>
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  titulo: {
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 7,
  },
  descripcion: {
    color: "white",
    fontSize: 13,
    textAlign: "justify",
  },
  img: {
    width: "100%",
    height: "100%",
    padding: 25,
    borderRadius: 10,
    marginVertical: 5,
  },
  descripcionContainer: {
    paddingTop: 15,
    height: "100%",
  },
  imagenConainer: {
    height: 360,
  },
});