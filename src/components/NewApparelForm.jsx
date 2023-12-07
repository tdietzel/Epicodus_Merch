import { v4 } from 'uuid';


function NewApparelForm({ onSubmit }) {
    const handleNewApparelFormSubmission = (event) => {
      event.preventDefault();
      const newApparel = {
        name: event.target.name.value,
        size: event.target.size.value,
        quantity: parseInt(event.target.quantity.value),
        color: event.target.color.value,
        id: v4(),
      };
  
      onSubmit(newApparel);
    };
  

return (
    <>
    <form onSubmit={handleNewApparelFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Name' 
        required
        />
      <input
        type='text'
        name='size'
        placeholder='Size' />
        <input
        type='number'
        name='quantity'
        placeholder='Quantity'
        required
        />
      <input
        type='text'
        name='color'
        placeholder='Input Color'
        required
        />
      <button type='submit'>Add Apparel</button>
    </form>
    </>
  );
}
 
export default NewApparelForm;

