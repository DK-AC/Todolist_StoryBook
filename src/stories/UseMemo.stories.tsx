import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo demo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a}
                   onChange={(e) => {
                       setA(+e.currentTarget.value)
                   }}/>
            <input value={b}
                   onChange={(e) => {
                       setB(+e.currentTarget.value)
                   }}/>
            <div>
                Result for a:{resultA}
            </div>
            <div>
                Result for b:{resultB}
            </div>
        </>
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


export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Denis', 'Dima', 'Liudmila', 'Jenya'])

    const countHandler = () => setCounter(counter + 1)
    const addUser = () => {
        const newUser = [...users, 'sasha']
        setUsers(newUser)
    }

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])


    return (
        <div>
            <button onClick={countHandler}>+</button>
            <button onClick={addUser}>add user</button>
            <Users users={newArray}/>
        </div>
    )
}