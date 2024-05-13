import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import newsStyle from "../../styles/newsStyle";
import FooterMenu from "../../components/FooterMenu/footerMenu";

export default function NewsScreen() {
  
  return(
    <>
    <View style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#F5F7F8'}}>
      {/* HEADER */}
      <View style={newsStyle.headerNews}>
        <View style={[newsStyle.headerNewsTitle]}>
          <Text style={newsStyle.headerNewsTitle}>News</Text>
        </View>
      </View>

      {/* MAIN */}
      <ScrollView>
        <View>
        <View style={[newsStyle.newsStyleLine]}></View>
        <Text style={[newsStyle.mainNewsTitle]}>Focus on Net-Zero Emissions</Text>
        <Text style={[newsStyle.mainNewsSubtitle]}>
            Goal
        </Text>
        <Text style={[newsStyle.mainNewsText]}>
            Achieving net-zero emissions means balancing the amount of greenhouse gases released into the atmosphere with the amount removed. 
            This typically involves reducing emissions significantly and offsetting any remaining emissions through measures like carbon 
            capture and storage (CCS) or tree planting.
        </Text>
        <Text style={[newsStyle.mainNewsSubtitle]}>
            Significance
        </Text>
        <Text style={[newsStyle.mainNewsText]}>
            Reaching net-zero emissions by 2050 is a critical target set by the Paris Agreement to limit global warming to well below 2 
            degrees Celsius, ideally 1.5 degrees Celsius, compared to pre-industrial levels. This helps prevent the worst impacts of 
            climate change.
        </Text>
        <Text style={[newsStyle.mainNewsSubtitle]}>
            Challenges
        </Text>
        <Text style={[newsStyle.mainNewsText]}>
            Shifting to a net-zero economy requires significant transformations in various sectors. This includes transitioning from 
            fossil fuels to renewable energy sources like solar and wind power, electrifying transportation, and developing cleaner 
            industrial processes.
        </Text>
        <Text style={[newsStyle.mainNewsSubtitle]}>
            Challenges
        </Text>
        <Text style={[newsStyle.mainNewsText]}>
            Shifting to a net-zero economy requires significant transformations in various sectors. This includes transitioning from 
            fossil fuels to renewable energy sources like solar and wind power, electrifying transportation, and developing cleaner 
            industrial processes.
        </Text>
        <View style={[newsStyle.space]}></View>
      </View>
      </ScrollView>
      

      {/* FOOTER */}
      <FooterMenu />
      </View>
      </>
   );
};
