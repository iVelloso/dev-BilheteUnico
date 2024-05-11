import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font'
import { useState } from 'react';
import styles from './styles';


export default function Cadastro({ navigation }) {

    function acessarLogin() {
        navigation.navigate('Login');

    }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [datanascimento, setNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmsenha, setCorfirm] = useState('');


    function validar() {
        let campoNome;
        let campoEmail;
        let campoNascimento;
        let campoSenha;
        let campoConfirm;
        campoNome = nome;
        campoEmail = email;
        campoSenha = senha;
        campoConfirm = confirmsenha;

        if (campoNome === '' || campoEmail === '' || campoNascimento === '' || campoSenha === '' || campoConfirm === '') {
            setValida("O campo está vazio");
        }
    }
    return (
        
        <View style={estilos.container}>
           
            <View style={estilos.texto}>
            <Text>
                Nome
            </Text>
        </View>
            <TextInput
                value={nome}
                onChangeText={(text) => setNome(text)}
                style={estilos.input}
                placeholder="Digite seu nome" />

            <Text style={estilos.texto}>
                E-mail
            </Text>

            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={estilos.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address" />

            <Text style={estilos.texto}>
                Data de nascimento
            </Text>

            <TextInput
                value={datanascimento}
                onChangeText={(text) => setNascimento(text)}
                style={estilos.input}
                placeholder="Digite sua data de nascimento"
                keyboardType="number-pad"
                 />


            <Text style={estilos.texto}>
                Senha
            </Text>

            <TextInput
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={estilos.input}
                placeholder="Digite sua senha"
                secureTextEntry={true} />

            <Text style={estilos.texto}>
                Confirmar senha
            </Text>

            <TextInput
                value={confirmsenha}
                onChangeText={(text) => setCorfirm(text)}
                style={estilos.input}
                placeholder="Confirme sua senha"
                secureTextEntry={true} />

            <TouchableOpacity
                onPress={validar}
                style={estilos.button}>
                <Text style={estilos.textButton}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={acessarLogin}
                style={estilos.button}>
                <Text style={estilos.textButton}>
                    Voltar para o Login
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    texto: {

        textAlign: 'left',
        color: "#020614",
        fontSize: 12,
        
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        width: '80%'
    },
    button: {
        backgroundColor: "#04BF8A",
        paddingHorizontal: 120,
        paddingVertical: 16,
        borderRadius: 40
    },
    textButton: {
        color: "#FFFFFF",
        fontSize: 14,
       
    }
})