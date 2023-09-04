import manU from "./assets/manchester-united.svg";
import './Card.css'

export default function Card(props){
  const width = `${732*props.size}px`;
    const height = `${1040*props.size}px`;
  return(
  <div className="card" style={{
    width:width,
    height:height,
    padding:0,
  }} >
    <RawCard {...props}></RawCard>
    <Player size = {props.size}></Player>
    <Logo size = {props.size}></Logo>
  </div>)
}

function Player({size=0.5}){
  const width = `${Math.round(520*size)}px`;
  //const height = `${Math.round(975*size)}px`;
  return(<img src="https://www.footyrenders.com/render/marcus-rashford-69.png" className="player" style={{
    width:width,
    height:"auto",
  }}></img>)
}

function Logo({size=0.5}){
  const width = `${150*size}px`;
  const height = `${150*size}px`;

  return(<img className="logo" src={manU} 
    style={{
    width:width,
    height:height,
  }}
  ></img>
  )
}

function RawCard({size=0.4,textcol="white",layer2col="#ff9955",layer3col="#666666",layer4col="#00ffff",text1="bro",text2="moment"}){
    const width = `${732*size}px`;
    const height = `${1040*size}px`;

    return(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 210 297"
      >
        <path
          d="M.382-.382h209.849v297.764H.382z"
          style={{
            fill: layer2col,
            strokeWidth: 0.264583,
          }}
        />
        <g
          style={{
            fill: layer3col,
          }}
        >
          <path
            d="M136.077 3.822 54.66 37.842l8.027 6.88L5.734 70.714 18.73 293.56l47.78-2.294 34.783-15.671 9.939 13.76 69.95-50.838-3.44-107.409 27.138-69.95z"
            style={{
              fill: layer3col,
              strokeWidth: 0.264583,
            }}
          />
        </g>
        <g
          style={{
            fill: layer4col,
          }}
        >
          <path
            d="m70.332 41.282 53.131-26.757 51.985 49.691zM68.039 46.633 19.876 75.301l150.603-7.645Z"
            style={{
              fill: layer4col,
              strokeWidth: 0.264583,
            }}
            transform="matrix(1.25061 0 0 1.10015 -16.449 -6.806)"
          />
          <path
            d="m19.876 77.595 82.307 173.154 65.238-175.83Z"
            style={{
              fill: layer4col,
              strokeWidth: 0.263561,
            }}
            transform="matrix(1.25061 0 0 1.10015 -16.449 -6.806)"
          />
          <path
            d="m21.405 92.12 12.232 178.123 62.305-19.876Z"
            style={{
              fill: layer4col,
              strokeWidth: 0.264583,
            }}
            transform="matrix(1.25061 0 0 1.10015 -16.449 -6.806)"
          />
        </g>
        <text
          xmlSpace="preserve"
          x={-238.464}
          y={168.624}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "14.1111px",
            fontFamily: "&quot",
            InkscapeFontSpecification: "&quot",
            fill: textcol,
            strokeWidth: 0.264583,
          }}
          transform="rotate(-90)"
        >
          <tspan
            x={-238.464}
            y={168.624}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "14.1111px",
              fontFamily: "&quot",
              InkscapeFontSpecification: "&quot",
              fill: textcol,
              strokeWidth: 0.264583,
            }}
          >
            {text1}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={-236.028}
          y={177.575}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "7.05556px",
            fontFamily: "&quot",
            InkscapeFontSpecification: "&quot",
            fill: textcol,
            strokeWidth: 0.264583,
          }}
          transform="rotate(-90)"
        >
          <tspan
            x={-236.028}
            y={177.575}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "7.05556px",
              fontFamily: "&quot",
              InkscapeFontSpecification: "&quot",
              fill: textcol,
              strokeWidth: 0.264583,
            }}
          >
            {text2}
          </tspan>
        </text>
      </svg>)
}