import React from "react";
import { 
    View,
    Text,
    TouchableOpacity
} from "react-native";
import quizzStyle from "../../styles/quizzStyle";
import FooterMenu from "../../components/FooterMenu/footerMenu";

export default function QuizzScreen() {
    return (
        <>
        <View style={quizzStyle.headerQuizz}>
            <Text style={quizzStyle.headerQuizzTitle}>Quizzes</Text>
        </View>
        <View style={quizzStyle.mainQuizz}>
            <Text style={quizzStyle.mainQuizzTitle}>Rules</Text>
            <View style={quizzStyle.mainRulesBox}>
                <View style={quizzStyle.ruleBox}>
                    <Text style={quizzStyle.ruleBoxText}>Right Answers: </Text>
                    <Text style={quizzStyle.ruleBoxValue}>1</Text>
                </View>
                <View style={quizzStyle.ruleBox}>
                    <Text style={quizzStyle.ruleBoxText}>Wrong Answers: </Text>
                    <Text style={[quizzStyle.ruleBoxValue, quizzStyle.ruleBoxValueWrong]}>1</Text>
                </View>
            </View>
        </View>
        <View style={quizzStyle.informationTextBox}>
            <Text style={quizzStyle.informationText}>Get all five questions right in order to complete the quiz.</Text>
            <Text style={quizzStyle.informationText}>Come back tomorrow for a new test!</Text>
            <TouchableOpacity style={quizzStyle.startButton}>
                <Text style={quizzStyle.startButtonText}>Start Quizz</Text>
            </TouchableOpacity>
        </View>
        <FooterMenu />
        </>
    );
};