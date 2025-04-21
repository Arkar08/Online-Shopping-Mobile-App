import { Image, StyleSheet, Text, View } from "react-native";

const menuImage = require('@/assets/images/Ellipse 4.png')

export default function MenuList(){

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={menuImage} />
            </View>
            <Text style={styles.menuText}>Beauty</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    imageContainer:{
        width:80,
        height:60,
        borderRadius:50
    },
    menuText:{
        padding:5
    }
})