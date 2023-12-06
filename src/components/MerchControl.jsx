import Shirts from "./Shirt";
import React from "react";
import PropTypes from "prop-types";

class MerchControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          shirtQuantities: {},
        };
    }

    // // let [count, setCount] = useState(0);
    // incrementCount =() => {
    //   this.setState((prevState) => ({
    //     count: prevState.count +1,
    //   }));
    // }
    
    // decreaseCount =() => {
    //   this.setState((prevState) => ({
    //     count: Math.max(prevState.count -1, 0),
    //   }));
    // }
    handleShirts = (shirtId) =>{
      this.setState(prevState => {
        const updatedShirts = prevState.shirts.map(shirt => {
          if (shirt.id === shirtId && shirt.quantity> 0){
            return {...shirt, quantity: shirt.quantity -1};
          }
          return shirt;
        });
        return{shirts:updatedShirts};
      });
    
      }
    }
    incrementShirtQuantity = (shirtId) => {
      // Increment quantity for the specific shirt
      this.setState((prevState) => ({
        shirtQuantities: {
          ...prevState.shirtQuantities,
          [shirtId]: (prevState.shirtQuantities[shirtId] || 0) + 1,
        }
      }));
    };
    
    decrementShirtQuantity = (shirtId) => {
      // Decrement quantity for the specific shirt
      this.setState((prevState) => ({
        shirtQuantities: {
          ...prevState.shirtQuantities,
          [shirtId]: Math.max(prevState.shirtQuantities[shirtId] - 1, 0)
        }
      }));
    };



    render() {

      return (
        <>
        {/* <button onClick={this.incrementCount}>{"+"}</button> */}
        {this.state.count}
        {/* <button onClick={this.decreaseCount}>{"-"}</button> */}
        
        <Shirts 
          shirts={this.props.shirts} // Pass shirts from props
          shirtQuantities={this.state.shirtQuantities} // Pass shirtQuantities from state
          quantity={this.state.shirtId}
          
          // new code
      
          onIncrement={this.incrementShirtQuantity}
          onDecrement={this.decrementShirtQuantity}
        />
        
        </>
      )
    }
  

MerchControl.propTypes = {
  shirts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.string,
      quantity: PropTypes.number,
      color: PropTypes.string,
      id: PropTypes.string,
      handleShirts: PropTypes.func 
    })
    
  ),
};


// MerchControl.propTypes = {
//   incrementCount: PropTypes.func
// };
    
export default MerchControl;




// 

