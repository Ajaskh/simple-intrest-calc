import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

import './App.css';
import { useState } from 'react';

function App() {

  const [principal, setPrincipal]= useState("")

  const [rate, setRate]= useState("")

  const [year, setYear]= useState("")

  const [interest, setInterest]= useState(0)

  const calculateInterest = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    console.log(principal, rate, year);

    if (!principal || !rate || !year) {
      alert("Please fill out all fields completely");
    } else {
      setInterest((principal * rate * year) / 100);
    }
  }

  const resetForm = () => {
    setPrincipal("");
    setRate("");
    setYear("");
    setInterest(0);
  }

  return (
    <>
      <div className='app'>
        <div className='container'>
          <div className='heading-text'>
            <h1 className='title'>SIMPLE INTEREST</h1>
            <p className='title-para'>Calculate Your Simple Interest Easily</p>
          </div>

          <div className='amount-card'>
            <div className='card-text'>
              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>total simple interest</p>
            </div>
          </div>

          <form onSubmit={calculateInterest}>
            <div className='text-field'>
              {/* Principal amount */}
              <div className='output'>
                <TextField 
                  value={principal}
                  onChange={e => setPrincipal(e.target.value)}
                  id="outlined-basic"
                  label="₹ Principal"
                  variant="outlined"
                />
              </div>

              {/* Rate of interest */}
              <div className='output'>
                <TextField 
                  value={rate}
                  onChange={e => setRate(e.target.value)}
                  id="outlined-basic"
                  label="Rate of Interest (P.A)%"
                  variant="outlined"
                />
              </div>

              {/* Time period */}
              <div className='output'>
                <TextField 
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  id="outlined-basic"
                  label="Time Period (year)"
                  variant="outlined"
                />
              </div>
            </div>

            {/* Button group */}
            <div className='btn-group'>
              <Stack direction="row" spacing={2}>
                <Button type='submit' className='btn' style={{ backgroundColor: 'black' }} variant="contained">CALCULATE</Button>
                <Button onClick={resetForm} className='btn' style={{ backgroundColor: 'green' }} variant="contained">RESET</Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
