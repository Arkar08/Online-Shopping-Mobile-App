import { ScrollView, StyleSheet, View } from "react-native";
import Input from "../components/Input";
import ProductCard from "../components/productCard";


const searchImage = require("@/assets/images/search.png")
const voice = require("@/assets/images/voice.png")

export default function search(){
    return (
        <View style={styles.wishlistContainer}>
            <View style={styles.searchContainer}>
                <Input placeholder="Search Any Products" eyeImage={voice} image={searchImage}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>
                <View style={styles.cardContainer}>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                    <ProductCard text='all'/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wishlistContainer:{
        padding:10,
        flex:1
    },
    searchContainer:{
        marginTop:10
    },
    cardContainer:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        width:'100%',
        gap:20,
        marginTop:20,
        justifyContent:"center",
        alignItems:'center',
        padding:5
    }
})