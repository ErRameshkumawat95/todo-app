import React from 'react'

export default function BulkActions({ onMarkCompleted, onMarkPending, onHandleDelete, callAction }) {
    
    return (
        <div>
            <select onChange={callAction}>
                <option value="none">Select Action</option>
                <option value="mark-completed">Mark Completed</option>
                <option value="mark-pending">Mark Pending</option>
                <option value="delete">Delete</option>
            </select>
        </div>
    )
}
