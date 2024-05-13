import React from "react";
import {
  View,
  Text,
} from "react-native";
import settingsStyle from "../../styles/settingsStyle";
import FooterMenu from "../../components/FooterMenu/footerMenu";
import DropdownChoice from "../../components/DropDownChoices/dropdownChoice";

export default function SettingsScreen() {
  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Português', value: 'pt' },
  ];
  
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
      <View>
          <View>
            <View>
              <DropdownChoice label="Mode" options={languageOptions} />
            </View>
          </View>
      </View>
      {/* FOOTER */}
      <FooterMenu />
      </View>
      </>
   );
};
