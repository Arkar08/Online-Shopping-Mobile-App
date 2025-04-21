import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import MenuList from "../components/menuList";

const menuImage = require("@/assets/images/menu.png")
const avator = require("@/assets/images/avator.png")
const logo = require('@/assets/images/logo.png')
const search = require("@/assets/images/search.png")
const voice = require("@/assets/images/voice.png")


export default function index(){
    return (
        <View style={styles.homeContainer}>
            <View style={styles.header}>
                <Image source={menuImage}/>
                <View style={styles.logoContainer}>
                    <Image source={logo}/>
                    <Text style={styles.logoText}>Stylish</Text>
                </View>
                <View>
                    <Image source={avator}/>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <Input placeholder="Search Any Products" eyeImage={voice} image={search}/>
            </View>
            <View style={styles.menuContainer}>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    homeContainer:{
        padding:10,
        flex:1
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    logoContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    logoText:{
        paddingLeft:10,
        fontSize:18,
        fontWeight:'bold',
        color:"#4392F9"
    },
    searchContainer:{
        marginTop:20
    },
    menuContainer:{
        marginTop:20,
        display:"flex",
        flexDirection:'row',
        gap:20,
        height:100
    }
})