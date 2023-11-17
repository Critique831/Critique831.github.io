import {useState,useEffect} from 'react';
import './gameL5.css';
import SingleCard from '../components/SingleCard';
import { updateLeaderboard } from '../leaderboardUtils';
import LevelCompletePopup from '../Intermediate';
import '../Intermediate.css';
import {useNavigate } from "react-router-dom";

const cardImages = [
    {"src": "img/css.png", matched: false},
    {"src": "img/google.png", matched: false},
    {"src": "img/html.png", matched: false},
    {"src": "img/js.png", matched: false},
    {"src": "img/c++.png", matched: false},
    {"src": "img/react.png", matched: false},
    {"src": "img/aws.png", matched: false},
    {"src": "img/win11.png", matched: false},
]

function StandardGameL5() {
    const [showPopup, setShowPopup] = useState(false);
    console.log('Rendering StandardGame component');
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
    const [finished, setFinished] = useState(false);
    const [disabled,setDisabled] = useState(false);
    
    useEffect (() => {
        shuffle();
    }, []);

    useEffect(() => {
        if (card1 && card2) {
            setDisabled(true)
            if(card1.src === card2.src){
                setCards(prev => {
                    return prev.map(card => {
                        if(card.src === card1.src){
                            return {...card, matched: true}
                        }else{
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                setTimeout(() => resetTurn(), 1000)
            }
        }
    },[card1, card2])

    useEffect(() => {
        if(cards.length !== 0){
            let flag = 0;
            cards.forEach((card) => {
                if (card.matched) {
                    flag += 1 
                } 
            });
            if(flag === cards.length){
                setFinished(true)
            }else{
                setFinished(false)
            }
        }
    }, [cards]);

    useEffect(() => {
        if(finished){
            console.log("Congratulations!!!!!")
        }
    },[finished])

    //shuffle
    const shuffle = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCard1(null)
        setCard2(null)
        setCards(shuffledCards)
        setTurns(0)
        setFinished(false)
    }

    const handleChoice = (card) => {
        if(card1 !== null) {
            card1.id === card.id ? console.log("Multiple clicks") :setCard2(card)
        } else {
            setCard1(card)
        }
    }

    const resetTurn = () =>{
        setCard1(null)
        setCard2(null)
        setTurns(prev => prev + 1)
        setDisabled(false)
    }

    //Storing good marks to leaderboard
    useEffect(() => {
        if (finished) {
          const level = 5;
          updateLeaderboard(level, turns);
        }
    }, [finished, turns]);

    useEffect(() => {
        if (finished) {
          // Show the level completion popup
          setShowPopup(true);
        }
    }, [finished]);

    // const handleProceed = () => {
    //     // Logic to proceed to the next level
    //     // Update the level, reset game state, etc.
    //     setShowPopup(false); // Hide the popup
    // };

    const handleRestart = () => {
        // Logic to restart the current level...
        shuffle(); // Reshuffle cards for the current level
        setTurns(0); // Reset turns to zero
        setFinished(false); // Reset finished state
        setShowPopup(false); // Hide the popup
    }

    const handleHome = () => {
        navigate('/');
        setShowPopup(false); // Hide the popup
    };

    return(
        <div className='App'>
            <h1>Memory Game</h1>
            <p>
                <button className='menu' onClick={shuffle}>New Game</button>
            </p>
            <div className='card-gridL5'>
                {cards.map(card => (
                    <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card===card1||card===card2||card.matched} disabled={disabled}/>
                ))}
            </div>
            <p>Turns: {turns}</p>

            {showPopup && (
                <LevelCompletePopup
                onProceed={null}
                onRestart={handleRestart}
                onHome={handleHome}
                />
            )}
        </div>
    )
}

export default StandardGameL5;