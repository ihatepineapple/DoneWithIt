import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import AppText from "../components/AppText";



function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
      getListingsApi.request();
    }, []);
    

    return (
        <Screen style={styles.screen}>
        { getListingsApi.error && <> 
            <AppText>We couldn't load the data</AppText>
            <AppButton title="Retry" onPress={loadListings} />
        </>}
            {/* <ActivityIndicator animating={getListingsApi.loading} /> */}
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                <Card
                    title={item.title}
                    subtitle={ item.price + "€"}
                    imageUrl={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
      },
})

export default ListingsScreen;