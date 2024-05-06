import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const settingsStyle = StyleSheet.create({
  headerSettings: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerSettingsTitle: {
    padding: 5,
    fontSize: 50,
    color: '#16A34A',
    textAlign: 'center',
  },
  settingsDataText: {
    width: '100%', 
    paddingLeft: 50, 
    paddingRight: 50, 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  settingsStyleLine: {
    borderColor: '#16A34A', 
    borderWidth: 1, 
    borderStartWidth: 350
  },
});

export default settingsStyle;