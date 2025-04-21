import { SafeAreaView, StyleSheet, Text, View,Button, Pressable } from "react-native";
import Input from "./components/Input";
import { Link, useRouter } from "expo-router";

const eye = require('@/assets/images/eye.png')
const image = require('@/assets/images/User (1).png')
const lock = require('@/assets/images/Group 2.png')

export default function Signup(){

    const router = useRouter()

    const createAccount = ()=>{
        router.replace("/(tabs)")
    }

        
    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View>
                    <Text style={styles.welCome}>
                        Create an
                    </Text>
                    <Text style={styles.welCome}>Account</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Input placeholder="Username or Email" image={image} eyeImage=''/>
                    <Input placeholder="Password" eyeImage={eye} image={lock}/>
                    <Input placeholder="Confirm Password" eyeImage={eye} image={lock}/>
                </View>
                <View>
                    <Text style={styles.forget}>By clicking the <Text style={styles.signUp}>Register</Text> button,you agree to the public offer.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.press} onPress={createAccount}>
                        <Text style={styles.pressText}>Create Account</Text>
                    </Pressable>
                    {/* <Button title="Create Account" color='red'/> */}
                </View>
                <View style={styles.signupContainer}>
                    <Text>Already have An Account? <Link href='/Login' style={styles.signUp}>Login</Link></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        padding:15,
        backgroundColor:"white",
        height:'100%'
    },
    welCome:{
        fontSize:50,
        fontWeight:'bold'
    },
    inputContainer:{
        display:"flex",
        gap:30,
        marginTop:'15%'
    },
    forget:{
        color:"black",
        marginTop:10,
        padding:10,
    },
    buttonContainer:{
        marginTop:'20%',
    },
    signupContainer:{
        marginTop:'5%',
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    signUp:{
        color:"red",
        textDecorationLine:"underline"
    },
    press:{
        padding:12,
        backgroundColor:'red',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    pressText:{
        color:'white',
        fontSize:18
    }
})