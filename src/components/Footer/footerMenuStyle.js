import { StyleSheet } from "react-native";

const footerMenuStyle = StyleSheet.create({
  footerMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: '#F5F5F5',
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
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 15,
    color: '#16A34A',
  },
});

export default footerMenuStyle;