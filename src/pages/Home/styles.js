import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    texto: {
        color: "#020614",
        fontSize: 12,
        fontFamily: 'Poppins-Light'
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        width: '80%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#04BF8A",
        paddingHorizontal: 125,
        paddingVertical: 8,
        borderRadius: 40,
    },
    buttons: {
        flexDirection: 'column',
        gap: 8,
        height: 36
    },
    textButton: {
       
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: 'Poppins-Light'
    },
    titulo: {
        fontSize: 22,
    
        paddingBottom: 120,
    }

});