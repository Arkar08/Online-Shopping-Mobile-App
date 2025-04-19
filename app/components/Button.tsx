import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type ButtonProps = {
    text:string
}

export default function Button({text}:ButtonProps){
    return (
        <View style={styles.buttonContainer}>
            {
                text === 'Login'? (
                    <Link  href='/GetStarted' style={styles.text}>{text}</Link>
                ):(
                    <Text style={styles.text}>{text}</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'red',
        padding:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    text:{
        fontSize:20,
        fontWeight:'semibold',
        color:"white"
    }
})