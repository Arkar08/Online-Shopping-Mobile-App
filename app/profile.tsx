import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
import { useRouter } from "expo-router";


const avator = require("@/assets/images/avator.png")

export default function profile(){

    const router = useRouter()

    const save = ()=>{
        router.replace("/(tabs)")
    }

    return(
        <View style={styles.profileContainer}>
            <View style={styles.profile}>
                <View style={styles.profileList}>
                    <View style={styles.avatorContainer}>
                        <Image source={avator} style={styles.avator}/>
                    </View>
                    <View style={styles.editIcon}>
                        <MaterialIcons name="mode-edit-outline" size={18} color="white" />
                    </View>
                </View>
            </View>
            <ScrollView style={{padding:10,marginTop:10}} showsVerticalScrollIndicator={false}>
                <View style={styles.personal}>
                    <Text style={styles.personalText}>
                        Personal Details
                    </Text>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={{color: 'black', fontWeight: 'semibold', fontSize: 15, marginBottom: 10}}>Email Address</Text>
                            <TextInput placeholder='Email' style={styles.inputBox}/>
                        </View>
                        <View>
                            <Text style={{color: 'black', fontWeight: 'semibold', fontSize: 15, marginBottom: 10}}>Password</Text>
                            <TextInput placeholder='Password' style={styles.inputBox}/>
                        </View>
                        <View>
                            <Text style={styles.change}>Change Password</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.personal}>
                    <Text style={styles.personalText}>
                        Buisness Address Details
                    </Text>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={{color: 'black', fontWeight: 'semibold', fontSize: 15, marginBottom: 10}}>Address</Text>
                            <TextInput placeholder='Address' style={styles.inputBox}/>
                        </View>
                        <View>
                            <Text style={{color: 'black', fontWeight: 'semibold', fontSize: 15, marginBottom: 10}}>City</Text>
                            <TextInput placeholder='City' style={styles.inputBox}/>
                        </View>
                        <View>
                            <Text style={{color: 'black', fontWeight: 'semibold', fontSize: 15, marginBottom: 10}}>State</Text>
                            <View style={styles.select}>
                                <RNPickerSelect 
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                                    style={{
                                        // inputIOS: {
                                        //     padding: 15,
                                        //     borderWidth: 1,
                                        //     borderRadius: 5,
                                        //     color: 'black',
                                        //     marginBottom: 15,
                                        // },
                                        // inputAndroid: {
                                        //     padding: 15,
                                        //     borderWidth: 1,
                                        //     borderRadius: 5,
                                        //     color: 'black',
                                        //     marginBottom: 15,
                                        // },
                                        placeholder: {
                                            color: 'gray',
                                        },
                                        inputWeb:{
                                            padding:15,
                                            borderWidth:0.2,
                                            borderRadius:5
                                        }
                                    }}
                                    placeholder={{ label: 'Select a State...', value: '' }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{color: 'black', fontWeight: 'semibold', fontSize: 15, marginBottom: 10}}>Township</Text>
                            <View style={styles.select}>
                                <RNPickerSelect 
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                                    style={{
                                        // inputIOS: {
                                        //     padding: 15,
                                        //     borderWidth: 1,
                                        //     borderRadius: 5,
                                        //     color: 'black',
                                        //     marginBottom: 15,
                                        // },
                                        // inputAndroid: {
                                        //     padding: 15,
                                        //     borderWidth: 1,
                                        //     borderRadius: 5,
                                        //     color: 'black',
                                        //     marginBottom: 15,
                                        // },
                                        placeholder: {
                                            color: 'gray',
                                        },
                                        inputWeb:{
                                            padding:15,
                                            borderWidth:0.2,
                                            borderRadius:5
                                        }
                                    }}
                                    placeholder={{ label: 'Select a Township...', value: '' }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.press} onPress={save}>
                        <Text style={styles.pressText}>Save</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        padding:10
    },
    profile:{
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    profileList:{
        position:'relative'
    },
    avatorContainer:{
        width:100,
        height:100,
        borderRadius:50,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1, 
    },
    avator:{
        width:'100%',
        height:'100%',
        objectFit:'cover'
    },
    editIcon:{
        width:30,
        height:30,
        backgroundColor:"#4392F9",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        position:'absolute',
        bottom:'3%',
        right:'0%',
        borderWidth:2,
        borderColor:'white'
    },
    personal:{
        marginTop:10
    },
    personalText:{
        fontSize:18,
        fontWeight:'bold'
    },
    inputContainer:{
        display:"flex",
        gap:15,
        marginTop:'5%',
        paddingBottom:20,
        borderBottomWidth:1
    },
    inputBox:{
        padding:15,
        borderWidth:0.2,
        borderRadius:5
    },
    change:{
        textAlign:'right',
        color:'red',
        textDecorationLine:"underline"
    },
    press:{
        padding:8,
        backgroundColor:'red',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:20
    },
    pressText:{
        color:'white',
        fontSize:18
    },
    select:{
        borderWidth:0.2,
        borderRadius:5
    }
})