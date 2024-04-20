import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from "../../assets/logo.png"
import settings from "../../assets/setting.png"
import mastercard from "../../assets/mastercard.png"
import wallet from "../../assets/Wallet.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"
import dinheiro from "../../assets/dinheiro.png"

export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Image source={settings}/>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View />
                    <Image source={mastercard}/>
                </View>
                <Text style={styles.cardText}>Gabriel Carvalho</Text>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.cardDetailsHeader}>
                    <Text style={styles.cardDetailsHeaderText}>Saldo disponivel</Text>
                    <Image source={wallet}/>
                </View>
                <Text style={styles.cardDetailsText}>22.000,00</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Do que você precisa?</Text>
            <ScrollView style={styles.footerContentScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={styles.footerCard}>
                    <Image source={pix}/>
                    <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={boleto}/>
                    <Text style={styles.footerCardText}>Pagar um boleto</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={dinheiro}/>
                    <Text style={styles.footerCardText}>Fazer um deposito</Text>
                </View>
                <View style={styles.footerCard}>
                    <Image source={pix}/>
                    <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
  },
  content: {
    paddingHorizontal: 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 100,
  },
  card: {
    width: "100%",
    height: 190,
    backgroundColor: "#9500F6",
    borderRadius: 21,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: "space-between",
  },
  cardDetails: {
    width: "100%",
    height: 120,
    backgroundColor: "#9500F6",
    borderRadius: 21,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between"
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardDetailsHeaderText: {
    color: "#FFFFFF",
  },
  cardDetailsText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "600",
  },
  footer: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  footerText: {
    color: "#FFFFFF",
    paddingHorizontal: 20,
    paddingBottom: 30,
    fontWeight: "600",
    fontSize: 14,
  },
  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "#9500F6",
    elevation: 5,
    borderRadius: 21,
    padding: 20,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  footerCardText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
  footerContentScrollView: {
    height: 400,
  },
});