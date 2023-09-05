import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import Card from './Card';
import html2canvas from 'html2canvas';
import manC from './assets/manchester-city-fc-logo.png'


export default function Cards(){
    return(<>

        <Card text1="grashmord" text2="from birgimham" layer4col="#bf3973" size={0.4}></Card>
        <div className="sup">Was poppin y&apos;all</div>
        <Save></Save>
        <Crop></Crop>
        <button onClick={doCrop}>Do crop</button>
    </>)
}

const saveImage = () => {
    console.log("sav");
    html2canvas(document.querySelector(".card")).then(canvas => {
      document.body.appendChild(canvas)
  });
  }
  
function Save(){
    return(<button onClick={saveImage
    }>Save</button>)
}
  
function Crop() {
    return(
    <div>
        <img id="image" src={manC} style={{
            display: "block",
            maxWidth: "100%",
            }}></ img>
      </div>)
}

const doCrop = () => {
    
const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9, //research proper one first
  crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  },
});
console.log(cropper);
//order: (hidden) init variables for all event details
// then: do crop button to open the crop menu
// then:  save crop button to modify images
}