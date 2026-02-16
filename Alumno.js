import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Alumno(props) {

    const [mostrar, setMostrar] = useState(false);

    const toggle = () => {
        setMostrar(!mostrar);
    };

    return (
        <View style={[styles.container, props.style]}>

            <View style={styles.fila}>

                <Image
                    source={{ uri: 'https://humornama.com/wp-content/uploads/2020/08/Leonardo-DiCaprio-laughing-meme-template-of-Django-Unchained-1024x1024.jpg' }}
                    style={styles.imagen}
                />

                <Text style={styles.nombre}>{props.nombre}</Text>

                <TouchableOpacity style={styles.boton} onPress={toggle}>
                    <Text style={styles.textoBoton}>
                        {mostrar ? "Ocultar" : "Ver"}
                    </Text>
                </TouchableOpacity>

            </View>

            {mostrar && (
                <View style={styles.cuadroMatricula}>
                    <Text style={styles.matricula}>
                        Matrícula: {props.matricula}
                    </Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'rgb(24, 140, 194)',
        borderRadius: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'rgb(3, 4, 56)',
    },
    nombre: {
        fontSize: 16,
        color: '#e9efe2c6',
        flex: 1, 
    },
    matricula: {
        fontSize: 16,
        color: '#e9efe2c6',
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagen: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    boton: {
        backgroundColor: 'rgb(13, 14, 104)',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    textoBoton: {
        color: 'white',
        fontSize: 12,
    },
    cuadroMatricula: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'rgba(6, 12, 63, 0.2)',
        borderRadius: 10,
    },
});
