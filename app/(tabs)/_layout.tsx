import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:"red"
    }}>

      <Tabs.Screen name="index" options={{
        title:"Home",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name='wishlist' options={{
        title:"Wishlist",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons size={size} color={color} name={focused ? 'heart-sharp' : 'heart-outline'}/>
        )
      }}/>

      <Tabs.Screen name='cart' options={{
        title:"Cart",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'cart-sharp':'cart-outline'} size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name='search' options={{
        title:"Search",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'search-sharp':'search-outline'} size={size} color={color}/>
        )
      }}/>

      <Tabs.Screen name='setting' options={{
        title:"Setting",
        tabBarIcon:({size,color,focused})=>(
          <Ionicons name={focused ? 'settings-sharp':'settings-outline'} size={size} color={color}/>
        )
      }}/>
    </Tabs>
  );
}
