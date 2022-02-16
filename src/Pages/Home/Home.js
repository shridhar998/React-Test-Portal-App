import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Categories from "../../Data/categories";
import "./Home.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({name,setName,fetchQuestions}) => {
    const[category,setCategory]=useState("");
    const[difficulty,setDifficulty]=useState("");
    const[error,setError]=useState(false);

    const history=useHistory();

    const handleSubmit=()=>{
        if(!category || !difficulty || !name){
        setError(true);
        return;
        }
        else{
            setError(false);
            fetchQuestions(category,difficulty);
            history.push('/quiz');   // whenever we press on button and all fields are fill all the info is pushed to route, it uses history hook in react
        }
    };
  return (
    <div className="content">
        <div className="settings">
        <span style={{fontSize:30}}> Enter your details and press Start TEST button to get started</span>
            <div className="settings_select">
                {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                <TextField 
                style={{marginBottom: 25}}
                label="Enter your name" 
                variant="outlined"
                onChange={(e) =>setName(e.target.value)}
                value={name}
                />


                <TextField
                select
                label="Select Category"
                variant="outlined"
                style={{marginBottom:30}}
                onChange={(e) =>setCategory(e.target.value)}
                value={category}
                >
                {Categories.map((cat)=>(
                        <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                select
                label="Select Difficulty"
                variant="outlined"
                onChange={(e) =>setDifficulty(e.target.value)}
                value={difficulty}
                style={{marginBottom:30}}
                >
                <MenuItem key="Easy" value="easy">
                    Easy
                </MenuItem>
                <MenuItem key="Medium" value="medium">
                  Medium
                </MenuItem>
                <MenuItem key="Hard" value="hard">
                  Hard
                </MenuItem>
                </TextField>
                <Button variant="contained" size="large" color="primary"
                onClick={handleSubmit}
                >
                    Start TEST
                </Button>
            </div>
        </div>
        /* <img src="/quizready.jpg" className="banner" alt="quiz img"/> */
    </div>
    
  );
};

export default Home

