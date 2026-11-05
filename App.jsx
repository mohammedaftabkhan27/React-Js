import React from 'react'
import Selfinto from './selfinto'

export default function App() {
  const name = 'Aftab';
  const age = 23;
  const city = 'Gulbarga';
  const email = 'mohammedaftabkhan@thestackly.com';
  const phone= 987654321;

    const name1 = 'Rahul';
  const age1 = 24;
  const city1 = 'Banglore';
  const email1 = 'rahul@thestackly.com';
  const phone1 = 98754321;

    const name2 = 'Kartik';
  const age2 = 27;
  const city2 = 'Delhi';
  const email2 = 'kartik@thestackly.com';
  const phone2 = 987654521;

    const name3 = 'Ahmed';
  const age3= 22;
  const city3 = 'Hyderbad';
  const email3 = 'ahmed@thestackly.com';
  const phone3 = 987646321;

      const name4 = 'Pavan';
  const age4= 25;
  const city4 = 'Hyderbad';
  const email4 = 'pavan@thestackly.com';
  const phone4 = 987776321;

  return (
    <div>

    <Selfinto/>

       <Hi name={name} age={age} city={city} email={email} phone={phone}/>
      <hr></hr>
      <Hi name={name1} age={age1} city={city1} email={email1} phone={phone1}/>
      <hr></hr>
      <Hi name={name2} age={age2} city={city2} email={email2} phone={phone2}/>
      <hr></hr>
      <Hi name={name3} age={age3} city={city3} email={email3} phone={phone3}/>
      <hr></hr>
      <Hi name={name4} age={age4} city={city4} email={email4} phone={phone4}/>

    </div>
 
  )
}
