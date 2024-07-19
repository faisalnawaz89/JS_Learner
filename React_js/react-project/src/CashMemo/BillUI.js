import './module.billui.css';
import { useEffect, useState } from 'react';

export default function BillUI() {
  const [addItem, setAddItem] = useState('');
  const [addPrice, setAddPrice] = useState('');
  const [addItemsValues, setItemsValues] = useState(() => {
    const saveData = localStorage.getItem('items');
    return saveData ? JSON.parse(saveData) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(addItemsValues));
  }, [addItemsValues]);

  const handleData = (e) => {
    e.preventDefault();
    const price = parseFloat(addPrice);
    if (isNaN(price)) {
      alert('Please add your item!');
      return;
    }

    if (isEditing) {
      const updatedItems = addItemsValues.map((item, index) =>
        index === editIndex ? { item: addItem, price: price } : item
      );
      setItemsValues(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setItemsValues([...addItemsValues, { item: addItem, price: price }]);
    }

    setAddItem('');
    setAddPrice('');
  };

  const removeItem = (index) => {
    const removeItems = addItemsValues.filter((_, i) => i !== index);
    setItemsValues(removeItems);
  };

  const editItem = (index) => {
    const itemToEdit = addItemsValues[index];
    setAddItem(itemToEdit.item);
    setAddPrice(itemToEdit.price.toString());
    setIsEditing(true);
    setEditIndex(index);
  };

  const totalBill = addItemsValues.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className="container mx-auto py-5">
        <div className="customWidth">
          <h3>Cash Memo:</h3>
          <form onSubmit={handleData}>
            <div className="form-group">
              <input
                onChange={(e) => setAddItem(e.target.value)}
                value={addItem}
                className="form-input"
                type="text"
                placeholder="Add Item"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => setAddPrice(e.target.value)}
                value={addPrice}
                className="form-input"
                type="text"
                placeholder="Add Price"
              />
            </div>
            <button className="addbtn">
              {isEditing ? 'Update' : 'Add'}
            </button>
          </form>
          <div className="itemList">
            {addItemsValues.map((entry, index) => (
              <div key={index} className="gridX3">
                <div className="g--cell">{entry.item}</div>
                <div className="g--cell">{entry.price.toFixed(2)}</div>
                <div className="g--cell">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dd0f00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-trash-2"
                    onClick={() => removeItem(index)}
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </div>
                <div className='g--cell'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0000FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-edit-2"
                    onClick={() => editItem(index)}
                    >
                    <path d="M17 3a2.828 2.828 0 0 1 4 4L7 21H3v-4L17 3z"></path>
                    </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="totalBill">
          <div className="gridX1">
            <div className="g--cell">Total: {totalBill.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
