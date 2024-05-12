import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const resultStyle = StyleSheet.create({
  headerResult: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerResultTitle: {
    padding: 5,
    fontSize: 50,
    color: '#16A34A',
    textAlign: 'center',
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
});

export default resultStyle;