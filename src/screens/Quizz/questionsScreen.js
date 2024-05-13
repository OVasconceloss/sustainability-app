import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ProgressBarAndroid
} from "react-native";
import questionStyle from "../../styles/quetionsStyle";
import { useNavigation } from "@react-navigation/native";

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

export default function QuestionsScreen() {
    const navigation = useNavigation();

    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleAnswer = (answer) => {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestion].correctAnswer) {
        setCorrectAnswers([...correctAnswers, currentQuestion]);
      } else {
        setWrongAnswers([...wrongAnswers, currentQuestion]);
      }
      setTimeout(handleNextQuestion, 500);
    };
  
    const handleNextQuestion = () => {
      if (currentQuestion === questions.length - 1) {
        navigation.navigate("Result", {correctAnswers, wrongAnswers});
      } else {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedAnswer(null);
      }
    };

    return (
        <View>
          <View style={questionStyle.headerQuestion}>
            <Text style={questionStyle.headerQuestionTitle}>Quizz</Text>
          </View>
          <View style={{ marginTop: 50, display: "flex", alignItems: "center" }}>
            <Text style={questionStyle.questionText}>
              {questions[currentQuestion].question}
            </Text>
            {questions[currentQuestion].answers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswer(answer)}
                style={{
                  padding: 15,
                  width: 300,
                  height: 70,
                  display: 'flex',
                  justifyContent: 'center',
                  marginVertical: 10,
                  borderRadius: 9,
                  backgroundColor:
                    answer === selectedAnswer
                      ? answer === questions[currentQuestion].correctAnswer
                        ? "green"
                        : "red"
                      : "white"
                }}
              >
                <Text>{answer}</Text>
              </TouchableOpacity>
            ))}
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={currentQuestion / (questions.length - 1)}
              style={{ width: "80%", marginTop: 20, borderColor: "#16A34A", color: "#16A34A" }}
            />
          </View>
          <TouchableOpacity style={questionStyle.quitQuizButton} onPress={() => navigation.navigate("Home")}>
            <Text style={questionStyle.quitButtonText}>Quit the Quiz</Text>
          </TouchableOpacity>
        </View>
      );
};