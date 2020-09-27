import React from "react";
import "tachyons";

const Joke = ({joke}) => {



    //const { name, email, id } = props;
    return (
        <>
                
                <div className="joke f2 pa6 gold ">
                {joke}
                </div>
              
        </>
            
    )
}

export default Joke;