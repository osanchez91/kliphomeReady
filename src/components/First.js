import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { PayPal } from './payment/PayPal';


export const First = () => {

    const { service } = useParams();
    const [name, setName] = useState('');
    const [total, settotal] = useState(0);
    const [prodDesc, setProdDesc] = useState('');
    const [address, setAddress] = useState('');
    const [idService, setIdService] = useState('');
    const [Kliper, setKliper] = useState('');



    const baseUrl = 'https://us-central1-kliphome-2a694.cloudfunctions.net/api';
    axios.get(`${baseUrl}/service/${service}`)
          .then(
            data => {
              console.log(data);
              setName(data.data.name);
              setProdDesc(data.data.probDesc);
              setAddress(data.data.dateTime);
              setIdService(data.data.id);
              setKliper(data.data.klipperId);


              let totalR = parseFloat(data.data.priceMaterials) + parseFloat(data.data.priceSolution);
              settotal(totalR);
              localStorage.setItem('total', totalR);
            }
          )
          .catch(console.log);

  return (
      <div className='row justify-content-center'>
        <div className='col-md-6 mt-4'>
          <div className='card shadow'>
            <div className='card-body'>
                <h3 className='text-center text-primary'>{prodDesc}</h3>
                <hr />
                <p>{name}</p>
                <p>{address}</p>
                <p>{idService}</p>
                <p>{Kliper}</p>
                <p className='text-info'>Total: {total}</p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mt-4'>
          <div className='card shadow'>
            <div className='card-body'>
                <PayPal />
            </div>
          </div>
        </div>
      </div>
  )
}

