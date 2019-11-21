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
                        type: 'ON_RESET',
                        error: false,
                        payload: e.target.innerText,
                        meta: {}
                    })
                }
            >
                Dispatch Action
            </button>
        </div>
    )
}
