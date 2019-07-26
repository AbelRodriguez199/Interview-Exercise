import React from 'react'
import PhonesCard from './PhonesCard'
import Phones from '../../data/phones.json'
import { Link } from 'react-router-dom'

const phones = Phones

const PhonesList = () =>{
  return (
      <>
      <h1>PHONES LIST</h1>
    <ul className="list-group align-self-start mr-0">
        <li className="list-group-item">

  <Link to={"/:id"} className="btn btn-primary">
  { phones.map((onePhone,index) => 
    <PhonesCard key={index} name={onePhone.name} manufacturer={onePhone.manufacturer}price={onePhone.price} description={onePhone.description} image={onePhone.imageFileName}/>) 
  }
  </Link>
  
        </li>
    
    </ul>
    </>
  )
};

export default PhonesList