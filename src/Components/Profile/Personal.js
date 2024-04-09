import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DateTimePicker from '@react-native-community/datetimepicker';

const Inputs = [
    {
        label: "Tên",
        type: "text",
    },
    {
        label: "Số điện thoại",
        type: "text",
    },
    {
        label: "Ngày sinh",
        type: "datetime",
    },
    {
        label: "Địa chỉ",
        type: "text",
    },
];

const Personal = () => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatepicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {Inputs.map((input, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.label}>{input.label}</Text>
                        {input.type === "datetime" ? (
                            <View>
                                <Pressable onPress={toggleDatepicker}>
                                    {/* <TextInput 
                                        value={date.toLocaleDateString()}
                                        style={styles.inputText}
                                        editable={false}
                                    /> */}
                                    <View 
                                        style={styles.dateofbirth}
                                        containerStyle={styles.input}
                                        inputStyle={styles.inputText}
                                        inputContainerStyle={styles.inputBorder}
                                        >
                                        <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
                                    </View>
                                </Pressable>
                                {showDatePicker && (
                                    <DateTimePicker
                                        value={date}
                                        mode="date"
                                        display="spinner"
                                        onChange={onChange}
                                    />
                                )}
                            </View>
                        ) : (
                            <Input
                                containerStyle={styles.input}
                                inputStyle={styles.inputText}
                                inputContainerStyle={styles.inputBorder}
                                secureTextEntry={input.type === "password"}
                            />
                        )}
                    </View>
                ))}
                <Button
                    title="Cập nhật"
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
        // marginBottom: 20,
    },
    label: {
        paddingBottom: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: Colors.subGreen,
    },
    inputText: {
        color: Colors.main,
        fontSize: 16,
        paddingVertical: 10,
    },
    inputBorder: {
        borderWidth: 0.2,
        borderColor: Colors.main,
        borderRadius: 5,
    },
    dateofbirth: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.2,
        borderColor: Colors.main,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    updateButton: {
        backgroundColor: 'rgba(72, 182, 0, 1)',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal:10,
    },
});

export default Personal;
