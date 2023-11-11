import {useNavigate} from 'react-router-dom'
//import '../App.css'

export const Home = () =>{
// this is for navigating to other pages from the homepage
    const navigate = useNavigate()
    return(
   <>
   <div style={{ }}
   
   >Home Page</div>
        
        <button onClick={() => {navigate('/weather')}}>Go to the weather page</button>
      
        
   </>
        
    )
}