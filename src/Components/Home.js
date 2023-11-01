import {useNavigate} from 'react-router-dom'
import '../App.css'

export const Home = () =>{
// this is for navigating to other pages from the homepage
    const navigate = useNavigate()
    return(
   <>
   <div className='home'
   
   >Home Page</div>
        
        <button onClick={() => {navigate('/weather')}}>Go to the weather page</button>
        {/* <button onClick={() => {navigate('/todolist')}}>Go to the To do list page</button> */}
        
   </>
        
    )
}