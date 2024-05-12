import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const quizzStyle = StyleSheet.create({
  headerQuizz: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerQuizzTitle: {
    padding: 5,
    fontSize: 50,
    color: '#16A34A',
    textAlign: 'center',
  },
});

export default quizzStyle;