import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ApperalDetails = (props) => {
  const apperal = props.apperal;
  const [quantity, setQuantity] = useState(apperal.quantity);

  useEffect(() => {
    setQuantity(apperal.quantity);
  }, [apperal]);

  return (
<div>
{apperal.quantity <= 0 ? (
  <div>
    <h2>Name: {apperal.name}</h2>
    <h3>Size: {apperal.size}</h3>
    <h3>Quantity: Out Of Stock</h3>
    <h3>Color: {apperal.color}</h3>
  </div>
) : (
  <div>
    <h2>Name: {apperal.name}</h2>
    <h3>Size: {apperal.size}</h3>
    <h3>Quantity: {quantity}</h3>
    <h3>Color: {apperal.color}</h3>
  </div>
)}
</div>
  )
}

ApperalDetails.propTypes = {
  apperal: PropTypes.object,
  name: PropTypes.string,
  size: PropTypes.string,
  quantity: PropTypes.number,
  color: PropTypes.string
}

export default ApperalDetails;