import Card from '../../Components/JobCard/JobCard'
import './Home.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const HomeList = ({jobs}) => {

  return (
      <div>
        {
          jobs.map((job, i) => { 
            return <Card key={i} job={job} />
          })
        }
      </div>
  );
}

export default HomeList;
