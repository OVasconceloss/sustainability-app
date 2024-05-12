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
  mainQuizz: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    marginTop: 25,
  },
  mainQuizzTitle: {
    fontSize: 35,
    padding: 10
  },
  mainRulesBox: {
    marginTop: 10,
  },
  ruleBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  ruleBoxText: {
    fontSize: 20
  },
  ruleBoxValue: {
    width: 50,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: "#FFFFFF",
    backgroundColor: "#16A34A",
    borderRadius: 10,
  },
  ruleBoxValueWrong: {
    backgroundColor: "#ED4337",
  },
  informationTextBox: {
    width: "90%",
    margin: 'auto',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  informationText: {
    fontSize: 20,
    textAlign: 'center'
  },
  startButton: {
    width: 300,
    margin: 'auto',
    padding: 15,
    marginTop: 30,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: "#282828",
  },
  startButtonText: {
    fontSize: 25,
    textAlign: 'center',
    color: "#FFFFFF",
  }
});

export default quizzStyle;