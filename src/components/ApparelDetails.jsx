import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ApparelDetails = (props) => {
  const apparel = props.apparel;
  const [quantity, setQuantity] = useState(apparel.quantity);

  useEffect(() => {
    setQuantity(apparel.quantity);
  }, [apparel]);

  return (
<div>
{apparel.quantity <= 0 ? (
  <div>
    <h2>Name: {apparel.name}</h2>
    <h3>Size: {apparel.size}</h3>
    <h3>Quantity: Out Of Stock</h3>
    <h3>Color: {apparel.color}</h3>
  </div>
) : (
  <div>
    <h2>Name: {apparel.name}</h2>
    <h3>Size: {apparel.size}</h3>
    <h3>Quantity: {quantity}</h3>
    <h3>Color: {apparel.color}</h3>
  </div>
)}
</div>
  )
}

ApparelDetails.propTypes = {
  apparel: PropTypes.object,
  name: PropTypes.string,
  size: PropTypes.string,
  quantity: PropTypes.number,
  color: PropTypes.string
}

export default ApparelDetails;