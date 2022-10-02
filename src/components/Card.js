import { propTypes } from "react-bootstrap/esm/Image";

export default function Card(props){
   
    return(
        <div className='card'>
            <img className="card--like" src={props.like}/>
            <img className="card--img" src={props.first}/>
            <span className="card--slide">{props.slide}</span>
            <div className="card--down">
                <p className="card--location">{props.location}</p>
                <img className="card--star"src={props.star}/>
                <span className="card--rate">{props.rate}</span>
            </div>
            <span className="card--distance">{props.kilometres}</span>
            <span className="card--distance">{props.date}</span>
            <div className="card--price">{props.amount}<span className="card--distance"> night</span></div>
        </div>
    )
}