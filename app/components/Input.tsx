import { Image, ImageSourcePropType, StyleSheet, TextInput, View } from "react-native";

type InputProps = {
    placeholder:string,
    eyeImage:ImageSourcePropType | '' ,
    image:ImageSourcePropType,
}



export default function Input({placeholder,eyeImage,image}:InputProps){
    return(
        <View style={styles.imageContainer}>
            <Image source={image} style={styles.image}/>
            <TextInput placeholder={placeholder} style={styles.inputBox}/>
            {
                eyeImage && (
                    <Image source={eyeImage} style={styles.eyeImage}/>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        position:'relative'
    },
    inputBox:{
        padding:15,
        paddingLeft:40,
        borderWidth:0.4,
        borderRadius:5
    },
    image:{
        position:'absolute',
        top:'30%',
        left:'3%'
    },
    eyeImage:{
        position:'absolute',
        right:'3%',
        top:'30%'
    }
})