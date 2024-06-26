import React from "react";
import {
    View,
    Text
} from "react-native";
import resultStyle from "../../styles/resultStyle";
import FooterMenu from "../../components/FooterMenu/footerMenu";

const questions = [
    {
        question: "What is the main goal of sustainability?",
        answers: [
            "1. Maximize natural resource consumption",
            "2. Minimize waste and protect the environment",
            "3. Increase pollution to stimulate economic growth",
            "4. Ignore environmental issues in favor of development"
        ],
        correctAnswer: "2. Minimize waste and protect the environment"
    },
    {
        question: 'What does "carbon footprint" mean?',
        answers: [
            "1. A mark left in the sand",
            "2. The size of a person's shoes",
            "3. The amount of carbon released into the atmosphere due to human activities",
            "4. A unit of measurement for the weight of carbon"
        ],
        correctAnswer: "3. The amount of carbon released into the atmosphere due to human activities"
    },
    {
        question: "Why is recycling important?",
        answers: [
            "1. To increase pollution",
            "2. To reduce the amount of waste in landfills",
            "3. To make products more expensive",
            "4. To encourage excessive consumption"
        ],
        correctAnswer: "2. To reduce the amount of waste in landfills"
    },
    {
        question: "What are renewable energies?",
        answers: [
            "1. Energy that never runs out",
            "2. Energy produced only by plants",
            "3. Energy obtained from resources that regenerate naturally",
            "4. Energy produced from fossil fuels"
        ],
        correctAnswer: "3. Energy obtained from resources that regenerate naturally"
    },
    {
        question: "Why is it important to protect biodiversity?",
        answers: [
            "1. To ensure there is no competition between species",
            "2. To accelerate the process of species extinction",
            "3. To increase the quantity of consumer products available",
            "4. To keep ecosystems healthy and functioning properly"
        ],
        correctAnswer: "4. To keep ecosystems healthy and functioning properly"
    },
]

export default function ResultScreen({ route }) {
    const { correctAnswers, wrongAnswers } = route.params;

    return (
        <>
        <View style={resultStyle.headerResult}>
            <Text style={resultStyle.headerResultTitle}>Quizz Results</Text>
        </View>
        <View style={{padding:50, borderRadius: 10}}>
            <View style={[resultStyle.mainRulesBox]}>
                <View style={resultStyle.ruleBox}>
                    <Text style={resultStyle.ruleBoxText}>Wrong Answers: </Text>
                    <Text style={[resultStyle.ruleBoxValue, resultStyle.ruleBoxValueWrong]}>{wrongAnswers.length}</Text>
                </View>
                <View style={resultStyle.ruleBox}>
                    <Text style={resultStyle.ruleBoxText}>Correct Answers: </Text>
                    <Text style={resultStyle.ruleBoxValue}>{correctAnswers.length}</Text>
                </View>
            </View>
        </View>
        <FooterMenu />
        </>
    );
};