import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import ItemForm from './ItemForm';

const ItemList = ({onEdit, onDelete}) => {
  const [items, setItems] = useState([]);
  useEffect (() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await
      axios.get('http://localhost:8000/api/items/')
      setItems(response.data);
    } catch (error){
      console.error('There was an error fetching the items!', error)
    }
  };

  return(
    //INPUT HERE!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.first_name} 
            {item.middle_name} 
            {item.last_name} 
            {item.address} 
            {item.email} 
            {item.phone}
            {item.zipcode}
            {item.birthday}
            {item.telephone}
            
            {/*NEW TO CART */}
            {item.civilStatus}
            {item.heightM}
            {item.weightKg}
            {item.bloodType}
            {item.gsisIdNo}

            {item.pagIbigNo}
            {item.SSS_No}
            {item.TIN_No}
            {item.agencyEmployeeNo}
            {item.citizenship}

            {item.fatherSurname}
            {item.fatherFirstname}
            {item.fatherMiddleName}
            {item.motherSurname}
            {item.motherFirstName}
            {item.motherMiddleName}

            {item.elementary}
            {item.secondary}
            {item.vocational}
            {item.college}

            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  
};

export default ItemList;