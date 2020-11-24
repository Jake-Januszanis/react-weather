import React from 'react';

function Form () {

    return(
        <div>
        <h1>Form Page</h1>
            <form method="POST" action="/">
                <label>Enter 5 digit zipcode</label>
                <input type='number' name='zipcode' required></input>
                    <button  type="submit">Check Weather</button>
            </form>
        </div>
    )
}

export default Form;