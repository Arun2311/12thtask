import React, {useState,useEffect } from 'react'
import './tours.css'
function Tours() {
  const [datas, setDatas] = useState([])
  

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project').then(response => response.json())
    .then(data=>setDatas(data.slice(0,200)))
  }, []) 

  const handleDelete=(id)=>{
      let nList=datas.filter(data=>data.id !==id);
      setDatas(nList)
  }
  const[read,setRead]=useState(false)
  const handleToggle = (e) => {e.preventDefault(); setRead(!read ) }
  
  
  return (    
    <div>
        
<div class='tour'>
             {datas.length>0?(
                 <>

<div className="text-center"><h1>Our Tours</h1></div>
      {datas.map(data => <div key={data.id}>
          <div class='image'>
              
          <img src={data.image} height="400"/>
          <div class="display">
          <h4 class="name">{data.name}</h4>
            <h6  className="price">$ {data.price}</h6>
            </div>
            <div>
            <p class="read">{read ? data.info : data.info.slice(0, 200)}
                <a href="#"class="color" onClick={handleToggle}>{read ? 'Show Less' : 'Read More'}</a>
            </p>
         
        </div>
            
            <div class="text text-center"><button type="button" class="button btn btn-outline-danger" onClick={() =>handleDelete(data.id)}>Not Interested</button></div>

    

          </div>
      </div>)}

      </>
             ):(
                 <h2 className='text-center '>NO TOURS AVAILABLE
                     <br/><br/><br/>
                 <button className='btn btn-primary text-center' onClick={()=>window.location.reload()}>REFRESH</button>
                 </h2>
             )}
</div>

    </div>
  )
}

export default Tours