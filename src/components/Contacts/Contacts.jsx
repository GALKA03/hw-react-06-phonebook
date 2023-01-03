import PropTypes from 'prop-types';
import { ContactsConteiner, Item, Btn,Contact,Span } from 'components/Contacts/Contacts.style'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-createSlice';
import {getContacts} from 'redux/contacts/contacts-selectors'


export const Contacts = ({visibleContacts}) => {
    const contacts =useSelector(getContacts)
    console.log('contacts', contacts)
    const dispatch = useDispatch();
    // if (contacts) {
        
    // }
   return( 
    <ContactsConteiner>
           {visibleContacts &&   
             visibleContacts.map(({ name, number, id,children }) => {
                  return (
                      <Item key={id}>   
                       <Contact >  <Span>{name}:</Span>{number} </Contact>
                           <Btn onClick={() => { dispatch(deleteContacts(id)) }}>X</Btn>
      {children}
       </Item>)} 
     )}
    </ContactsConteiner>
           

    )
}
// export const Contacts = ({visibleContacts}) => {
//     //const contacts =useSelector(visibleContacts)
// console.log({visibleContacts})
//  const dispatch = useDispatch();
//    return( 
//     <ContactsConteiner>
//            {visibleContacts &&        
//                visibleContacts.map(({ name, number, id }) => {
//                    return <Item key={id}>   
//            {name}:{number} <Btn onClick={() => {dispatch(deleteContacts(id))}}>X</Btn>
      
//        </Item>
                   
//                } 
//      )}
//     </ContactsConteiner>
           

//     )
// }


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