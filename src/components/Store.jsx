import PropTypes from "prop-types";

const Store = (props) => {
  const merch = props.merch;

  return (
    <div>
      {merch.map((apparel) => (
        <div key={apparel.id} onClick={() => props.onItemClick(apparel)}>
          <img src='https://picsum.photos/200' alt={apparel.name} />
          <h2>{apparel.name}</h2>
        </div>
      ))}
    </div>
  );
};

Store.propTypes = {
  merch: PropTypes.array,
  name: PropTypes.string
}

export default Store;


