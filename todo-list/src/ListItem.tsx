import {useState} from 'react'

type ListItemProps = {
    item:{
        id: number;
        done: boolean;
        text: string;
    }
    checkboxHandler: (id:number) => void
    deleteHandler: (id:number) => void
}


function ListItem (props: ListItemProps){

    const [hover, setHover]= useState<boolean>(false)

    return(
        <div className="list-item" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} >
            <label id='checkbox'> 
                <input type="checkbox" id='done-btn' checked={props.item.done} onChange = {() => props.checkboxHandler(props.item.id)} />
                <span id='checkmark'></span>
            </label>
            <p id='item-txt'>{props.item.text}</p>
            {hover && <button id='remove-btn' onClick={()=> props.deleteHandler(props.item.id)}>🗑️</button>}
        </div>

    )

}

export {ListItem}
export type {ListItemProps}