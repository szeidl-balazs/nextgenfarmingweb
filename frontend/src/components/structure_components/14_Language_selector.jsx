import React from 'react';

const Language = (props) => {

    

    return (

        <div>

            <select className="language-selector" value={props.name} onChange={()=> props.languageChooser()} >
                <option value="hun" >HUN</option>
                <option value="eng">ENG</option>
            </select>

        </div>
    );
}

export default Language;