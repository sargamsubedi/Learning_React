
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increase, increaseBy } from './store/counterSlice';

export default function Counter() {
    const {count,name} = useSelector(state => state.counter)

    const dispatch = useDispatch();

    const [userEnteredName, setUserEnteredName] = useState("");

    return (
        <div>
            {/* for count related action */}
            <div>

                the count is : {count}
                <button onClick={() => dispatch(increase())}>  Increase</button>
                <button onClick={() => dispatch(increaseBy(5))}>  Increase count by 5</button>
            </div>

            {/* for name related action */}
            <div>
                <p>Welcome {name} </p>

                <input type="text" value={userEnteredName} onChange={(e) => setUserEnteredName(e.target.value)} />

                <button
                    onClick={() => {
                        dispatch(changeName(userEnteredName));
                        setUserEnteredName("")

                    }}>  Change name</button>
            </div>
        </div>
    )
}
