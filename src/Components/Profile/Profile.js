import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Inputs = [
    {
        label: "Tên đăng nhập",
        type: "text",
    },
    {
        label: "Email",
        type: "text",
    },
    {
        label: "Mật khẩu mới",
        type: "password",
    },
    {
        label: "Nhập lại mật khẩu mới",
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
                    title="Cập nhật tài khoản"
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
        paddingTop: 20,
    },
    inputContainer: {
        // marginBottom: 2,
    },
    label: {
        paddingBottom: 5,
        paddingHorizontal: 10,
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
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
    },
});

export default Profile;
