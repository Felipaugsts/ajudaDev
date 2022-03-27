
import './card.css'
import edit from '../../Assets/Icons/editable.gif'
import { Link } from 'react-router-dom'


    const Jobcard = ({job}) => { 
        const userUid = sessionStorage.getItem('uid')




   
    return ( 
        <div className='card-wrapper flex wrapper'>
            <div className='image-wrapper'>
                <div className='logo-wrapper wrapper'>
                    <img className='image'  src={job.url} alt="logo"></img>
                    
                </div>
            </div>
            <div className='description-wrapper'>
                    <div className='header'>
                        <span className='link medium description-address black capitalize'>{job.location.toLowerCase()}</span>
                        {
                            userUid === job.uid ? ( 
                                <Link to={`/list/${job.jobID}`}><img className='icon-edit' alt="edit" src={edit} /></Link>
                            ): (
                                ""
                            )}
                    </div>
                <div className='large heavy description-title capitalize'>{job.title.toLowerCase()}</div>

                <div className='description-informations flex spaced'>

            <div className='flex'>
            <div className='characteristic small'>
                {job.Field}
                        </div>
                        <div  className='characteristic black small'>
                        {job.remote ? "REMOTE" : "PRESENTIAL"}
                        </div>
            </div>

                <div className='medium date black'>
                    {
                        job.created.toDate().toDateString()
                    }
                </div>
        
                </div>

            </div>

        </div>
    )
}
export default Jobcard;