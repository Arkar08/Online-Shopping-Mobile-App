import { SafeAreaView, Text,StyleSheet, View ,Image} from "react-native";
import { Link } from 'expo-router';


const sale = require('@/assets/images/Sales consulting-pana 1.png')

export default function SplashSale(){
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>2</Text>
                        <Text style={styles.text2}>/3</Text>
                    </View>
                    <Link href='/Login' style={styles.skipText}>Skip</Link>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={sale}/>
                </View>
                <View>
                    <Text style={styles.chooseText}>Make Payment</Text>
                    <Text style={styles.lorem}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </Text>
                </View>
                <View style={styles.nextContainer}>
                    <View>
                        <Text style={styles.prevText}>Prev</Text>
                    </View>
                    <View style={styles.lineContainer}>
                        <View style={styles.circle}></View>
                        <View style={styles.line}></View>
                        <View style={styles.circle}></View>
                    </View>
                    <View>
                        <Link href='/SplashOrder'  style={styles.nextText}>Next</Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        position:'relative',
        height:'100%'
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:15
    },
    skipText:{
        fontSize:16,
        fontWeight:'bold'
    },
    textContainer:{
        display:"flex",
        flexDirection:"row"
    },
    text1:{
        fontSize:16,
        fontWeight:'bold'
    },
    text2:{
        fontSize:16,
        fontWeight:'semibold',
        color:"gray"
    },
    imageContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:'8%'
    },
    chooseText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:"center"
    },
    lorem:{
        textAlign:"center",
        padding:'5%'
    },
    nextText:{
        fontSize:16,
        color:"red",
        fontWeight:'500'
    },
    lineContainer:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        gap:10
    },
    line:{
        width:50,
        height:8,
        borderRadius:20,
        backgroundColor:"black"
    },
    circle:{
        width:10,
        height:10,
        backgroundColor:"gray",
        borderRadius:50
    },
    nextContainer:{
        position:"absolute",
        bottom:'0%',
        padding:15,
        width:'100%',
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    prevText:{
        fontSize:16,
        color:"gray",
        fontWeight:'500'
    }
})