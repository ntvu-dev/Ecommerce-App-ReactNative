import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'

const SignInWithFaceIDScreen = ({ navigation }) => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text onPress={() => router.push('signIn')} style={styles.backButton}>Back</Text>
            <Text style={styles.heading}>Login with Face ID</Text>
            <Text style={styles.description}>Use your ID for faster, easier access to your account</Text>
            <Image
                source={require('../assets/z5262235457526_c0b9a2d62085dbb39ce591231bb286b7.jpg')}
                style={styles.faceIdImage}
            />
            <TouchableOpacity style={styles.emailButton} onPress={() => router.push('signIn')}>
                <Text style={styles.emailButtonText}>Login with Email</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    faceIdImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    emailButton: {
        backgroundColor: '#48B600',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 40,
        width: '100%',
    },
    emailButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SignInWithFaceIDScreen;