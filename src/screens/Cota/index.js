import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import logo from "../../assets/logo.png"
import settings from "../../assets/setting.png"

export function Cota() {
    const [cota, setCota] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchCota = async () => {
            try {
                const response = await axios.get('https://economia.awesomeapi.com.br/json/USD-BRL');
                const cotaRound = parseFloat(response.data[0].bid).toFixed(2);
                setCota(cotaRound);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCota();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={logo}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Configs')}>
                    <Image source={settings}/>
                </TouchableOpacity>
            </View>
            {cota ? (
                <View>
                    <Text style={styles.cotaText}>Cotação atual do dólar:</Text>
                    <Text style={styles.cotaText}>R$ {cota}</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.cotaText}>Carregando...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#820AD1",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 40,
        paddingBottom: 250,
        paddingHorizontal: 30,
      },
    cotaText: {
        color: "#FFFFFF",
        fontSize: 34,
        fontWeight: "600",
        textAlign: "center",
    },
});