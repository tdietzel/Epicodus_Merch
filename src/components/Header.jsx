// function Header(handleShowShirts) {
//   return (
//     <>
//     <h1>Epicodus Merch</h1>
//       { <button onClick={() => props.onClick(handleHomeStore)}>Home</button> }
//       <button onClick={() => onShirtClick(handleShowShirts)}>Show Shirts</button>
//     </>
//   )
// }
// export default Header;

function Header({ onHomeClick, onShowSmallApparelClick}) {
  return (
    <nav>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onShowSmallApparelClick}>Show Small Apparel</button>
      {/* <button onClick={onCartClick}>Cart</button> */}
    </nav>
  );
}

export default Header;


