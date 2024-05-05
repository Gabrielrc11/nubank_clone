import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

export function Cota() {
    const [cota, setCota] = useState(null);

    useEffect(() => {
        const fetchCota = async () => {
            try {
                const response = await axios.get('https://economia.awesomeapi.com.br/json/USD-BRL');
                setCota(response.data[0]);
            } catch (error) {
                console.error('Erro ao obter cotação:', error);
            }
        };
        fetchCota();
    }, []);

    return (
        <View style={styles.container}>
            {cota ? (
                <View>
                    <Text>Cotação atual do dolar: {cota.bid}</Text>
                </View>
            ) : (
                <View>
                    <Text>Carregando...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#820AD1",
        alignItems: "center",
    },
});
