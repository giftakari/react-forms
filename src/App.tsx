import React, { useState } from 'react';
import { countries, CountryType } from "./countries";
import CountryFlag from './components/CountryFlag';
import Title from './components/Title';
import TextInput from './components/TextInput';
import CountrySelect from './components/CountrySelect';
import AgreeCheckbox from './components/AgreeCheckbox';
import GenderSelect from './components/GenderSelect';
import PromotionalEmails from './components/PromotionalEmails';
import Button from './components/Button';
import './App.css'

export default function App() {

  const [formData, setFormData] = useState(new FormData());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const newFormData = new FormData(formData);
    newFormData.set(id, value);
    setFormData(newFormData);
  };

  const handleGenderChange = (selectedGender: string) => {
    console.log(`Selected gender: ${selectedGender}`);
    // Do something based on the selected gender
  };

  const handleAgreeChange = (isChecked: boolean) => {
    console.log(`Agree checkbox is now ${isChecked ? 'checked' : 'unchecked'}`);
    // Do something based on the checkbox state
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with formData, e.g., send it to the server
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };



  const handleNameChange = (event: { target: { value: any; }; }) => {
    setName(event.target.value);
    setMiddleName(event.target.value);
  };
  return (
  
      <form onSubmit={handleSubmit} className='container'>


        <div className="Title">   <Title /></div>

        <div className="FirstName">
          <TextInput
            label='First Name'
            id="firstName"
            value={formData.get('firstName')?.toString() || ''}
            onChange={handleInputChange}
            placeholder='Enter First Name'
            required={true}
            minLength={2}
            maxLength={255}
          />
        </div>
        <div className="LastName">
        <TextInput
          label='Last Name'
          id="lastName"
          value={formData.get('lastName')?.toString() || ''}
          onChange={handleInputChange}
          placeholder='Enter Last Name'
          required={true}
        />
        </div>
        
        <div className="MiddleName">
        <TextInput
          label='Middle Name'
          id="middleName"
          value={formData.get('middleName')?.toString() || ''}
          onChange={handleInputChange}
          placeholder='Enter Middle Name'
        />
        </div>
       
       
      


        <GenderSelect onGenderChange={handleGenderChange} />




        <fieldset className='travelers-contact'>
          <legend>Contact Details</legend>
          <CountrySelect id="country-select-demo" label="Country Code" countries={countries} showPhone={true} />
          <TextInput
            type="phone"
            label='Phone Number'
            id="phoneNumber"
            value={formData.get('phonenumber')?.toString() || ''}
            onChange={handleInputChange}
            placeholder='Enter Phone Number'
            required={true}
          />
          <TextInput
            type="email"
            label='Email Address'
            id="Email Address"
            value={formData.get('email')?.toString() || ''}
            onChange={handleInputChange}
            placeholder='Enter Email Address'
            required={true}
          />
          <CountrySelect id="country-select-demo" label="Choose a Country Code" countries={countries} showPhone={false} />
        </fieldset>

        <fieldset>
          <legend>Travel Documents</legend>
          <CountrySelect id="country-select-demo" label="Country Of Issue" countries={countries} showPhone={false} />
          <TextInput
            label='Passport Number'
            id="passport"
            value={formData.get('passport')?.toString() || ''}
            onChange={handleInputChange}
            placeholder='Enter Passport Number'
            required={true}
          />
          <TextInput
            type="date"
            label='Passport Expiring'
            id="expiring-date"
            value={formData.get('passport-expiring')?.toString() || ''}
            onChange={handleInputChange}
            placeholder='Enter Passport Number'
            required={true}
          />

        </fieldset>

        <AgreeCheckbox onAgreeChange={handleAgreeChange} />
        <PromotionalEmails onAgreeChange={handleAgreeChange} />
        <Button />
      </form>
  

  );
}

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};
