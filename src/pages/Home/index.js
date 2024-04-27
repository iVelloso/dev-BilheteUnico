import { View, Text } from "react-native";

export default function Login({ route, navigation }){

    const { eml } = route.params;
    
    return(
        <View>
            <Text>
               BEM VINDO!!!!!

            </Text>
            <Text>
                EMAIL: {eml}
                
            </Text>
        </View>
    );
}