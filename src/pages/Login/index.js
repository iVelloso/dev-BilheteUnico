import { useState } from 'react';
import styles from './styles';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {

    function acessarCadastro() {
        navigation.navigate('Cadastro');

    }
    function acessHome() {
        navigation.navigate('Home',
            { eml: email }
        );
    }
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [validacao, setValida] = useState('');


    function validar() {
        let campoEmail;
        let campoSenha;
        campoEmail = email;
        campoSenha = senha;

        if (campoEmail === '' || campoSenha === '') {
            setValida("O campo está vazio");
        } else {
            acessHome();
        }

    }

    return (

        <View style={estilos.container}>
            <Text style={estilos.titulo}>
                Sua sorte começa aqui!
            </Text>
            <View style={estilos.texto}>
                <Text>
                    E-mail
                </Text>
            </View>

            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={estilos.input}
                placeholder="Digite seu e-mail" />

            <Text style={estilos.texto}>
                Senha
            </Text>
            <TextInput
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={estilos.input}
                placeholder="Digite sua senha" secureTextEntry={true} />
            <Text>{validacao}</Text>

            <View style={estilos.buttons}>
                <TouchableOpacity
                    onPress={validar}
                    style={estilos.button}>
                    <Text style={estilos.textButton}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={acessarCadastro}
                    style={estilos.buttonCad}>
                    <Text style={estilos.textButtonCad}>
                        Casdastre-se
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    texto: {
        gap: 3,
        color: "#020614",
        fontSize: 12,

    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 4,
        width: '80%',
        backgroundColor: '#F7F7F7'
    },
    button: {

        alignItems: 'center',
        backgroundColor: "#04BF8A",
        paddingHorizontal: 125,
        paddingVertical: 8,
        borderRadius: 40,
        marginTop: 15,
    },
    buttonCad: {
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 100,
        paddingVertical: 8,
        borderRadius: 40,
        marginTop: 15,
    },
    buttons: {
        flexDirection: 'column',
        gap: 8,
        height: 36
    },
    textButton: {
        fontWeight: 'bold',
        color: "#FFFFFF",
        fontSize: 16,
    },
    textButtonCad: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 16,
        
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 120,
    }

});