import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const proudct = require('@/assets/images/shoe2.jpg')


type productCardProps = {
    text:string
}

export default function ProductCard({text}:productCardProps){
    return (
        <View style={styles.cardContainer}>
            {
                text !== 'wishlist' && (
                    <View style={styles.heart}>
                        <Ionicons name="heart-outline" size={24} color='white' />
                    </View>
                )
            }
            <View style={styles.imageContainer}>
                <Image source={proudct} style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Card</Text>
                <Text style={styles.textMiddle}>Description</Text>
                <Text style={styles.textPrice}>$500</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        width:'47%',
        borderRadius:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1, 
        position:'relative',
        borderWidth:0.2
    },
    imageContainer:{
        height:120,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    image:{
        width:'100%',
        height:'100%',
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    textContainer:{
        padding:5
    },
    textHeader:{
        fontSize:14,
        fontWeight:'bold',
        paddingVertical:3
    },
    textMiddle:{
        fontSize:12,
        fontWeight:'regular',
        paddingVertical:3
    },
    textPrice:{
        fontWeight:'bold',
        fontSize:14
    },
    heart:{
        position:'absolute',
        top:"0.5%",
        right:'3%',
        zIndex:1000,
        borderWidth:0.5,
        width:30,
        height:30,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        boxShadow:'1px',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1, 
        borderRadius:50,
        borderColor:'white'
    }
})