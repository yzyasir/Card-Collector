// The name for this file must be in camel case
import React, { useState } from 'react'; // imports all the nice features from react that we are going to make use of

// In a component everything is kinda shoved into a const basically
const CardForm = (props) => { // NOTE: Props needed to be passed through the component!!!!
    // These must be inside the const CardForm
    const [cardName, setCardName] = useState("");
    const [cardURL, setCardURL] = useState("");
    const [cardHolo, setCardHolo] = useState(false); // Set it to false by default since we do not want them to be holo unless explicitly stated
    // NOTE: To check if state is updating, use inspect, then check components

    const addNewCard = (e) => {
        e.preventDefault(); //this method cancels the event if it is cancelable, useful for submitting to prevent submitting a form

        // here we are calling on the prop and passing it a thing and the thing that is going to be passed is a newCard
        props.makeCard({ // made an object here
            Name: cardName, 
            URL: cardURL,
            Holo: cardHolo,
            Own: false // here we are setting the owning of the card to false
          }) 
          // we pass the data throughout as an object, thats why we use it above as that 
        console.log("*************************************************")
        //send form data to database here, for now just keep it frontend, basically one component is talking to the parent, and that component is talking to another, here we pass data around
    }

    return(
        // Need to place everything in the div, react has a habit of giving an error or giving errors when not everything is complete
        <> 
        <form onSubmit={addNewCard}>
            <div class="form-group">
                <label>Card Name</label>
                <input type="text" className="nes-input is-warning" onChange={
                    (e)=>setCardName(e.target.value)} value={cardName} 
                    // This is another way how to do onChange, I like my way, more concise
                    />
            </div>
            <div class="form-group">
                <label>Card Image (URL Please)</label>
                <input type="text" className="nes-input is-warning" onChange={
                    (e)=>setCardURL(e.target.value)} value={cardURL} 
                    // This is another way how to do onChange, I like my way, more concise 
                    /> 
            </div>
            <button type="button" className="nes-btn is-warning">Submit</button>
        </form>
        </>
    );
}

export default CardForm;