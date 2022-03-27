import FilterInput from '../../Components/Filters/filter'
import './Home.css'

const filters = () => {
    
    const categories = [ 
        {name: "Development", icon: "code"},
        {name: "Cloud", icon: "cloud"},
        {name: "QA & Testing", icon: "qa"},
        {name: "UX/UI Design", icon: "design"}

    ]
    
    return ( 
        <div className='categorias-wrapper'>
            <p className='large heavy categorias-text'>Categorias</p>
            { 
            categories.map((category, i) => { 
                return ( 
                    <FilterInput key={i} filter={category} />
                )
            })
            }


        </div>
    )
}
export default filters