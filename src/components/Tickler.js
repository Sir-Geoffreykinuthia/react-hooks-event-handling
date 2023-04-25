import React from "react";
  // using an arrow function with a inline function .
// function Tickler() {  return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
// //   function tickle() {
//     console.log("Teehee!");
//   }

//   return <button onClick ={tickle}>Tickle me!</button>;
// }

// export default Tickler;

function Tickle (){
function tickle(event) {
  console.log(event);
}

return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickle;
