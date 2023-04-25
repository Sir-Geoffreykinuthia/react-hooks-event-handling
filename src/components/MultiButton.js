// import React from "react";

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
// when the even is clicked the number assigned to it does not log but the even happens
//       <button onClick={handleClick}>Button 1</button>
//       <button onClick={handleClick}>Button 2</button>
//       <button onClick={handleClick}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;




import React from "react";

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       {/* adding that the number also gets passed as the event happens lo */}
//       {/* anytime the button is clicked it displays button (number) was clicked */}
//       {/* but the button number will only appear when it rendered for now and not when the button icon is clicked */}
//       <button onClick={handleClick(1)}>Button 1</button>
//       <button onClick={handleClick(2)}>Button 2</button>
//       <button onClick={handleClick(3)}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;



// in order for our function above we need to first define the function
function MultiButton(){
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      {/* using arrow function for function defination and not finction invocation */}
      {/* the arrow function providing each onclick handlers a function definition that will only be invoked when the button is clicked.  */}
      {/* awesome now our button works when clicked to display the button number */}
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}
export default MultiButton;
