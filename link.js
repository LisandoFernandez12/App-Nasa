import { Text, TouchableOpacity } from "react-native";

export default Link = (props) => {
  const { texto, onPres } = props;

  return (
    <TouchableOpacity onPress={onPres}>
      <Text style={{ color: "green", paddingTop: 20 }}>{texto}</Text>
    </TouchableOpacity>
  );
};