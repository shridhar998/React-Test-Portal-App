import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
function App() {
    const [questions, setQuestions] = useState();
    const [name, setName] = useState();
    const [score, setScore] = useState(0);
    
    const fetchQuestions = async(category="",difficulty="")=> {
        const { data } =await axios.get(
            `https://opentdb.com/api.php?amount=10${  // Making the API call
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );

        console.log(data);
        setQuestions(data.results);
    };
    //style = {{ backgroundImage: "url(./spot_light.jpg)" }}
    return (
        <BrowserRouter>
            <div className = "app" >  
                <Header/>
                <Switch>
                    <Route path="/" exact>
                    <Home
                    name={name}
                    setName={setName}
                    fetchQuestions={fetchQuestions}
                    />
                    </Route>
                    <Route path="/quiz" exact>
                        <Quiz
                        name={name}
                        score={score}
                        questions={questions}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        />
                    </Route>
                    <Route path='/result' exact>
                    <Result name={name} score={score} />
                    </Route>
                </Switch>
            </div>
                <Footer/>
        </BrowserRouter>
    );
}

export default App;