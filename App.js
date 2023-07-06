import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

const { height } = Dimensions.get("window");
export default function App() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{ height: height / 2.5 }}
          source={require("./assets/6343845.jpg")}
          resizeMode="contain"
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 60,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: "#1978f2ff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Discover Your Dream Job here
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#333",
              fontWeight: "regular",
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Explore all the existing job roles based or your interest and study
            major
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 50,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#1978f2ff",
              paddingVertical: 20,
              paddingHorizontal: 15,
              width: "48%",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 20,
              paddingHorizontal: 15,
              width: "48%",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#333",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Resister
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    paddingLeft: 30,
    fontSize: 13,
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  mainContainer: {
    height: 200,
    width: "100%",
  },
});
