import React from "react";
import Layout from "./layout";
import Header from "../components/header";
import Cards from "../components/day_image";
import { useEffect, useState } from "react";
import fech from "../utility/fech";
import { format, sub } from "date-fns";
import { FlatList, View } from "react-native";
import images_daysView from "../components/images_days";
import Textwhite from "../components/textWhite";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default Home = ({ navigation }) => {
  const [day_image, setday_image] = useState({});
  const [images_days, setimages_days] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cargarimagen = async () => {
      try {
        const res = await fech("");
        setday_image(res);
      } catch (er) {
        console.log(er);
      }
    };

    const cargarUltimasImagenes = async () => {
      try {
        const date = new Date();
        const fechaActual = format(date, "yyyy-MM-dd");
        const fechaSieteDiasAtras = format(
          sub(date, { days: 7 }),
          "yyyy-MM-dd"
        );

        const ultimas7ImagenesResponse = await fech(
          `&start_date=${fechaSieteDiasAtras}&end_date=${fechaActual}`
        );
        setimages_days(ultimas7ImagenesResponse);
      } catch (er) {
        console.error(er);
      } finally {
        setIsLoading(false);
      }
    };
    cargarimagen().catch(null);
    cargarUltimasImagenes().catch(null);
  }, []);

  const handleDetalles = (objetoimagen) => {
    navigation.navigate("Detalles", {
      title: objetoimagen.title,
      url: objetoimagen.url,
      desc: objetoimagen.explanation,
      date: objetoimagen.date,
    });
  };

  return (
    <Layout>
      <Header texto="Descubre" />
      {isLoading ? ( // Mostrar el loader mientras se carga
        <ActivityIndicator
          style={{
            marginTop: 20,
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
          animating={true}
          color={MD2Colors.red800}
          size="large"
        />
      ) : (
        <>
          <Cards Data={day_image} onPres={() => handleDetalles(day_image)} />
          <Textwhite texto="Imagenes de los ultimos 7 dias" />
          <FlatList
            style={{ marginVertical: 5 }}
            data={images_days}
            renderItem={({ item }) => (
              <images_daysView
                title={item.title}
                date={item.date}
                url={item.url}
                onPres={() => handleDetalles(item)}
              />
            )}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ></FlatList>
        </>
      )}
    </Layout>
  );
};