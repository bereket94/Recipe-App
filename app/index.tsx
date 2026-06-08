import { Text, View ,StyleSheet,TextInput} from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
   return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to home screen!</Text>

      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width: 200, height: 200 }}
      />

      <Link href="/about" style={{ color: "white", marginTop: 20 }}>
        Visit About Screen
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    color: "white",
    fontSize: 20
  }
})