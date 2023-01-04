import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { ContactsConteiner, Item, Btn,Contact,Span } from 'components/Contacts/Contacts.style'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-createSlice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selector'

export const Contacts = () => {   
  const dispatch = useDispatch();
  const contactsGet = useSelector(getContacts);
  const filterGet = useSelector(getFilter);
   console.log('contactsGet', contactsGet)
   //const { name, number, id } = contactsGet;
  // const contactsObj = (contactsGet) => {
  //   return {contactsGet, id: nanoid() }
  // };  
  
  const visibleContacts = () => {
     if (filterGet) {
			const normalizeFilter = filterGet.toLowerCase();
			if (contactsGet.length !== 0) {
				return contactsGet.filter(contact =>
					contact.name.toLowerCase().includes(normalizeFilter)
				);
			}
		}
	 return contactsGet;
  };
  const addVisible =visibleContacts()
//console.log('visibleContacts',visibleContacts)
  return ( 
    <ContactsConteiner>
           {addVisible &&   
            addVisible.map(({ name, number, id,children }) => {
                  return (
                      <Item key={id}>   
                       <Contact >  <Span>{name}:</Span>{number} </Contact>
                           <Btn onClick={() => {dispatch(deleteContacts(id)) }}>X</Btn>
      {children}
       </Item>)} 
     )}
    </ContactsConteiner>
           

    )
}



// ContactsItem.prototype = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     onRemove: PropTypes.func,
//  id:PropTypes.func
// }
// Contacts.prototype = {
//     contacts: PropTypes.func,
//     onRemove:PropTypes.func
// }