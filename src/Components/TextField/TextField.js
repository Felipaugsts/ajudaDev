import * as React from 'react';
import './field.css'
import magnify from '../../Assets/images/magnify.gif'

export default function TextField() {
  return (
<div className='field-wrapper'>
    <input type="text" placeholder='Pesquisar...' />
    <img className='field-icon' src={magnify} />

</div>
  );
}