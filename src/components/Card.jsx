// The name for this file must be in camel case
import React from 'react'; // imports all the nice features from react that we are going to make use of

// In a component everything is kinda shoved into a const basically


const imgStyle = { // So basically I added styling in here for the card, and I can inject it into my other const
    width: '150px' // Cool right?
}

const cardStyle = {
    display: 'inline-block',
    width: '300px',
    padding: '10px'
}

const Card = () => {
    return(
        // Need to place everything in the div, react has a habit of giving an error or giving errors when not everything is complete
        <div style={cardStyle} > 
            <img style={imgStyle} src="https://rarest.org/wp-content/uploads/2018/10/shadowless-first-edition-charizard.jpg" alt="One of Yasir's favorite pokemon cards" />
            <hr/> {/* This tag basically just makes a line, I used it for aethetics */}
            <h5>Charizard</h5>
            <hr/>
            <h5>Flamethrower</h5>
        </div>
        // Need to use divs because all of my cards will be little divs displaying on my page
    );
}

export default Card;