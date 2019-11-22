import React from 'react'
import {useDispatch} from 'react-redux'

/**
 * Component
 */

export default function Test(props) {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>TEST</h1>
            <button
                type="button"
                onClick={e =>
                    dispatch({
                        type: 'TEST_ACTION_1',
                        error: false,
                        payload: e.target.innerText,
                        meta: {}
                    })
                }
            >
                Dispatch Test Action 1
            </button>
            <button
                type="button"
                onClick={e =>
                    dispatch({
                        type: 'TEST_ACTION_2',
                        error: false,
                        payload: e.target.innerText,
                        meta: {}
                    })
                }
            >
                Dispatch Test Action 2
            </button>
            <button
                type="button"
                onClick={e =>
                    dispatch({
                        type: 'TEST_ACTION_3',
                        error: false,
                        payload: e.target.innerText,
                        meta: {}
                    })
                }
            >
                Dispatch Test Action 3
            </button>
        </div>
    )
}
