import { StyleSheet, View, TextInput } from 'react-native';

export function EditName() {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input}>

        </TextInput>
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
    input: {
        borderWidth: 1,
        borderRadius: 21,
        paddingHorizontal: 100,
        paddingVertical: 10,
        fontSize: 24,
      },
});