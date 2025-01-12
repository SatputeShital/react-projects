import React from 'react';

const AddTwoNumbers= () =>
{
    let a=20;
    let b=50;
    return(
        <React.Fragment>
            <h1>Using Fragment and JSX</h1>
            <h2>Addition Of Two Numbers</h2>
            <p><b>First Number is: {a}</b></p>
            <p> <b>Second Number is: {b}</b></p>
            <div style={{width:"300px", height:"100px", border:"2px solid black", borderRadius:"5px", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                <h3> Addition Of Numbers is : {a+b}</h3>
            </div>
        </React.Fragment>
    );
}

export default AddTwoNumbers;