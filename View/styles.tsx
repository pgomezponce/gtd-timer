import { StyleSheet } from "react-native"
import { Appearance } from "react-native-appearance";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const colorScheme = Appearance.getColorScheme();


export const gtd_stylesheet = StyleSheet.create({
    container:{
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center',
    },
    textCenter:{
        textAlign:'center',
        textAlignVertical:'center',
        color: colorScheme === 'dark' ? DarkTheme.colors.text : DefaultTheme.colors.text 
    },

    formContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    upperPart:{
        justifyContent:'center',
        alignItems:'center'
    }
});

