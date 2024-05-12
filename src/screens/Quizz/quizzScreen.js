import React from "react";
import { 
    View,
    Text
} from "react-native";
import quizzStyle from "../../styles/quizzStyle";

export default function QuizzScreen() {
    return (
        <>
        <View style={quizzStyle.headerQuizz}>
            <Text style={quizzStyle.headerQuizzTitle}>Quizzes</Text>
        </View>
        <View>
            <Text>Rules</Text>
            <View>
                <View>
                    <Text>Right Answers:</Text>
                    <Text>1</Text>
                </View>
                <View>
                    <Text>Wrong Answers:</Text>
                    <Text>1</Text>
                </View>
            </View>
        </View>
        <View>
            <Text>Get all five questions right in order to complete the quiz.</Text>
            <Text>Come back tomorrow for a new test!</Text>
        </View>
        </>
    );
};