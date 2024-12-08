import { Image, StyleSheet, View } from "react-native";
import TextWhite from "./textWhite";
import Link from "./link";

export default images_days = (props) => {
  const { title, date, url, onPres } = props;

  return (
    <View style={styles.container}>
      <View style={styles.lcontainer}>
        <TextWhite texto={title} />
        <TextWhite texto={date} />
        <Link texto="Detalles" onPres={onPres} />
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

const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 95,
    borderRadius: 30,
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
    padding: 8,
    borderColor: "#fc3d",
    borderWidth: 1,
    borderRadius: 14,
  },
  lcontainer: {
    flex: 0.8,
    alignItems: "flex-start",
  },
  rcontainer: {
    flex: 0.4,
    alignContent: "flex-end",
  },
});