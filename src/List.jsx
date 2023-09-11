import Rea from "./assets/react.svg"
import { useState } from "react";
import {v4} from "uuid";
import { motion } from "framer-motion";

//import PropTypes from 'prop-types';


function List(){
    const [sonicChars, sChadd] = useState(["Sonic", "Shadow", "Tangle", "Silver", "Amy", "Blaze", "Rouge", "Knuckles", "Tails", "Whisper"]);
    const [sonicCols, sCoadd] = useState(["royalblue", "darkslategray", "lightslategray", "silver", "pink", "plum", "hotpink", "crimson", "orange", "sandybrown"]);

    const iclick = () => {
            let newChar = [...sonicChars];
            newChar.push(v4());
            sChadd(newChar);
            let newCol = [...sonicCols];
            let col = [0,0,0];
            col[0] = getRndInteger(0,255);
            col[1] = getRndInteger(0,255);
            col[2] = getRndInteger(0,255);
            newCol.push(`rgb(${col[0]}, ${col[1]}, ${col[2]})`);
            sCoadd(newCol);
            console.log("metal");
    }

    return(
        <div>
            <h2>Sonic Chars</h2>
            <ul>
                {sonicChars.map((cha) => {
                    return (<motion.li 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20
                        }}
                         key = {cha} className = "sonic-char" style = {myStyle(sonicCols[sonicChars.indexOf(cha)])}>{cha}</motion.li>);
                })}
            </ul>
            <img src={Rea}></img>
            <Button color="red" fontSize={40} text="please work" whenclick={iclick}/>
        </div>
    )
}



function myStyle(col){ //style uses regular js objects, no special jsx or whatever
    return {
        color: "white",
        backgroundColor: col,
        border: `1px solid white`,
        padding: "2px"
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
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