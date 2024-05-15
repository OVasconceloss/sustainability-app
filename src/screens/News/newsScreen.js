import React from "react";
import {
  View,
  Text,
  Image,
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
        <Text style={{padding: 10, fontSize: 30, textAlign: 'center'}}>General Content</Text>
        <Image source={require('../../../assets/images/News/content_image_1.jpg')} resizeMode="contain" style={{width: 300, height: 300, margin: 'auto', aspectRatio: 1, borderRadius: 10}} />
        <Text style={{padding: 20, fontSize: 18, textAlign: 'justify'}}>
          Sustainability is the ability to meet our needs in the present without compromising the ability
          of future generations to meet their own needs. Historically, the concept of sustainability is linked to
          the struggle for social justice, conservationism, internationalism, and other movements of the past. At the end 
          of the 20th century, these ideas culminated in the so-called "sustainable development".
        </Text>
        <Image source={require('../../../assets/images/News/image_content_2.png')} resizeMode="contain" style={{width: 300, height: 300, margin: 'auto', aspectRatio: 1, borderRadius: 10}} />
        <Text style={{padding: 20, fontSize: 18, textAlign: 'justify'}}>
          Why is this so? Because it is a growing demand from their various stakeholders - customers, investors, regulators and employees - 
          and because it contributes to their operational efficiency, risk management and positive differentiation from competitors, among other stakeholders.
          The rapid depletion of natural resources, the impacts that human activity has on ecosystems and the biosphere, the high levels of social 
          inequality and poverty we face, and the lack of ethics in corporate management are all enemies of a sustainable development model, capable 
          of guaranteeing future generations the opportunities and quality of life that current generations (still) enjoy.
        </Text>
        <View style={[newsStyle.newsStyleLine]}></View>
        <Text style={[newsStyle.mainNewsTitle]}>Focus on Net-Zero Emissions</Text>
        <View style={{marginVertical: 20}}>
          <Text style={[newsStyle.mainNewsSubtitle]}>Goal</Text>
          <Text style={[newsStyle.mainNewsText]}>
            Achieving net-zero emissions means balancing the amount of greenhouse gases released into the atmosphere with the amount removed. 
            This typically involves reducing emissions significantly and offsetting any remaining emissions through measures like carbon 
            capture and storage (CCS) or tree planting.
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={[newsStyle.mainNewsSubtitle]}>Significance</Text>
          <Text style={[newsStyle.mainNewsText]}>
            Reaching net-zero emissions by 2050 is a critical target set by the Paris Agreement to limit global warming to well below 2 
            degrees Celsius, ideally 1.5 degrees Celsius, compared to pre-industrial levels. This helps prevent the worst impacts of 
            climate change.
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={[newsStyle.mainNewsSubtitle]}>Challenges</Text>
          <Text style={[newsStyle.mainNewsText]}>
            Shifting to a net-zero economy requires significant transformations in various sectors. This includes transitioning from 
            fossil fuels to renewable energy sources like solar and wind power, electrifying transportation, and developing cleaner 
            industrial processes.
          </Text>
        </View>
        <View style={[newsStyle.space]}></View>
      </View>
      </ScrollView>
      {/* FOOTER */}
      <FooterMenu />
      </View>
      </>
   );
};
