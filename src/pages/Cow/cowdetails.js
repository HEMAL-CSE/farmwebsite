import React from 'react'

export const Cowdetails = () => {
  return (
<div>
        <h2>Cow Purchase</h2>
<form>

<label>Select Shed ID:</label>
<select>
    <option value={'shed1'}>Shed1</option>
    <option value={'shed2'}>Shed2</option>
    <option value={'shed3'}>Shed3</option>
</select>

<label>Select Shed ID:</label>
<input 
type='text'
required
/>

<label>Select Seat ID:</label>
<textarea
required
></textarea>
<label>Select Cow ID:</label>
<select>
    <option value={'cow1'}>Cow1</option>
    <option value={'cow2'}>Cow2</option>
    <option value={'cow3'}>Cow3</option>
</select>
<button>Submit</button>

</form>


</div>
  )
}
