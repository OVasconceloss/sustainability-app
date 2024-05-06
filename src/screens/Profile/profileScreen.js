import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import profileStyle from "../../styles/profileStyle";
import FooterMenu from "../../components/Footer/footerMenu";
import AchievementBox from "../../components/Achievements/achievement";

export default function ProfileScreen() {
  return (
    <>
    <View style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#F5F7F8'}}>
      {/* HEADER */}
      <View style={profileStyle.headerProfile}>
        <View style={[profileStyle.headerProfileBox, profileStyle.shadow]}>
          <Text style={profileStyle.headerTitle}>Profile</Text>
        </View>
      </View>
      {/* MAIN */}
      <View style={{width: '100%', paddingLeft: 50, paddingRight: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          <Image
            source={require('../../../assets/images/Home/earthRotation.gif')}
            style={{ width: 100, height: 200 }}
          />
        </View>
        <View>
          <Text>Username: Victor</Text>
          <Text>Here since: 2024</Text>
          <Text>Quizzes Dones: 2</Text>
        </View>
      </View>
      <View style={{borderColor: '#16A34A', borderWidth: 1, borderStartWidth: 350}}></View>
      <View>
        <Text style={{padding: 25, fontSize: 25}}>Achievements</Text>
        <View>
          <AchievementBox/>
        </View>
      </View>
      {/* FOOTER */}
      <FooterMenu />
    </View>
    </>
  );
};