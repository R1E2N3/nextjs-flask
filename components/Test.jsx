"use client";

import React, { useState } from 'react';

const TestForm = () => {

    const [formData, setFormData] = useState({
        A1: '',
        A2: ''
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/adult/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([fname])
            });

            const responseData = await response.json();
            setResponse(responseData.result);
        } catch (error) {
            console.error('Error', error)
        }
    };

    return (
        <div>
            <h1 className='head_text'>Test</h1>
            <form onSubmit={handleSubmit}>
            <div class="flex items-center mb-4">
                <input id="A1" type="radio" value="0" name="A1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
            </div>
            <div class="flex items-center">
                <input checked id="A2" type="radio" value="0" name="A2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
            </div>
            </form>
        </div>
    )
}

export default TestForm