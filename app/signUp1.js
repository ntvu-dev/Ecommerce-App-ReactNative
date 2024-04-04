// import React, { useRef, useState } from 'react';
// import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Feather, Octicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import Loading from '../src/Components/Loading';
// import CustomKeyboardView from '../src/Components/CustomKeyboardView';

// export default function SignUp() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const usernameRef = useRef("");
//   const profileRef = useRef("");

//   const handlerRegister = async () => {
//     if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
//       Alert.alert('Sign Up', "Please fill all the fields!");
//       return;
//     }

//     // register process
//   };

//   return (
//     <CustomKeyboardView>
//       <View style={styles.container}>
//         <View style={styles.innerContainer}>
//           <View style={styles.logoContainer}>
//             <Image style={styles.logo} resizeMode='contain' source={require('../assets/favicon.png')} />
//           </View>

//           <View style={styles.formContainer}>
//             <Text style={styles.title}>Sign Up</Text>

//             <View style={styles.inputContainer}>
//               <Feather name='user' size={hp(2.7)} color="gray" />
//               <TextInput
//                 onChangeText={value => usernameRef.current = value}
//                 style={styles.input}
//                 placeholder='Username'
//                 placeholderTextColor="gray"
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Octicons name='lock' size={hp(2.7)} color="gray" />
//               <TextInput
//                 onChangeText={value => emailRef.current = value}
//                 style={styles.input}
//                 placeholder='Email address'
//                 secureTextEntry
//                 placeholderTextColor="gray"
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Octicons name='lock' size={hp(2.7)} color="gray" />
//               <TextInput
//                 onChangeText={value => passwordRef.current = value}
//                 style={styles.input}
//                 placeholder='Password'
//                 secureTextEntry
//                 placeholderTextColor="gray"
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Feather name='image' size={hp(2.7)} color="gray" />
//               <TextInput
//                 onChangeText={value => profileRef.current = value}
//                 style={styles.input}
//                 placeholder='Profile URL'
//                 placeholderTextColor="gray"
//               />
//             </View>

//             <TouchableOpacity onPress={handlerRegister} style={styles.button}>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </TouchableOpacity>

//             <View style={styles.signInTextContainer}>
//               <Text style={styles.signInText}>Already have an account?</Text>
//               <Pressable onPress={() => router.push('signIn')}>
//                 <Text style={[styles.signInText, styles.signInLink]}>Sign In</Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </View>
//     </CustomKeyboardView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: wp(5),
//     paddingTop: hp(7),
//     justifyContent: 'center',
//   },
//   innerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   logo: {
//     height: hp(20),
//     width: '100%',
//   },
//   formContainer: {
//     marginTop: hp(7),
//   },
//   title: {
//     fontSize: hp(4),
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333',
//     marginBottom: hp(2),
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f4f4f4',
//     paddingHorizontal: wp(4),
//     borderRadius: hp(2),
//     marginBottom: hp(2),
//   },
//   input: {
//     fontSize: hp(2),
//     flex: 1,
//     marginLeft: wp(2),
//   },
//   button: {
//     height: hp(6.5),
//     backgroundColor: '#4b0082',
//     borderRadius: hp(2),
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: hp(2),
//   },
//   buttonText: {
//     fontSize: hp(2.7),
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   signInTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: hp(2),
//   },
//   signInText: {
//     fontSize: hp(1.8),
//     fontWeight: 'bold',
//     color: '#666',
//   },
//   signInLink: {
//     marginLeft: wp(1),
//     color: '#4b0082',
//   },
// });
