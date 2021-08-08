import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

export const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

export const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => {
                return <div key={i}>{u}</div>
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret)


export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Denis', 'Dima', 'Liudmila', 'Jenya'])

    const countHandler = () => setCounter(counter + 1)
    const addUser = () => {
        const newUser=[...users,'Sasha']
        setUsers(newUser)
    }


    return (
        <div>
            <button onClick={countHandler}>+</button>
            <button onClick={addUser}>addUser</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    )
}