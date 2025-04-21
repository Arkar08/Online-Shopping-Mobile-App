import { StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';




export default function cart(){
    return(
        <View style={styles.cartContainer}>
            <View style={styles.personal}>
                <Feather name="map-pin" size={18} color="black" />
                <Text style={styles.personalText}>
                    Delivery Address
                </Text>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box1}>
                    <View style={styles.editContainer}>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>Address:</Text>
                        <Feather name="edit" size={14} color="black" />
                    </View>
                    <Text style={styles.address}>123</Text>
                    <Text style={styles.contact}>Contact: <Text>1233455</Text></Text>
                </View>
                <View style={styles.box2}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cartContainer:{
        flex:1,
        padding:10
    },
    personal:{
        marginTop:10,
        display:"flex",
        alignItems:'center',
        flexDirection:'row'
    },
    personalText:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:5
    },
    boxContainer:{
        display:"flex",
        flexDirection:'row',
        gap:10,
        marginTop:10
    },
    box1:{
        width:'75%',
        borderWidth:1,
        height:70,
        borderRadius:10,
        padding:10
    },
    box2:{
        width:'22%',
        borderWidth:1,
        height:70,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    editContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    address:{
        fontSize:12,
        fontWeight:'regular',
        paddingTop:5
    },
    contact:{
        fontSize:14
    }
})