import { useState, useEffect} from "react";
import ContactList from "./ContactList";


const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
export default function SelectedContact({selectedContactId, setSelectedContactId, setContacts, onReturn}){
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function getSingle(){
            try{
                const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                const response = await fetch(`${url}/${selectedContactId}`)
                const contact = await response.json(); 
                setContact(contact);      
              
            } catch (error) {
            console.error(error)
        }
    }
    getSingle();
},[setSelectedContactId])

    async function fetchContacts() {
           try {
               const response = await fetch(`${url}`)
               const data = await response.json();
               setContacts(data);
           } catch (error) {
               console.error(error);
           }
       }


return (
    <>
        { contact ? 
        <table>
            <tbody>
                <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.username}</td>
                </tr>
            </tbody>
        </table> : 
        <div>Loading...</div>
    }
<button onClick={() => onReturn(null)}>Return</button>
    </>
  );
 
}