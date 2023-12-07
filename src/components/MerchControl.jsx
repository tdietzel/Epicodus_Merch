import { useState } from 'react';
import Store from './Store';
import ApperalDetails from './ApperalDetails';

const MerchControl = () => {
  const [merch, setMerch] = useState([
    {
      name: "whiteShirt",
      size: "extraSmall",
      quantity: 10,
      color: "white",
      id: "0"
  },
  {
      name: "blueShirt",
      size: "small",
      quantity: 10,
      color: "blue",
      id: "1"
  },
  {
      name: "redShirt",
      size: "medium",
      quantity: 10,
      color: "red",
      id: "2"
  }
  ]);

  const [showShirts, setShowShirts] = useState(false);
  const [selectedApperal, setSelectedApperal] = useState(null);

  const handleShowShirts = () => {
    setShowShirts(true);
    setSelectedApperal(null);
  }

  const showApperal = (apperal) => {
    setShowShirts(false);
    setSelectedApperal(apperal);
  }

  const handleHomeStore = () => {
    setShowShirts(false);
    setSelectedApperal(null);
  }
  
  const handleRestock = () => {
    setMerch((prevMerch) => {
      const updatedMerch = prevMerch.map((item) => {
        return item.id === selectedApperal.id ? {
          ...item,
          quantity: item.quantity + 1,
        } : item;
      });
      
      const updatedItem = updatedMerch.find((item) => item.id === selectedApperal.id);
      setSelectedApperal(updatedItem);
      return updatedMerch;
    });
  };

  const handlePurchase = () => {
    setMerch((prevMerch) => {
      const updatedMerch = prevMerch.map((item) => {
        return item.id === selectedApperal.id && item.quantity > 0 ? {
          ...item,
          quantity: item.quantity - 1
        } : item
      });
      
      const updatedItem = updatedMerch.find((item) => item.id === selectedApperal.id);
      setSelectedApperal(updatedItem);
      return updatedMerch;
    });
  };
  
  const filteredMerch = showShirts ? merch.filter((apparel) => apparel.size === 'small') : merch;
  return (
    <div>
    <button onClick={handleHomeStore}>Home</button>
    <button onClick={handleShowShirts}>Show Shirts</button>

    {selectedApperal ? (
      <div>
        <ApperalDetails apperal={selectedApperal} />
        <button onClick={handleHomeStore}>Back to Store</button>
        <button onClick={handleRestock}>Restock</button>
        <button onClick={handlePurchase}>Purchase</button>
      </div>
    ) : ( <Store merch={filteredMerch} onItemClick={showApperal}></Store>
    )}
    </div>
  )
}

export default MerchControl;





// const InventoryDetails = () => {
// const [inventory, setInventory] = useState({});

//   const handleRestock = () => {
//     setMerch({
//         merch,
//         quantity: merch.quantity + 1,
//     });
// };


  // const handleRestock = () => {
  //   if (selectedApperal) {
  //     const updatedMerch = merch.map(item => {
  //       if (item.id === selectedApperal.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1
  //         };
  //       }
  //       return item;
  //     });
  
  //     console.log(updatedMerch)
  //     console.log(selectedApperal)
  //     console.log(merch)
  // setMerch(updatedMerch)
  //     setSelectedApperal({
  //       ...selectedApperal,
  //       quantity: selectedApperal.quantity + 1,
  //     });
  //   }
  // };
  // handleEditClick = () => {
  //   console.log("handleEditClick reached!");
  //   this.setState({editing: true});
  // }
  


  // const handleRestock = () => {
  //   setMerch((prevMerch) => {
  //     const updatedMerch = {
  //       ...prevMerch[selectedApperal.id],
  //       quantity: (prevMerch[selectedApperal.id].quantity + 1),
  //     };
  //     console.log("previous", prevMerch[selectedApperal.id])
  //     console.log("updated", updatedMerch)
  //     setMerch(updatedMerch);
  //   });
  // };