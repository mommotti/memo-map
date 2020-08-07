import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { createLogEntry } from '../API'

const LogEntryForm = ({ location, onClose }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            data.latitude = location.latitude
            data.longitude = location.longitude
            await createLogEntry(data)
            onClose()
        } catch (error) {
            console.error(error)
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <form autocomplete="off" onSubmit={handleSubmit(onSubmit)} className="entry-form">
            {error ? <h3 className="error">{error}</h3> : null}
            <label htmlFor="apiKey">API KEY</label>
            <input type="password" name="apiKey" required ref={register} />
            <label htmlFor="title">Title</label>
            <input name="title" required ref={register} />
            <label htmlFor="comments">Comments</label>
            <textarea name="comments" rows={3} ref={register}></textarea>
            <label htmlFor="description">Description</label>
            <input name="description" ref={register} />
            <label htmlFor="image">Image <small>(url)</small></label>
            <input name="image" ref={register} />
            <label htmlFor="visitDate">Visit Date</label>
            <input name="visitDate" type="date" ref={register} required />
            <button disabled={loading}>{loading ? 'Loading...' : 'Create pin'}</button>
        </form>
    );
}

export default LogEntryForm;
