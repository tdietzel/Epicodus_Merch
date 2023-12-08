import { useState } from 'react';
import Store from './Store';
import ApparelDetails from './ApparelDetails';
import Header from './Header';
import NewApparelForm from './NewApparelForm';

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

  const [showSmallApparel, setShowShirts] = useState(false);
  const [selectedApparel, setSelectedApparel] = useState(null);

  const handleShowSmallApparel= () => {
    setShowShirts(true);
    setSelectedApparel(null);
  }

  const showApparel = (apparel) => {
    setShowShirts(false);
    setSelectedApparel(apparel);
  }

  const handleHomeStore = () => {
    setShowShirts(false);
    setSelectedApparel(null);
  }
  
  const handleRestock = () => {
    setMerch((prevMerch) => {
      const updatedMerch = prevMerch.map((item) => {
        return item.id === selectedApparel.id ? {
          ...item,
          quantity: item.quantity + 1,
        } : item;
      });
      
      const updatedItem = updatedMerch.find((item) => item.id === selectedApparel.id);
      setSelectedApparel(updatedItem);
      return updatedMerch;
    });
  };

  const handlePurchase = () => {
    setMerch((prevMerch) => {
      const updatedMerch = prevMerch.map((item) => {
        return item.id === selectedApparel.id && item.quantity > 0 ? {
          ...item,
          quantity: item.quantity - 1
        } : item
      });
      
      const updatedItem = updatedMerch.find((item) => item.id === selectedApparel.id);
      setSelectedApparel(updatedItem);
      return updatedMerch;
    });
  };
  const handleAddingNewApparelToList = (newApparel) => {
    console.log('Adding new apparel:', newApparel);
    setMerch((prevMerch) => {
      const updatedApparel = [...prevMerch, newApparel];
      console.log(updatedApparel);
      return updatedApparel;
    });
  };
  
  const filteredMerch = showSmallApparel ? merch.filter((apparel) => apparel.size === 'small') : merch;
  return (
    <div>
    <Header
        onHomeClick={handleHomeStore}
        onShowSmallApparelClick={handleShowSmallApparel}
        // onCartClick={handleCartClick}
      />
    {selectedApparel ? (
      <div>
        <ApparelDetails apparel={selectedApparel} />
        <button onClick={handleHomeStore}>Back to Store</button>
        <button onClick={handleRestock}>Restock</button>
        <button onClick={handlePurchase}>Purchase</button>
      </div>
    ) : (
      <>
        <Store merch={filteredMerch} onItemClick={showApparel} />
        <NewApparelForm onSubmit={handleAddingNewApparelToList} />
      </>
    )}
    </div>
  )
}

export default MerchControl;