import { useEffect,useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Question from "../../components/Question/Question" ;
const Quiz=({ name,score,questions,setQuestions,setScore})=>{
    const [options,setOptions]=useState();
    const [currQues,setCurrQues]=useState(0);

    useEffect(() => {
        console.log(questions);

        setOptions(
            questions &&
                handleShuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answers,  // ... is "spread" operator it is going to spread inside of it as there are 3 incorrect answers, so all of them are going to appear
                ])
            );
      },[currQues, questions]);
      console.log(options);

      const handleShuffle=(optionss) => {
          return optionss.sort(()=>Math.random()-0.5); // Shuffles all elements int the array
      };
    return <div className="quiz">
        <span className="subtitle">
            Welcome, {name}
        </span>
        {
            questions ? (
            <>
                <div className="quizInfo">
                    <span>{questions[currQues].category}</span>
                    <span>Score:{score}</span>
                </div>
                <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
                />

            </>
            
            ): (
            <CircularProgress                 // loader UI graphics from material UI
            style={{margin:100}}
            color="inherit"
            size={150}
            thickness={1}
            />  
            )}
    </div>
};
export default Quiz;