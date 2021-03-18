// The name for this file must be in camel case
import React from 'react'; // imports all the nice features from react that we are going to make use of

// In a component everything is kinda shoved into a const basically
const CardForm = (props) => { // NOTE: Props needed to be passed through the component!!!!

    // For checks, set it to false by default since we do not want them to be holo unless explicitly stated
    // NOTE: To check if state is updating, use inspect, then check components

    return(
        // Need to place everything in the div, react has a habit of giving an error or giving errors when not everything is complete
        <> 
        <form onSubmit={props.onSubmitHandler}> 
        {/* Need to add props to the form for it to work */}
            <div class="form-group">
                <label>Card Name</label>
                <input type="text" className="nes-input is-warning" onChange={props.onSubmitHandler} value={props.name} 
                    // This is another way how to do onChange, I like my way, more concise
                    />
            </div>
            <div class="form-group">
                <label>Card Image (URL Please)</label>
                <input type="text" className="nes-input is-warning" onChange={props.onSubmitHandler} value={props.url} 
                    // This is another way how to do onChange, I like my way, more concise 
                    /> 
            </div>
            <div class="form-group">
                <label>Favorite</label>
                <input type="text" className="nes-input is-warning" onChange={props.onSubmitHandler} value={props.favoriteMove} 
                    // This is another way how to do onChange, I like my way, more concise 
                    /> 
            </div>
            <button type="button" className="nes-btn is-warning">Submit</button>
        </form>
        </>
    );
}

export default CardForm;