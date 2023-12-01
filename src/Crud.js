import React,{useState} from 'react'

function Crud(){
    const list=[
        {
            id:1,
            name:"kaliyamma",
            age:20

        },
        {
            id:2,
            name:"sivakumaar",
            age:20

        }
]

    const[lists,setList]=useState(list)
    const[update,setUpdate]=useState(list)
    return(
        <div className='table'>
            <AddList setList={setList}/>
        <form onSubmit={handleUpdate}>
            <table>
                <th>S.no</th>
                <th>Name</th>
                <th>Age</th>
                <th>Edit/Delete</th>
                {
                    lists.map((current)=>(
                        update===current.id ? <Edit current={current} lists={lists} setList={setList}/>:
                      
                        <tr>
                        <td>{current.id}</td>
                        <td>{current.name}</td>
                        <td>{current.age}</td>
                        <td>
                            <div>
                            <button className='edit' onClick={()=>handleEdit(current.id)}>Edit</button>
                            <button className='delete' onClick={()=>handleDelete(current.id)}>Delete</button>
                            </div>
                        </td>

                    </tr>
                       
                    ))
                }

            </table>
            </form>

        </div>
    )
    function handleUpdate(e){
        e.preventDefault();
        setUpdate(-1)
      
    }

    function handleEdit(id){
        setUpdate(id)

    }


    function handleDelete(id){
     const final= lists.filter((li)=>li.id!=id)
     setList(final)

    }

    function Edit({current,lists,setList}){
        function handleInput(e){
            const newList=lists.map(li=>(
                li.id===current.id ? {...li,[e.target.name] : e.target.value}:li
            ))
            setList(newList)
                
            

        }

        return(
            <tr>
                
               <td> <input type='text' name='id' onChange={handleInput} value={current.id}/></td>
               <td><input type='text' name='name' onChange={handleInput} value={current.name}/></td>
              <td><input type='text' name='age' onChange={handleInput} value={current.age}/></td>
                <td><button type='submit'>Update</button></td>
            </tr>
        )
    }
}


function AddList({setList}){
    function rand(){
        return(
           parseInt( Math.random()*100)
        )

    }


    function handleSubmit(e){
        e.preventDefault();
        const name=e.target.elements.name.value;
        const age=e.target.elements.age.value;
        
        const newList={
            id:rand(),
            name,
            age
        }
        setList((pvList)=>{
            return pvList.concat(newList)
        })

    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter your name'/>
            <input type='text' name='age' placeholder='Enter your age'/>
            <button type='submit' className='add'>Add</button>
        </form>
    )
}

export default Crud;