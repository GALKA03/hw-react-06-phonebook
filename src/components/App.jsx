import { Conteiner } from './App.styles';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { Contacts } from './Contacts/Contacts';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/contacts/contacts-selectors';
// import { getFilter } from 'redux/filter/filter-selector'
// import { addFilter } from 'redux/filter/filter-createSlise';
// import { addContacts } from 'redux/contacts/contacts-createSlice';


export function App() {
// const dispatch = useDispatch()

  // const contactsGet = useSelector(getContacts)
  // console.log('contactsGet',contactsGet )
  // const filterGet = useSelector(getFilter);
  // const addContact = contactObj => {
  
	// 	const findContact = contactsGet.find(contact =>
	// 		contact.name.toLowerCase().includes(contactObj.name.toLowerCase())
	// 	);  console.log('findContact',findContact)
	// 	findContact
	// 		? Notiflix.Notify.failure(`${contactObj.name} is already in contact`)
	// 		: dispatch(addContacts(contactObj));
  // };

// const visibleContacts = () => {
//   if (filterGet) {
// 			const normalizeFilter = filterGet.toLowerCase();
// 			if (contactsGet.length !== 0) {
// 				return contactsGet.filter(contact =>
// 					contact.name.toLowerCase().includes(normalizeFilter)
// 				);
// 			}
// 		}
// 	return contactsGet;
// 	};


  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
          bacgroundColor: 'green',
        }}
      >
        Phonebook
      </h1>
      <Form /*onSubmit={addContact}*/ />
      <h2
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
        }}
      >
        Contacts
      </h2>
      <Filter/>
      <Contacts /*visibleContacts={visibleContacts()} *//*onRemove={deliteContacts} *//>
    </div>
  );
}
