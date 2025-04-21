import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:"red"
    }}>

      <Tabs.Screen name="index" options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name='wishlist' options={{
        title:"Wishlist",
        headerShown:true,
        headerTitleAlign:"center",
        headerTintColor:"red",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons size={size} color={color} name={focused ? 'heart-sharp' : 'heart-outline'}/>
        )
      }}/>

      <Tabs.Screen name='cart' options={{
        title:"Cart",
        headerShown:true,
        headerTitleAlign:"center",
        headerTintColor:"red",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'cart-sharp':'cart-outline'} size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name='search' options={{
        title:"Search",
        headerShown:false,
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'search-sharp':'search-outline'} size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name='setting' options={{
        title:"Setting",
        headerShown:false,
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'settings-sharp':'settings-outline'} size={size} color={color}/>
        )
      }}/>
    </Tabs>
  );
}
