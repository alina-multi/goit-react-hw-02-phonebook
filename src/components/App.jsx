import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from "./Filter/Filter";


 export class App extends Component { 
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '', 
  number: ''
 }
   
   handleChange = e => { 
     const { value, name } = e.currentTarget;
     this.setState(
       {
         [name]: value
       }
     );    
   }

   handleSubmit = e => {
     e.preventDefault();

    const isMatch = this.state.contacts.find(contact => contact.name === this.state.name)
    
     if (isMatch) { 
       alert(`${this.state.name} is alredy in contacts`);
       return;
     }

     this.setState({ contacts: [{  id: nanoid(),name: e.target.elements.name.value,  number:e.target.elements.number.value }, ...this.state.contacts] });
     this.reset();
   }

   handleFilter = (e) => { 
    const { value, name } = e.currentTarget;
    this.setState(
       {
         [name]: value
       }
     );
  
    this.contactsFilter();
  
   }

   contactsFilter = () => {
     const filterNirmilized = this.state.filter.toLocaleLowerCase();
     const visibleArray = this.state.contacts.filter(contact=> contact.name.toLowerCase().includes(filterNirmilized))
     return visibleArray;
   
   }

   onDeleteButton = (contactID) => {
     this.setState((prevState) => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactID) }))
   
   
   }

   reset = () => { 
     this.setState(
       {
         name: "",
         number: ""
       });    
   }


  render() { 
    return <div>
      <Form onChange={this.handleChange} onSubmit={this.handleSubmit} name={this.state.name} tel={this.state.number}/>
      <Filter contacts={this.state.contacts} filter={this.state.filter} onChange={this.handleFilter}/>
      <ContactList visibleContacts={this.contactsFilter} onDeleteButton={this.onDeleteButton}/>
    </div> 
  }
   
  
    
 }

