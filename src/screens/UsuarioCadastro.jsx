import { View } from "react-native"
import { Text,Button, TextInput } from "react-native-paper"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase"
import styles from "../config/styles"


export default function UsuarioCadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")

      async function handleRegister() {
        const docRef = await addDoc(
            collection(db, "usuarios"),
            {
                nome: nome,
                email: email,
                endereco: endereco,
                numero: numero,
            }
            ).then((docRef) => {
                console.log("Id do usuário: ", docRef.id);
                setNome('');
            });
        }

        return (
        <View style={styles.container}>
            <Text>Cadastro do Usuário</Text>
            <TextInput
                label="Nome"
                mode="outlined"
                value={nome}
                onChangeText={setNome}
                />
            <TextInput
                label="Email"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                />
            <TextInput
                label="Endereço"
                mode="outlined"
                value={endereco}
                onChangeText={setEndereco}
                />
            <TextInput
                keyboardType="numeric"
                label="Fone"
                mode="outlined"
                value={numero}
                onChangeText={setNumero}
                />
            <Button
                mode="contained"
                onPress={handleRegister}
                >Cadastrar Usuário </Button>
        </View>
    )
}