import Rea from "./assets/react.svg"
import { useState } from "react";
import {v4} from "uuid";
//import PropTypes from 'prop-types';


const List = () =>{
    const [sonicChars, sChadd] = useState(["Sonic", "Shadow", "Tangle", "Silver", "Amy", "Blaze", "Rouge", "Knuckles", "Tails", "Whisper"]);
    const [sonicCols, sCoadd] = useState(["royalblue", "darkslategray", "lightslategray", "silver", "pink", "plum", "hotpink", "crimson", "orange", "sandybrown"]);


    return(
        <div>
            <h2>Sonic Chars</h2>
            <ul>
                {sonicChars.map((cha) => {
                    return (<li key = {cha} className = "sonic-char" style = {myStyle(sonicCols[sonicChars.indexOf(cha)])}>{cha}</li>);
                })}
            </ul>
            <img src={Rea}></img>
            <Button color="red" fontSize={40} text="please work" whenclick={()=>{ //ignore, doesn't work
                const newChar = addMetalChar(sonicChars)
                sChadd(newChar);
                const newCol = addMetalCol(sonicCols);
                sCoadd(newCol);
                console.log("metal");
                
            }}/>
        </div>
    )
}

const addMetalChar = (char) =>{
    let newChar = char;
    newChar.push(v4());
    return newChar;
}

const addMetalCol = (char) =>{
    let newChar = char;
    newChar.push("rgb(86, 101, 115)");
    return newChar;
}

function myStyle(col){ //style uses regular js objects, no special jsx or whatever
    return {
        color: "white",
        backgroundColor: col,
        border: `1px solid white`,
        padding: "2px"
    }
}


function Button({color, fontSize, text = "heehee", whenclick}) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + 'px'
    };
  
    return (
      <button style={buttonStyle} onClick={whenclick}>{text}</button>
    )
  }
/*
  
Button.PropTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.number,
    text: PropTypes.string
}


            
            <Button text="Click Me!" color="blue" fontSize={12} />
            < Button text="Don't Click Me!" color="red" fontSize={12} />
            <Button text="Click Me!" color="blue" fontSize={20} />
*/

export default List;