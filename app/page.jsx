"use client";

import React, { useEffect, useState } from 'react';

function Page() {

  const [numbers, setNumbers] = useState([])
  const [gotData, setGotData] = useState(false)

  console.log(numbers)

  const fetchNumber = async () => {
    const response = await fetch('/api/numbers')
    console.log('hey there!')
    const data = await response.json()
    setGotData(true)
    setNumbers(data)
  }

  return (
    <div>
      <button onClick={fetchNumber}>Load number</button>
      {
        gotData ? (
          numbers.map(number => {
            console.log('I`ve got the data!')
            return (
              <div key={number}>
              Number: {number}<br/>
            </div>
            )
          }
          )
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
}

export default Page;