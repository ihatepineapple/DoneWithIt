import React, { useState } from "react";
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
    {
        id: 1,
        title: "Irene Asensio",
        description: "Hi! Is this item still available? I am interested",
        image: require("../assets/irene.jpg")
    },
    {
        id: 2,
        title: "Irene Asensio",
        description: "Hello, I am interested in this item. When will you be able to post it?",
        image: require("../assets/irene.jpg")
    }
]


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({item}) => (
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            />
                )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                    id: 2,
                    title: "Irene Asensio",
                    description: "Hello, I am interested in this item. When will you be able to post it?",
                    image: require("../assets/irene.jpg"),
                    },
                ]);
            }}
        />

        </Screen>
    )}


const styles = StyleSheet.create({
    
})
export default MessagesScreen;