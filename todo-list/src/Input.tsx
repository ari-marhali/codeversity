import {useState} from 'react'

export default function Input(props: {addFunction: (text: string)=> void}){

    const[text, setText]=useState('')

    return(
        <div id='add-form'>
            <input type="text" placeholder="New Item" id='text-field'value={text} onChange={event => setText(event.target.value)}/>
            <button id='add-btn' onClick={()=>{
                props.addFunction(text)
                setText("")
            }}>Add</button>
        </div>
    )
}