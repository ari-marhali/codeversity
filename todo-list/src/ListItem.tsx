
type ListItemProps = {
    id: number;
    done: boolean;
    text: string;
    changeHandler: (id:number) => void
}


function ListItem (props: ListItemProps){
    return(
    <input type="checkbox" checked={props.done} onChange = {() => props.changeHandler(props.id)} />
    )

}

export {ListItem}
export type {ListItemProps}