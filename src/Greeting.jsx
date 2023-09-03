import { useState } from 'react';
import Card from './Card';
import * as htmlToImage from 'html-to-image';
import { download } from 'downloadjs'

export default function Greeting() {
    return (<><h1>&quot;I, Sonic the Hedgehog, will defeat all fakers ever.&quot;</h1><TestList /></>);
  }

function TestList(){

  const [change, setChange] = useState(true);

  let comp = ChangeSVG(change);

  return(
    <div>
      <Card text1="grashmord" text2="from birgimham" layer4col="#bf3973" size={0.4}></Card>
      <div className="sup">Was poppin y&apos;all</div>
      <Save></Save>
      <h1>Test title</h1>
      <ol className="test-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      {comp}
        <ChangeSVG bool={change} />
      <form onSubmit={(e) => {
          setChange(!change)
          e.preventDefault();
        console.log("yeah yeah");
        console.log(change);
      }}>
        <input type="text" />
      </form>
    </div>
  )
}

const saveImage = () => {
  console.log("AAA");
  htmlToImage.toPng(document.getElementById('.card'))
  .then(function (dataUrl) {
    download(dataUrl, 'card.png');
  })
}

function Save(){
  return(<button onClick={saveImage
  }>Save</button>)
}

function ChangeSVG(bool){
  if (bool === true){
    return(
    <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
    )
  }
  else{
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
    );
  }
}

let poy  = 0;
console.log(poy);