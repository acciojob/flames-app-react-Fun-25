 import React,{useState} from "react"
 
  const App=()=>{
    const [gender,setGender]=useState("")

  

    

   return (
     <div>
       <h2>Select your gender:</h2>

       <input
         type="radio"
         name="gender"
         id="male"
         value="male"
         onClick={(e) => setGender(e.target.value)}
       />
       <label forHTML="male">Male</label>

       <input
         type="radio"
         name="gender"
         id="female"
         value="female"
         onClick={(e) => setGender(e.target.value)}
       />
       <label forHTML="female">Female</label>
       {gender == "male" && (
         <div>
           <h2>Select your Shirt size</h2>
           <select>
             <option value="large">large</option>
             <option value="medium">medium</option>
             <option value="small">small</option>
           </select>
         </div>
       )}
       {gender == "female" && (
         <div>
           <div>
             <h2>Select your Shirt size</h2>
             <select>
               <option value="Select size">Select size</option>
               <option value="2">2</option>
               <option value="4">4</option>
               <option value="6">6</option>
             </select>
           </div>
         </div>
       )}
     </div>
   );
  }

  export default App;