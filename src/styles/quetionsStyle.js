import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const questionStyle = StyleSheet.create({
    headerQuestion: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: statusBarHeight,
      },
      headerQuestionTitle: {
        padding: 5,
        fontSize: 50,
        color: '#16A34A',
        textAlign: 'center',
      },
      questionText: {
        padding: 10,
        marginBottom: 15,
        fontSize: 20,
        textAlign: 'center'
      }
});

export default questionStyle;