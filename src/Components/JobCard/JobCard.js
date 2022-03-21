import './card.css'
import google from '../../Assets/images/google.png'
const jobcard = () => { 

    return ( 
        <div className='card flex'>
            <div className='card-logo'>
                <img className='logo' src={google} />
            </div>
            <div className='flex column info-wrapper'>
                <div className='xlarge title '>job Title web developer full stack / Senior</div>
                <div className='small subtitle'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod mauris vitae tristique porta. Suspen
                disse sed ligula metus. In et commodo erat, vitae commodo ligula. Donec sit amet elit est. 
                Pellentesque vitae dolor eu turpis venenatis feugiat. Duis vel velit purus.</div>
            
                <div className='flex requiriments-container'>
                <div className='xsmall requiriments-text'>React  </div>
                <div className='xsmall requiriments-text'>HTML   </div>
                <div className='xsmall requiriments-text'>CSS   </div>
                <div className='xsmall requiriments-text'>TYPESCRIPT   </div>
                <div className='xsmall requiriments-text'>REDUX   </div>
                <div className='xsmall requiriments-text'>VUETIFY   </div>
                <div className='xsmall requiriments-text'>CSS   </div>
            </div>
            </div>
        </div>
    )
}
export default jobcard;