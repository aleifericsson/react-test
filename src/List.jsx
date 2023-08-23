import Rea from "./assets/react.svg"
//import PropTypes from 'prop-types';

const sonicChars = ["Sonic", "Shadow", "Tangle", "Silver", "Amy", "Blaze", "Rouge", "Knuckles", "Tails", "Whisper"];
const sonicCols = ["royalblue", "darkslategray", "lightslategray", "silver", "pink", "plum", "hotpink", "crimson", "orange", "sandybrown"];

export default function List(){
    return(
        <div>
            <h2>Sonic Chars</h2>
            <ul>
                {sonicChars.map((cha) => {
                    return (<li key = {cha} className = "sonic-char" style = {myStyle(sonicChars.indexOf(cha))}>{cha}</li>);
                })}
            </ul>
            <img src={Rea}></img>
        </div>
    )
}

function myStyle(index){ //style uses regular js objects, no special jsx or whatever
    return {
        color: "white",
        backgroundColor: sonicCols[index],
        border: `1px solid white`,
        padding: "2px"
    }
}

/* props just doesn't work it seems


function Button({color, fontSize, text = "heehee"}) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + 'px'
    };
  
    return (
      <button style={buttonStyle}>{text}</button>
    )
  }

  
Button.PropTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.number,
    text: PropTypes.string
}


            
            <Button text="Click Me!" color="blue" fontSize={12} />
            < Button text="Don't Click Me!" color="red" fontSize={12} />
            <Button text="Click Me!" color="blue" fontSize={20} />
*/