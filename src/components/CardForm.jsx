// The name for this file must be in camel case
import React from 'react'; // imports all the nice features from react that we are going to make use of

// In a component everything is kinda shoved into a const basically

const CardForm = () => {
    return(
        // Need to place everything in the div, react has a habit of giving an error or giving errors when not everything is complete
        <> 
        <form>
            <div class="form-group">
                <label>Card Name</label>
                <input type="text" className="nes-input is-warning"/>
            </div>
            <div class="form-group">
                <label>Card Image (URL Please)</label>
                <input type="text" className="nes-input is-warning"/> 
            </div>
            <div class="form-group">
                <label>Holographic?</label>
                <input type="checkbox" className="form-control"/>
            </div>
            <button type="button" className="nes-btn is-warning">Submit</button>
        </form>
        </>
    );
}

export default CardForm;