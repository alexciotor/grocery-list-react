const List = ({list,edit,remove})=>{
    return (
        <div className="list-container">
   {list.map(item=>{
       const{id,title}=item
           return <article key={id} >  
            <p >{title}</p>
        
            <button onClick={()=>{
                remove(id)
            }}>delete</button>
           </article>
        
   })}
</div>
    )
}
export default List