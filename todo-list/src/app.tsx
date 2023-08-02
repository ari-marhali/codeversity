import React, {useState} from 'react'
import {ItemProps} from './types.tsx'

export default function App (){

    const [allItems : string[], setItems: function] = useState(ItemProps[])
    return(
        <h1>Hello world!</h1>
    )
}