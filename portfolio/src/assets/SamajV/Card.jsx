import { Card } from "@mui/material";
function card(){
    function Click(){
        alert("Button Was Click")
    }
    return (
        <>
        <div className="card">
            Name:_________ <br />
            F/Name:__________ <br />
             Class:_________ <br />
              Course :______<br />
              <button onClick={Click}>Click Me</button>
        </div>
        </>
    )
}
export default card