import React from "react";
import {
  View,
  Text,
} from "react-native";
import settingsStyle from "../../styles/settingsStyle";
import FooterMenu from "../../components/FooterMenu/footerMenu";
import DropdownChoice from "../../components/DropDownChoices/dropdownChoice";

export default function SettingsScreen() {
  return(
    <>
    <View style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#F5F7F8'}}>
      {/* HEADER */}
      <View style={settingsStyle.headerSettings}>
        <View style={[settingsStyle.headerSettingsTitle]}>
          <Text style={settingsStyle.headerSettingsTitle}>Settings</Text>
        </View>
      </View>
      {/* MAIN */}
      <View style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{display: 'flex', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 40}}>Credits</Text>
            <View style={{display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 25, marginTop: 20}}>João Calixto</Text>
              <Text style={{fontSize: 25, marginTop: 20}}>Hugo Calado</Text>
              <Text style={{fontSize: 25, marginTop: 20}}>Daryna Novytska</Text>
              <Text style={{fontSize: 25, marginTop: 20}}>Victor Vasconcelos</Text>
            </View>
          </View>
          <View style={{display: 'flex', marginTop: 40, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 35}}>School Information</Text>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 25, marginTop: 20}}>2ºK | English | 2024</Text>
              <Text style={{fontSize: 25, marginTop: 20}}>Escola Secundária de Santo André</Text>
            </View>
          </View>
      </View>
      {/* FOOTER */}
      <FooterMenu />
      </View>
      </>
   );
};
