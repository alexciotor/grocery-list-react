import './App.scss';
import React, {useState} from 'react'
import List from './components/list'
function App() {
  const [name,setName ] = useState('')
 const [list,setList] = useState([])
const[reEdit,isReedit]=useState(false)
const [editID,setEditId]=useState(null)
 console.log(editID);
   
    const handlesubmit=(e)=>{
    e.preventDefault()

if(name){
const newItem = {
  id:new Date().getTime().toString(),
  title:name}
setList([...list, newItem])
setName('')
 }
 
 else if(name && isReedit){
   console.log(list);
  setList(list.map((item)=>{
    if(item.id ===editID){
  
     
      return {...item, title:name}
    }
    return item
  }))
  setName('')
  setEditId(null)
  isReedit(false)
 
 }
 else {
 
console.log('hello');
 

    }
  }
  const remove =(id)=>{
    setList(list.filter((item)=>item.id!==id))
  }


      const edit=(id)=>{
    const specific = list.find((item)=>item.id===id)
      isReedit(true)
      setEditId(id)
      setName(specific.title)
    }
  return (
    <div className='container' >
    <form onSubmit={handlesubmit}>
  
    
<div className="title"><h4>Grocery list</h4></div>
<div className="list-container">
  <input type="text" value = {name}
  onChange={(e)=>{
 setName(e.target.value)
  }}
    />
  
    <button type='submit' className="btn">submit</button>
    </div>
        </form>
<List edit={edit} remove = {remove} list={list}/>
<br/>
<button onClick={()=>{
  setList([])
}} type='button' className="clear">clear</button>


    </div>
  );
}

export default App;
