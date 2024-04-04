import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '../src/Components/Loading';

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handlerLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Sign In', "Please fill all the fields!");
      return;
    }

    // login process
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode='contain' source={require('../assets/favicon.png')} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign In</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Octicons name='mail' size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={styles.input}
                placeholder='Email/ address'
                placeholderTextColor="gray"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Octicons name='lock' size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => passwordRef.current = value}
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                placeholderTextColor="gray"
              />
            </View>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </View>

          {
            loading ? (
              <View style={styles.loadingContainer}>
                <Loading size={hp(6.5)} />
              </View>
            ) : (
              <TouchableOpacity onPress={handlerLogin} style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            )
          }

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Pressable onPress={() => router.push('signUp')}>
              <Text style={[styles.signUpText, styles.signUpLink]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: hp(8),
    paddingHorizontal: wp(5),
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: hp(25),
  },
  formContainer: {
    marginBottom: hp(3),
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginTop: hp(3),
  },
  inputWrapper: {
    height: hp(7),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: wp(4),
    borderRadius: hp(2),
    marginBottom: hp(2),
  },
  input: {
    fontSize: hp(2),
    flex: 1,
  },
  forgotPassword: {
    fontSize: hp(1.8),
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#666',
    marginTop: hp(1),
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  button: {
    height: hp(6.5),
    backgroundColor: '#4b0082',
    borderRadius: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  buttonText: {
    fontSize: hp(2.7),
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  signUpText: {
    fontSize: hp(1.8),
    fontWeight: 'bold',
    color: '#666',
  },
  signUpLink: {
    color: '#4b0082',
    marginLeft: wp(1),
  },
});


