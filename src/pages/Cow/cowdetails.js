import React from 'react'
import './cowdetails.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Cowdetails = () => {
  return (
<div className='details'>
        <h2>Cow Purchase</h2>
<form>

<label>Select Shed ID:</label>
<select className='select' >
    <option value={'shed1'}>Shed1</option>
    <option value={'shed2'}>Shed2</option>
    <option value={'shed3'}>Shed3</option>
</select>

<label>Select Shed ID:</label>
<input className='input' type='text'
required
/>

<label>Select Seat ID:</label>
<textarea
required
></textarea>
<label>Select Cow ID:</label>
<select className='select'>
    <option value={'cow1'}>Cow1</option>
    <option value={'cow2'}>Cow2</option>
    <option value={'cow3'}>Cow3</option>
</select>

<label>Select Date:</label>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>

<button className='button'>Submit</button>

</form>


</div>
  )
}
