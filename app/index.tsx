import { useEffect, useState } from "react";
import { Text, View,Image,StyleSheet } from "react-native";
import SplashScreen from "./components/SplashScreen";


const image =  require('@/assets/images/splashIcon.png');





export default function Index() {
  
  const [acitve,setActive] = useState(false)

  useEffect(()=>{
    const clear = setInterval(()=>{
      setActive(true)
    },5000)

    return (()=>{
      clearInterval(clear)
    })
  },[])

  return (
   <>
      {
        acitve ? (
          <View>
            <SplashScreen />
          </View>
        ):(
          <View
          style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"row"
          }}
          >
            <View>
              <Image source={image}/>
            </View>
            <Text style={styles.iconText}>Stylish</Text>
          </View>
        )
      }
   </>
    
  );
}


export const styles = StyleSheet.create({
  iconText:{
    fontSize:48,
    color:'#F83758'
  }
})