import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import homeStyle from "../../styles/homeStyle";
import FooterMenu from "../../components/Footer/footerMenu";

export default function HomeScreen() {
  return (
    <>
    <View style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#F5F7F8'}}>
      {/* HEADER */}
      <View style={homeStyle.headerMain}>
        <View style={[homeStyle.headerTitleBox, homeStyle.shadow]}>
          <Text style={homeStyle.headerTitle}>Earth</Text>
        </View>
      </View>
      {/* MAIN */}
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Image 
          source={require('../../../assets/images/Home/earthRotation.gif')}
          style={{ width: 500, height: 500 }}
        />
        <Text style={homeStyle.mainTitle}>One planet, one shot: choose sustainability!</Text>
      </View>
      {/* MENU FOOTER */}
      <FooterMenu />
    </View>
    </>
  );
};