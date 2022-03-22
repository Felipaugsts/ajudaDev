import Card from '../../Components/JobCard/JobCard'
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
       </div>
    </div>

  );
}

export default HomeList;
