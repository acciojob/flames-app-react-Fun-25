import React  from "react";

function flame(fname,sname){
let fnameArr=fname.split("")
let snameArr = sname.split("")

console.log(fnameArr,snameArr)
const set=new Set();

fnameArr.filter((fchar)=>{
    if(snameArr.includes(fchar))
    {
        if(!(set.has(fchar))){
fnameArr.remove(fchar)
snameArr.remove(fchar)
set.push(fchar);
        }

    }
})
const namesLen=fnameArr.length+snameArr.length;
return namesLen%6;
 



}

function Flames( {fname,sname}){
    return (
        flame(fname,sname)
      <h3 data-testid="answer">{ans}
      </h3>
    )
}

export default Flames;