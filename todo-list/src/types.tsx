
export type ItemProps = {
    done: boolean;
    text: string;
    changeHandler: CheckBoxHandler
}

export type CheckBoxHandler = (input : boolean) => boolean