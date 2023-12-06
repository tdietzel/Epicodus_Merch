import PropTypes from "prop-types";
import blueShirtPicture from "./../assets/blue-shirt.png"; 
import redShirtPicture from "./../assets/red-shirt.png";
import whiteShirtPicture from "./../assets/white-shirt.png";

const shirtMerch = [
    {
        name: "whiteShirt",
        size: "extraSmall",
        quantity: 10,
        color: "white",
        id: "1",
        picture: <img src={whiteShirtPicture} alt="An image of blue shirt" width="60px" />

    },
    {
        name: "blueShirt",
        size: "small",
        quantity: 5,
        color: "blue",
        id: "2",
        picture: <img src={blueShirtPicture} alt="An image of blue shirt" width="60px" />
    },
    {
        name: "redShirt",
        size: "medium",
        quantity: 25,
        color: "red",
        id: "3",
        picture: <img src={redShirtPicture} alt="An image of blue shirt" width="60px" />
    }
]

function Shirts({ incrementShirtQuantity, decrementShirtQuantity }) {
    const listItems = shirtMerch.map((shirt) => (
      <div key={shirt.id} onClick = {() => props.handleShirts(prop.id)}>
        {shirt.picture}
        <div>
        <p> <button onClick={() => decrementShirtQuantity(shirt.id)}>-</button> Quantity: {shirt.quantity} <button onClick={() => incrementShirtQuantity(shirt.id)}>+</button> </p>
        </div>
        <h3>Sizes: {shirt.size}</h3>
        <h3>Color: {shirt.color}</h3>
        <h3>Name: {shirt.name}</h3>
      </div>
    ));
  
    return <ul>{listItems}</ul>;
  }

Shirts.propTypes = {
    shirts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        size: PropTypes.string,
        quantity: PropTypes.number,
        color: PropTypes.string,
        id: PropTypes.string
      })
    ),
    incrementShirtQuantity: PropTypes.func.isRequired,
    decrementShirtQuantity: PropTypes.func.isRequired
  };
export default Shirts;



// function Shirts(props) {
//     const listItems = shirtMerch.map((shirt) => (
//         <div key={shirt.id}>
//             {shirt.picture}
//             <div>
//                 <h3>Quantity: <button>-</button> {shirt.quantity} <button>+</button></h3>
//                 {/* <button onClick={onIncrement}>+</button>
//                 <h3>Quantity: {shirt.quantity}</h3>
//                 <button onClick={onDecrement}>-</button> */}
//             </div>
//             <h3>Sizes: {shirt.size}</h3>
//             <h3>Color: {shirt.color}</h3>
//             <h3>Quantity: {shirt.quantity}</h3>
//             <h3>Name: {shirt.name}</h3>
            
//         </div>
//     ));

    // return <ul>{listItems}</ul>;


// function Shirts({ shirts, onIncrement, onDecrement }) {
    
//     const listItems = shirtMerch.map((shirt) => (
//       <>
//         <div>
//           <button onClick={onIncrement}>-</button> <h3>Quantity: {shirt.quantity}</h3> <button onClick={onIncrement}>+</button>
//         </div>
//         <h3>Sizes: {shirt.size}</h3>
//         <h3>Color: {shirt.color}</h3>
//         <h3>Name: {shirt.name}</h3>
//         key={shirt.id}
//         shirt={shirt}
//         onIncrement={() => onIncrement(shirt.id)}
//         onDecrement={() => onDecrement(shirt.id)}
//       </>
//     ));

    
// }