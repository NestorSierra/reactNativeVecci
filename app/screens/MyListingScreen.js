import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import useApi from "../hooks/useApi";
import myListingsApi from "../api/my";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import colors from "../config/colors";

function MyListingScreen({ navigation }) {
  const getListingsApi = useApi(myListingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const loadListings = () => {
    getListingsApi.request();
  };

  return (
    <>
      <AppActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrive the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            ></AppCard>
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default MyListingScreen;
