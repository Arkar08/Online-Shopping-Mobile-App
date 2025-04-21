import { useRouter } from "expo-router";
import { StyleSheet, Text, View,ImageBackground, StatusBar, Button, Pressable } from "react-native";

const image = require('@/assets/images/backgroundImage.png')
export default function GetStarted(){

    const router = useRouter()

    const handleStart = ()=>{
        router.replace('/(tabs)')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} />
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <View style={styles.main}>
                <Text style={styles.text}>You Want</Text>
                <Text style={styles.text}>Authentic,here</Text>
                <Text style={styles.text}>you go !</Text>
                <Text style={styles.textFind}>Find it here.buy it now !</Text>
                <View>
                    <Pressable style={styles.press} onPress={handleStart}>
                        <Text style={styles.pressText}>Get Started</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:'100%'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    main:{
        position:'absolute',
        bottom:'5%',
        left:'8%'
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:48
    },
    textFind:{
        textAlign:"center",
        color:"whitesmoke",
        paddingVertical:10
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