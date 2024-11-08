
import './App.css';
import ContactList from './components/ContactList';
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';


function App() {

  const [contacts, setContacts] = useState(null);

const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId ? (
      <SelectedContact contact={contacts} onReturn={setSelectedContactId} setContacts={setContacts} selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
    ) : (
      <ContactList contacts={contacts} setContacs={setContacts} setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  )
}

export default App
