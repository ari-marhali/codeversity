import {useState} from 'react'
import {ListItem, ListItemProps} from './ListItem'

export default function App (){

    const [allItems , setItems] = useState<ListItemProps[]>(
        JSON.parse(localStorage.getItem('allItems')||'[]')
        )

        function changeHandler (id: number){
            setItems(prevItems => {
                return(
                    prevItems.map(item => (item.id===id? {...item, done: !item.done} : item))
                )
            })
        }

    const allItemsJSX : JSX.Element[] = allItems.map(i => {
        return(
            <ListItem 
            {...i}
            />
        )
    })

    localStorage.setItem('allItems',JSON.stringify(allItems))

    return(
        <div>
            <input type='text' />
            {allItemsJSX}
        </div>
    )
}