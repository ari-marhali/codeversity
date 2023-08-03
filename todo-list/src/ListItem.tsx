import {useState} from 'react'

type ListItemProps = {
    id: number;
    done: boolean;
    text: string;
    checkboxHandler: (id:number) => void
    deleteHandler: (id:number) => void
}


function ListItem (props: ListItemProps){

    const [hover, setHover]= useState<boolean>(false)

    return(
        <div className="list-item" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} >
            <input type="checkbox" checked={props.done} onChange = {() => props.checkboxHandler(props.id)} />
            <p>{props.text}</p>
            {hover && <button className='remove' onClick={()=> props.deleteHandler(props.id)}>Remove</button>}
        </div>

    )

}

export {ListItem}
export type {ListItemProps}