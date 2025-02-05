// File: App.js

import { Container} from "react-bootstrap";
import { useState } from "react";
import FormRange from "react-bootstrap/FormRange";

function Range() {
	const [hvalue, sethValue] = useState(50);
    const [cvalue, setcValue] = useState(50);
    const [jvalue, setjValue] = useState(50);

	return (
		
        <>
         <Container >
        <h3 className="mb-5" style={{ color: "#106C50" }}>
				Known Languages
			</h3>
			
			{/* <Row className="w-50 mb-5" color="black"> */}
            <div>
            <div style={{display:"flex", flexDirection:"row"}}>
                 <h5>Hindi: {hvalue}</h5>
				<FormRange
					value={hvalue}
					onChange={(event) => {
						sethValue(event.target.value);
					}}
                    style={{width:"280px" , marginLeft:"50px"}}
				/></div>
                 <div style={{display:"flex", flexDirection:"row"}}>
                 <h5> Sanskrit: {cvalue}</h5>
				<FormRange
					value={cvalue}
					onChange={(event) => {
						setcValue(event.target.value);
					}}
                    style={{width:"280px" , marginLeft:"30px"}}
				/></div>
                 <div style={{display:"flex", flexDirection:"row"}}>
                 <h5>English: {jvalue}</h5>
				<FormRange
					value={jvalue}
					onChange={(event) => {
						setjValue(event.target.value);
					}}
                    style={{width:"280px" , marginLeft:"40px"}}
				/></div>
            </div>
           


			{/* </Row> */}
			{/* <Row>
				<h3>Range Value: {value}</h3>
			</Row> */}
		</Container>
        </>
			
	);
}

export default Range;
