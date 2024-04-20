import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export function Configs() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.container, isEnabled && styles.containerDark]}>
        <Switch onValueChange={toggleSwitch} value={isEnabled}/>
        <View style={styles.containerModeText}>
            <Text style={[styles.textMode, isEnabled && styles.textModeWhite]}>Modo noturno</Text>
        </View>
        <View style={styles.containerContextText}>
            <Text style={styles.textContext}>O modo noturno melhora sua experiência no aplicativo durante a noite, e em telas OLED, te ajuda a economizar bateria.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    containerDark: {
        backgroundColor: "#000000",
    },
    containerModeText: {
        paddingTop: 75,
    },
    containerContextText: {
        paddingTop: 25,
    },
    textMode: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "600",
    },
    textModeWhite: {
        color: "#FFFFFF",
    },
    textContext: {
        color: "#B8B8B8",
        paddingHorizontal: 70,
        textAlign: "center",
    }
});