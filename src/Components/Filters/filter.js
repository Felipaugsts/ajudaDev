
import bi from '../../Assets/Icons/bi.gif'
import './filter.css'
const filterField = (fil) => { 


    return ( 
            <div className='form-wrapper'>
                <div className='form'>
                <img className='icon' src={require(`../../Assets/Icons/${fil.filter.icon}.gif`)} />
                <span className='text medium black'>{fil.filter.name}</span>
                </div>
                <input class="form-check-input shadow black" type="checkbox" value="" id="flexCheckDefault" disabled />
         
            </div>
    )
}
export default filterField