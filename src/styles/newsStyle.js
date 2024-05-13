import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const newsStyle = StyleSheet.create({
  headerNews: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerNewsTitle: {
    padding: 5,
    fontSize: 50,
    color: '#16A34A',
    textAlign: 'center',
  },
  newsDataText: {
    width: '100%', 
    paddingLeft: 50, 
    paddingRight: 50, 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  newsStyleLine: {
    borderColor: '#444444', 
    borderWidth: 1, 
    borderStartWidth: 350,
    marginHorizontal: 10,
  },
  mainNewsTitle: {
    padding: 5,
    fontSize: 25,
    color: '#097d34',
    textAlign: 'center',
    backgroundColor: '#cae3d3',
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
    borderBottomLeftRadius: 10,

  },
  mainNewsSubtitle: {
    display: 'flex', 
    padding: 5,
    fontSize: 20,
    marginHorizontal: 10,
    color: '#097d34',
  },
  mainNewsText: {
    display: 'flex', 
    alignItems: 'center',
    padding: 10,
    fontSize: 15,
    color: '#000000',
    backgroundColor: '#cae3d3',
    borderColor: '#097d34',
    marginHorizontal: 10,
    borderRadius:10, 

  },
  space: {
    margin: 50,
  }
});

export default newsStyle;