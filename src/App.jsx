
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <>
    
    <h3 className="text-center py-4">Hola Mundo</h3>
    <div className='text-center'>
        <FontAwesomeIcon icon={faHome} className='text-danger fs-1 mx-3 ' />
        <FontAwesomeIcon icon={faUser} className='text-success fs-1 mx-3'/>
        <FontAwesomeIcon icon={faCartShopping}  className='text-warning fs-1 mx-3'/>
    </div>
    <div className='text-center py-5'>

      <FontAwesomeIcon icon={faTruckFast} className='icono' />
    </div>
 

    </>
  )
}

export default App