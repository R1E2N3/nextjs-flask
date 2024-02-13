"use client";

import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        Ethnicity: "",
        jundice: "",
        Gender: "f",
        Relation: "",
        Autism: 1,
        Result: 1,
        Target: "",
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        A5: "",
        A6: "",
        A7: "",
        A8: "",
        A9: "",
        A10: "",
        Age: 0,
    });

    const [resposta, setResposta] = useState(null);

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData))
        try {
            const response = await fetch('/api/adolescent/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...formData})
            }).then(response => response.json()).then(data => setResposta(data));

            console.log('Predictions:', resposta);
            // Handle predictions as needed
        } catch (error) {
            console.error('Error making prediction:', error);
        }
    };

    return (
        <section className=''>
        <h1 className='head_text orange_gradient'>Teste para adultos.</h1>
        { resposta || resposta == 0 ? (
            <div>
            {
                resposta < 10 ? (
                    <div>
                        <h2 className='desc'>O seu resultado foi:</h2>
                        <p className='sub_head'>Muito improvavél que você possua o TEA.</p>
                        <p className='desc'>Aviso ético: Esta ferramenta é apenas experimental e está sob desenvolvimento. 
                            Sempre consulte um profissional de 
                        </p>
                    </div>
                ) : (
                    <div></div>

                )
            }
            </div>
        ) : (
        <form className='flex-col gap-4' onSubmit={handleSubmit}>
        <div className='my-10 flex-col'>
                <p className=''>What's your age?</p>
                <input 
                    className='number_input'
                    type="number" 
                    placeholder="18"
                    value={formData.age} 
                    onChange={(e) => handleInputChange('age', e.target.value)} 
                />
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you have difficulty understanding people's intentions?</p>
                <select className='select_form' value={formData.A1} onChange={(e) => handleInputChange('A1', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you find it easy to figure out what someone is thinking or feeling just by looking at their face?</p>
                <select className='select_form' value={formData.A2} onChange={(e) => handleInputChange('A2', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you enjoy collecting information about categories of things? (e.g., types of cars, birds, trains, plants, etc.)</p>
                <select className='select_form' value={formData.A3} onChange={(e) => handleInputChange('A3', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>When reading a story, do you find it difficult to figure out the intentions of the characters?</p>
                <select className='select_form' value={formData.A4} onChange={(e) => handleInputChange('A4', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Can you tell if someone who is listening to you is getting bored?</p>
                <select className='select_form' value={formData.A5} onChange={(e) => handleInputChange('A5', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you find it easy to "read between the lines" when someone is talking to you?</p>
                <select className='select_form' value={formData.A6} onChange={(e) => handleInputChange('A6', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Are you able to easily return to what you were doing after an interruption?</p>
                <select className='select_form' value={formData.A7} onChange={(e) => handleInputChange('A7', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you find it easy to do more than one thing at once?</p>
                <select className='select_form' value={formData.A8} onChange={(e) => handleInputChange('A8', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you typically focus more on the big picture rather than small details?</p>
                <select className='select_form' value={formData.A9} onChange={(e) => handleInputChange('A9', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you often notice small sounds when others do not?</p>
                <select className='select_form' value={formData.A10} onChange={(e) => handleInputChange('A10', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Strongly agree</option>
                    <option value={2}>Agree</option>
                    <option value={3}>Disagree</option>
                    <option value={4}>Strongly disagree</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Do you have jaundice?</p>
                <select className='select_form' value={formData.jundice} onChange={(e) => handleInputChange('jundice', e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                </select>
            </div>
            {/* Submit Button */}
            <button className='ui_btn' type="submit">Submit</button>
        </form>
        )}

        {
            <div>
                {Object.keys(formData).forEach(function(key, index) {
                    <p>{formData.key}</p>
                })}
            </div>
        }

        <br></br>
        <br></br>
    </section>
    )
}

export default Form;
