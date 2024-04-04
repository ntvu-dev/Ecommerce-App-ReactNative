import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'

const ForgotPasswordScreen = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text onPress={() => router.push('signIn')} style={styles.backButton}>Back</Text>
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.para}>Enter your email to send the OTP code</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#777"
                />
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 15,
        zIndex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        top: -150,
    },
    para: {
        fontSize: 15,
        color: '#777',
        top: -100,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        color: '#333',
    },
    submitButton: {
        backgroundColor: '#48B600',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '100%',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ForgotPasswordScreen;


