import React, { useState } from "react";
let arr = ['Siblings','Friends','Love','Affection','Marriage','Enemy'];
const App = () => {
  const [bname, setBname] = useState("");
  const [gname, setGname] = useState("");
  const [relationship, setRelationship] = useState("");
  const [click,setClick]=useState(false)

  function findRelationship() {
    
    
    if (bname ==="" || gname==="") {
      return setRelationship("Please enter valid input");
    }
    for (let c of bname) {
      if (gname.includes(c)) {
         setBname(bname.replace(c, ""));
         setGname(gname.replace(c, ""));
      }
      console.log(bname,gname)
    }

   setClick(true)
  }

  return (
    <div>
      <input
        type="text"
        id="mname"
        data-testid="input1"
        placeholder="Enter First name"
        onChange={(e) => setBname(e.target.value)}
      />
      <input
        type="text"
        id="fname"
        placeholder="Enter Second name"
        data-testid="input2"
        onChange={(e) => setGname(e.target.value)}
      />
      <button data-testid="calculate_relationship" onClick={findRelationship}>
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        onClick={() => {
          setBname("");
          setGname("");
          setRelationship("")
          setClick("false")
        }}
      >
        Clear
      </button>
      <h3 data-testid="answer">
       { click &&
        arr[(bname.length+gname.length)%6]}
        </h3>
        
    </div>
  );
};

export default App;
