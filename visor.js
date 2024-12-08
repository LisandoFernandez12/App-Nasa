import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Boton from "./boton";

export default Card = ({ Data, onPres }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{Data.title}</Text>
      <Image style={styles.img} source={{ uri: Data.url }} />
      <Text style={styles.texto}>{Data.date}</Text>
      <Boton texto="Detalles" onPres={onPres} />
      <TouchableOpacity onPress={onPres}>
        <Text style={{ color: "white", alignSelf: "flex-end", padding: 8 }}>
          Detalles
        </Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    borderColor: "#fc3d26",
    borderWidth: 2,
    borderRadius: 15,
  },
  img: {
    alignSelf: "center",
    width: 275,
    height: 210,
    borderRadius: 15,
  },
  texto: {
    paddingVertical: 5,
    color: "white",
  },
});