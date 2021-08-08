import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

export const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

export const Users = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => {
                return <div key={i}>{u}</div>
            })}
        </div>
    )
}

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Denis', 'Dima'])

    const countHandler = () => setCounter(counter + 1)


    return (
        <div>
            <button
                onClick={countHandler}>
                +
            </button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    )
}