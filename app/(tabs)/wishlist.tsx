import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ProductCard from "../components/productCard";


const search = require("@/assets/images/search.png")
const voice = require("@/assets/images/voice.png")

export default function wishlist(){
    return (
        <View style={styles.wishlistContainer}>
            <View style={styles.searchContainer}>
                <Input placeholder="Search Any Products" eyeImage={voice} image={search}/>
            </View>
            <View style={styles.listContainer}>
                <View>
                    <Text style={styles.listText}>52,082+ Items</Text>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.box}>
                        <Text>Sort</Text>
                        <FontAwesome name="sort" size={24} color="black" />
                    </View>
                    <View style={styles.box}>
                        <Text>Filter</Text>
                        <FontAwesome name="filter" size={24} color="black" />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>
                <View style={styles.cardContainer}>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
                    <ProductCard text='wishlist'/>
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
    listContainer:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:'row',
        marginTop:20
    },
    listText:{
        fontSize:20,
        fontWeight:'bold'
    },
    boxContainer:{
        display:"flex",
        justifyContent:"center",
        flexDirection:'row',
        gap:10
    },
    box:{
        padding:8,
        paddingHorizontal:14,
        borderRadius:10,
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1, 
        borderWidth:0.5
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