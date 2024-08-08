
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css';
import Logo from './boatpics/logotrack.jpeg';
import { TbTruckDelivery } from "react-icons/tb";

export default function Payment() {
  return (
    <div className='container'  data-aos="fade-left">
      <div className='logo-container'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='paymentbox'>
        <h2><TbTruckDelivery className='deliicon'/>Track Status of Your Shipment</h2>
        <div className='ratiobar'>
          <h3>Search By:</h3>
          <div>
            <input type="radio" id="order-id" name="search-type" value="order-id" />
            <label htmlFor="order-id">Order ID</label>
          </div>
          <div>
            <input type="radio" id="awd" name="search-type" value="awd" />
            <label htmlFor="awd">AWD</label>
          </div>
        </div>

        <div className='searchbar'>
          <input type='text' placeholder='Enter ID to Search' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

