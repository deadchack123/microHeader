import React, {useEffect, useState} from "react";

export const Header = () => {
    const [todo, setTodo] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [])

    return <>
        <div style={{width: '100%', height: '50px', backgroundColor: 'palegreen'}}>Вот это магия</div>
        {todo?.length ? todo.map(t => {
            return <div>{t.title}</div>
        }) : 'загрузка'}
    </>
}