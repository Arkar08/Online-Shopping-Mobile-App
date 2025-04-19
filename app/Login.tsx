import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";
import { Link } from "expo-router";

const photo = require('@/assets/images/Login Photo.png')
const eye = require('@/assets/images/eye.png')
const image = require('@/assets/images/User (1).png')
const lock = require('@/assets/images/Group 2.png')

export default function Login(){
    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View>
                    <Text style={styles.welCome}>
                        Welcome
                    </Text>
                    <Text style={styles.welCome}>Back !</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={photo} style={styles.image}/>
                </View>
                <View style={styles.inputContainer}>
                    <Input placeholder="Username or Email" image={image} eyeImage=''/>
                    <Input placeholder="Password" eyeImage={eye} image={lock}/>
                </View>
                <View>
                    <Link href='/ForgetPassword' style={styles.forget}>Forget Password?</Link>
                </View>
                <View style={styles.buttonContainer}>
                    <Button text='Login'/>
                </View>
                <View style={styles.signupContainer}>
                    <Text>Don't have An Account? <Link href='/Signup' style={styles.signUp}>Sign Up</Link></Text>
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
        marginTop:'10%'
    },
    forget:{
        textAlign:"right",
        color:"red",
        marginTop:10
    },
    buttonContainer:{
        marginTop:'20%'
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
    imageContainer:{
        width:'100%',
        height:200,
        marginTop:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:'100%',
        height:'100%',
        objectFit:"contain"
    }
})