import { useState } from "react";
import { FormStyled, InputStyle, Btn } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from "redux/contacts/contacts-createSlice";
import { getContacts } from 'redux/contacts/contacts-selectors';
import Notiflix from 'notiflix';


export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
   
    const dispatch = useDispatch();
   const contactsGet = useSelector(getContacts)
  
  const handelChange = e => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return
    }
  }
    // const { value } = event.currentTarget;
    // 	event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  
    // }
  const contactsObj = (name, number) => {
    console.log('name, number',name, number)
    return { name, number, id: nanoid() }
  };
    
    const hendleFormSubmit = e => {
      e.preventDefault();
    const findContact = contactsGet.find(contact =>
			contact.name.toLowerCase().includes(contactsObj.name.toLowerCase())
		);  console.log('findContact',findContact)
		findContact
			? Notiflix.Notify.failure(`${contactsObj.name} is already in contact`)
      : dispatch(addContacts({ name, number,id: nanoid() }));
    
   setName('');
      setNumber('');
    
    };
 
  
    return (
      <FormStyled onSubmit={hendleFormSubmit}>
        <label>
          Name
          <InputStyle         
            value={name}
            onChange={handelChange}
            type="text"
                    name="name"
                    placeholder="Sobol Alina"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label >
          Number
                <InputStyle
                    placeholder="+39000000000"
            value={number}
            onChange={handelChange}
            type="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Btn type="submit">Add to contact</Btn>
      </FormStyled>
    )

  }

