import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import TextWhite from "./textWhite";
import Boton from "./boton";
import images_days from "./images_days";

const images_days = ({ data }) => {
  const renderItem = ({ item }) => {
    const { title, date, url, onPres } = item;
    return (
      <View style={styles.container}>
        <View style={styles.lcontainer}>
          <TextWhite texto={title} />
          <TextWhite texto={date} />
          <Boton texto="Detalles" onPres={onPres} />
        </View>
        <View style={styles.rcontainer}>
          <Image
            source={{
              uri: url,
            }}
            style={styles.img}
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 90,
    borderRadius: 25,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    padding: 6,
    borderColor: "#fc3222",
    borderWidth: 1,
    borderRadius: 10,
  },
  lcontainer: {
    flex: 0.7,
    alignItems: "flex-start",
  },
  rcontainer: {
    flex: 0.3,
    alignContent: "flex-end",
  },
});

export default images_days;
