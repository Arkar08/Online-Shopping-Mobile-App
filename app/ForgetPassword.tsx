import { SafeAreaView, StyleSheet, Text, View,Button, Pressable } from "react-native";
import Input from "./components/Input";
import { useRouter } from "expo-router";

const image = require('@/assets/images/Mail.png')

export default function ForgetPassword(){

    const router = useRouter()

    const submit = ()=>{
        router.replace('/(tabs)')
    }

    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View>
                    <Text style={styles.welCome}>
                        Forget
                    </Text>
                    <Text style={styles.welCome}>Password?</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Input placeholder="Enter your email address" image={image} eyeImage=''/>
                </View>
                <View>
                    <Text style={styles.forget}>*<Text style={styles.text}>We will send you a message to sent or reset your new password.</Text></Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.press} onPress={submit}>
                        <Text style={styles.pressText}>Submit</Text>
                    </Pressable>
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
        color:"red",
        marginTop:10,
        padding:10,
    },
    buttonContainer:{
        marginTop:'20%'
    },
    text:{
        color:"black",
        paddingLeft:5
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