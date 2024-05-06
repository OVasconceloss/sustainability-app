import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const homeStyle = StyleSheet.create({
  headerMain: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerTitle: {
    padding: 5,
    fontSize: 50,
    color: '#16A34A',
    textAlign: 'center',
  },
  mainTitle: {
    width: 300,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default homeStyle;