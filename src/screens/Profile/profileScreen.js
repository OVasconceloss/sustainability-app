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
        <View style={[profileStyle.headerProfileTitleBox, profileStyle.shadow]}>
          <Text style={profileStyle.headerProfileTitle}>Profile</Text>
        </View>
      </View>
      {/* MAIN */}
      <View style={profileStyle.profileDataText}>
        <View>
          <Image
            source={require('../../../assets/images/Home/earthRotation.gif')}
            style={{ width: 100, height: 200 }}
          />
        </View>
        <View>
          <Text style={{padding: 5, fontSize: 20, letterSpacing: 0.5}}>Username: Victor</Text>
          <Text style={{padding: 5, fontSize: 20, letterSpacing: 0.5}}>Here since: 2024</Text>
          <Text style={{padding: 5, fontSize: 20, letterSpacing: 0.5}}>Quizzes Done: 2</Text>
        </View>
      </View>
      <View style={profileStyle.profileStyleLine}></View>
      <Text style={{padding: 25, fontSize: 25}}>Achievements</Text>
      <View>
        <View style={profileStyle.achievementsGrid}>
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
          <AchievementBox />
        </View>
      </View>
      {/* FOOTER */}
      <FooterMenu />
    </View>
    </>
  );
};