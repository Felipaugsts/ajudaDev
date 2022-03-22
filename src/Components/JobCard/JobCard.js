import './card.css'
import logo from '../../Assets/images/java.png'
const jobcard = ({job}) => { 

    return ( 
        <div className='card flex wrapper'>{
            console.log("job", job)
        }
            <div className='image-wrapper'>
                <div className='logo-wrapper wrapper'>
                    <img className='image' src={logo} alt="logo"></img>
                    
                </div>
            </div>
            <div className='description-wrapper'>
                <div className='link medium description-address capitalize'>{job.location.toLowerCase()}</div>
                <div className='large heavy description-title capitalize'>{job.title.toLowerCase()}</div>

                <div className='description-informations flex spaced'>

            <div className='flex'>
            <div className='characteristic small'>
                {job.Field}
                        </div>
                        <div  className='characteristic small'>
                        {job.remote ? "REMOTE" : "PRESENTIAL"}
                        </div>
            </div>

                <div className='medium'>
                    15 de marco de 2022
                </div>
        
                </div>

            </div>

        </div>
    )
}
export default jobcard;