import {useState} from 'react'
import {ListItem, ListItemProps} from './ListItem'
import Input from './Input.tsx'

export default function App (){

    const [allItems , setItems] = useState<ListItemProps[]>( JSON.parse(localStorage.getItem('allItems')||'[]'))
        

        function statusHandler (id: number){
            setItems(prevItems => {
                return(
                    prevItems.map(item => (item.id===id? {...item, done: !item.done} : item))
                )
            })
        }

        function removeHandler (id: number){
            setItems(prevItems =>{
                return(
                    prevItems.filter(item => item.id !== id)
                )
            })
            localStorage.setItem('allItems', JSON.stringify(allItems))
        }

        function addItem (text : string){
            setItems(prevItems => {
                return(
                    [{
                        id: !allItems.length? 1 : (allItems[0].id +1 ),
                        done: false,
                        text: text,
                        checkboxHandler: statusHandler,
                        deleteHandler: removeHandler
                    }, 
                    ...prevItems]
                )
            })
            localStorage.setItem('allItems', JSON.stringify(allItems))
        }

    const allItemsJSX : JSX.Element[] = allItems.map(i => {
        return(
            <ListItem 
            key= {i.id}
            {...i}
            />
        )
    })

    return(
        <div>
            <Input addFunction={addItem}/>
            {allItemsJSX}
        </div>
    )
}