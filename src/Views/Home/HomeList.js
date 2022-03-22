import Card from '../../Components/JobCard/JobCard'
import TextField from '../../Components/TextField/TextField'
import './Home.css'
const HomeList = () => {
  return (
    <div className='card-wrapper flex wrap justify-center'>
      <div className='card-list'>
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />

       <Card />
       <Card />
       
       </div>
       <div className='card-filters'>
         Filters
         <div className='wrapper  search-field-wrapper'>
           <TextField />
         </div>
       </div>
    </div>

  );
}

export default HomeList;
