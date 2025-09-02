import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* const Decrementar = props => { */
export default function Decrementar(props) {

    return (
            <TouchableOpacity
                style={[styles.btn, styles.btnSubtrair]}
                onPress={() => props.func(props.valor - 1)}
            >
                <Text style={styles.btnTexto}>props.nome</Text>
            </TouchableOpacity>
    );

}

/* export default Decrementar; */

const styles = StyleSheet.create({
    // Estilização padrão dos botões
    btn: {
        width: 200,
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    // Estilização do botão de incrementar
    btnSomar: {
        backgroundColor: '#08c7e99b',
        borderColor: 'white',
    },
    // Estilização do botão de decrementar
    btnSubtrair: {
        backgroundColor: '#e908089b',
        borderColor: 'black',
    },
    // Estilização do texto dos botões
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});
