import { ItemProps } from "./types";

export default function Item (props: ItemProps){
    <input type="checkbox" checked={props.done} onChange={props.changeHandler}
}