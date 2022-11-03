import React from 'react';

 const Form = ({ onChange, onSubmit, name, tel }) => {
    return <form autoComplete="off" htmlFor="name" onSubmit={onSubmit}>
        <label> Name
            <input
                onChange={onChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
  
        </label>
        <label htmlFor="number">Number
            <input
                onChange={onChange}
                type="tel"
                value={tel}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        </label>
        <button type="submit">Add contact</button>
    </form>

 };

 export default Form;