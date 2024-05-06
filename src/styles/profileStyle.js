import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const profileStyle = StyleSheet.create({
  headerProfile: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerProfileBox: {
    width: 350,
    borderRadius: 50,
    backgroundColor: '#16A34A',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 100,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    padding: 5,
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  mainTitle: {
    width: 300,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default profileStyle;