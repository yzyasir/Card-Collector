// The name for this file must be in camel case
import React, { useState } from 'react'; // imports all the nice features from react that we are going to make use of

// In a component everything is kinda shoved into a const basically
const CardForm = () => {
    // These must be inside the const CardForm
    const [cardName, setCardName] = useState("");
    const [cardURL, setCardURL] = useState("");
    const [cardHolo, setCardHolo] = useState(false); // Set it to false since we do not want them to be holo unless explicitly stated
    // NOTE: To check if state is updating, use inspect, then check components

    return(
        // Need to place everything in the div, react has a habit of giving an error or giving errors when not everything is complete
        <> 
        <form>
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
            <div class="form-group">
                <label>Holographic?</label>
                <input type="checkbox" 

                // We do "checked here because if you look at the documentation thats what is says to use, and we have to set it to our setState"
                checked={cardHolo} 
                
                //e is just the event, e.target.checked is basically what our target has updated to
                onChange={(e)
                =>setCardHolo(e.target.checked)} className="form-control"
                    />
            </div>
            <button type="button" className="nes-btn is-warning">Submit</button>
        </form>
        </>
    );
}

export default CardForm;