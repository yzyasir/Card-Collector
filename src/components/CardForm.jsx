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
                {   // We are passing our errors from the models through using props (god bless props man)
                    props.error.name ?
                <span>{props.error.name.message}</span>
                : "" 
                //TODO: Try going over this code more with Duke to understand it
                // Needed to type out the whole thing so the error goes away
                }
            </div>
            <div class="form-group">
                <label>Card Image (URL Please)</label>
                <input type="text" className="nes-input is-warning" onChange={props.onSubmitHandler} value={props.url} 
                    // This is another way how to do onChange, I like my way, more concise 
                    />
                {   // We are passing our errors from the models through using props (god bless props man)
                    props.error.url ?
                <span>{props.error.url.message}</span>
                : "" 
                //TODO: Try going over this code more with Duke to understand it
                // Needed to type out the whole thing so the error goes away
                } 
            </div>
            <div class="form-group">
                <label>Favorite</label>
                <input type="text" className="nes-input is-warning" onChange={props.onSubmitHandler} value={props.favoriteMove} 
                    // This is another way how to do onChange, I like my way, more concise 
                    />
                {   // We are passing our errors from the models through using props (god bless props man)
                    props.error.favoriteMove ?
                <span>{props.error.favoriteMove.message}</span>
                : "" 
                //TODO: Try going over this code more with Duke to understand it
                // Needed to type out the whole thing so the error goes away
                } 
            </div>
            <button type="button" className="nes-btn is-warning">Submit</button>
        </form>
        </>
    );
}

export default CardForm;