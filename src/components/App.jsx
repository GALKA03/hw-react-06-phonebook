import { Conteiner } from './App.styles';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export function App() {


  return (
    <Conteiner>
      <h1
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
          bacgroundColor: 'green',
        }}
      >
        Phonebook
      </h1>
      <Form />
      <h2
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
        }}
      >
        Contacts
      </h2>
      <Filter/>
      <Contacts/>
    </Conteiner>
  );
}
