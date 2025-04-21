import { Stack } from "expo-router";

export default function RootLayout() {

  return(
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name='SplashSale' options={{headerShown:false}}/>
        <Stack.Screen name='SplashOrder' options={{headerShown:false}}/>
        <Stack.Screen name='Login' options={{headerShown:false}}/>
        <Stack.Screen name='Signup' options={{headerShown:false}}/>
        <Stack.Screen name='ForgetPassword' options={{headerShown:false}}/>
        <Stack.Screen name="GetStarted" options={{headerShown:false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
      </Stack>
    </>
  );
}
