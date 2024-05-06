import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const profileStyle = StyleSheet.create({
  headerProfile: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerProfileTitleBox: {
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
  headerProfileTitle: {
    padding: 5,
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  profileDataText: {
    width: '100%', 
    paddingLeft: 50, 
    paddingRight: 50, 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  profileStyleLine: {
    borderColor: '#16A34A', 
    borderWidth: 1, 
    borderStartWidth: 350
  },
  achievementsGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default profileStyle;