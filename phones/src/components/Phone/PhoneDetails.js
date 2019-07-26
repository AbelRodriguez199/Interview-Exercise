import React, { Component} from 'react'
//import PhonesCard from './PhonesCard'
//import Phones from '../data/phones.json'
//import { Link } from 'react-router-dom'
//import IPhone_7 from '../../images/IPhone_7.png'

class PhoneDetails extends Component {
    state = {
      phone: null
    }
  
  
    render() {

    return (
      <div className='PhoneDetails'>
      Card with phone details
      {/*<img src={IPhone_7} id="Iphone7" alt=""/>*/}
      </div>
    )
    }
  }
  
  export default PhoneDetails
  