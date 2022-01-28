import React from 'react';

function Card(props) {
    return (
    <article className="card--container">
        <img src={props.item.img} alt={props.item.alt} className="card--img"></img>
            <section className="card--details">
                <div className="country--container">
                    <i class="fas fa-map-marker-alt"></i>
                    <p className="card--country">{props.item.country}</p>
                    <a href={props.item.maps} target="_blank" rel="noreferrer" className="card--link">View on Google Maps</a>
                </div>
                <h1 className="card--location">{props.item.location}</h1>
                <h2 className="card--date">{props.item.date}</h2>
                <p className="card--description">{props.item.description}</p>
                <p className="card--favepart">Favorite part: {props.item.favePart}</p>
                <p className="card--favefood">Favorite food: {props.item.faveFood}</p>
            </section>
    </article>
    )
}

export default Card;