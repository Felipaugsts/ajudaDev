import './card.css'
import logo from '../../Assets/images/java.png'
const jobcard = () => { 

    return ( 
        <div className='card flex shadow'>
            <div className='image-wrapper'>
                <div className='logo-wrapper shadow'>
                    <img className='image' src={logo}></img>
                    
                </div>
            </div>
            <div className='description-wrapper'>
                <div className='link medium description-address'>Lisboa, Portual</div>
                <div className='large heavy description-title'>Talent Acquisition Trainee</div>

                <div className='description-informations flex spaced'>

            <div className='flex'>
            <div className='characteristic small'>
                DEVELOPMENT
                        </div>
                        <div className='characteristic small'>
                REMOTE
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