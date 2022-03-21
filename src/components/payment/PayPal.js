import React, { useEffect, useRef, useState } from 'react'


export const PayPal = () => {


  const paypal = useRef();

  const [state, setState] = useState({});
  const totalR = localStorage.getItem('total');
  

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: 'Pago servicio de Kliphome',
                amount: {
                  currency_code: "MXN",
                  value: parseFloat(totalR),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setState(order);
          console.log('EXITO AL PAGAR');
          console.log(order);
        },
        onError: (err) => {
          console.log(err.response);
        },
      })
      .render(paypal.current);
  }, [])

  return (
    <div>
      <div ref={paypal}></div>
      <p>{JSON.stringify(state)}</p>
    </div>
  )
}