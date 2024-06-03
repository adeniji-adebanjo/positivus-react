import React from "react";

// function Car(props) {
//   return (
//     <h2>
//       My name is {props.name} and I live in {props.locations}
//     </h2>
//   );
// }

const Car = (props) => {
  const { name, locations } = props;
  return (
    <h2>
      My name is {name} and I live in {locations}
    </h2>
  );
};

const Greetings = () => {
  return (
    <>
      <Car name="Jide" locations="Lekki" />
      <Car name="Femi" locations="Magodo" />
      <Car name="Kabirat" locations="Ikorodu" />
      <div>Greetings</div>
    </>
  );
};

export default Greetings;
