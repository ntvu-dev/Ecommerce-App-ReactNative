import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Inputs = [
    {
        label: "USERNAME",
        type: "text",
    },
    {
        label: "EMAIL",
        type: "text",
    },
    {
        label: "NEW PASSWORD",
        type: "password",
    },
    {
        label: "CONFIRM PASSWORD",
        type: "password",
    },
];

const Profile = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {Inputs.map((input, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.label}>{input.label}</Text>
                        <Input
                            containerStyle={styles.input}
                            inputStyle={styles.inputText}
                            inputContainerStyle={styles.inputBorder}
                            secureTextEntry={input.type === "password"}
                        />
                    </View>
                ))}
                <Button
                    title="UPDATE PROFILE"
                    buttonStyle={styles.updateButton}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
    },
    inputContainer: {
        marginBottom: 2,
    },
    label: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 0,
        fontSize: 12,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: Colors.subGreen,
    },
    inputText: {
        color: Colors.main,
        fontSize: 15,
    },
    inputBorder: {
        borderWidth: 0.2,
        borderColor: Colors.main,
        borderRadius: 5,
    },
    updateButton: {
        backgroundColor: 'rgba(72, 182, 0, 1)',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
});

export default Profile;
