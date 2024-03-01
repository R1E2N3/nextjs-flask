"use client";

import React, { useState } from 'react';

const FormTesting = () => {
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
        console.log(JSON.stringify(formData));
    
        try {
            const response = await fetch('https://python-api-autinosis.onrender.com/predict_adult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
    
            const responseData = await response.json();
            setResposta(responseData);
            console.log('Response:', responseData);
            console.log('heyyyyyy:', responseData.prediction);
            // Handle predictions as needed
        } catch (error) {
            console.error('Error making prediction:', error);
        }
    };
    

    return (
        <section className=''>
            <h1 className='head_text orange_gradient'>Teste para adultos.</h1>
            { resposta !== null ? (
                <div className='my-6'>
                    <p className='desc'>O seu resultado foi:</sp>
                    <p className='head_text'>{resposta}%</p>
                </div>
            ) : (
<form className='flex-col gap-4' onSubmit={handleSubmit}>
        <div className='my-10 flex-col'>
                <p className=''>Qual a sua idade?</p>
                <input 
                    className='number_input'
                    type="number" 
                    placeholder="18"
                    value={formData.Age} 
                    onChange={(e) => handleInputChange('Age', e.target.value)} 
                />
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Costuma notar pequenos sons quando outros não percebem?</p>
                <select className='select_form' value={formData.A1} onChange={(e) => handleInputChange('A1', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Normalmente concentra-se mais no todo, em vez de pequenos detalhes?</p>
                <select className='select_form' value={formData.A2} onChange={(e) => handleInputChange('A2', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Acha fácil fazer mais de uma coisa de uma só vez?</p>
                <select className='select_form' value={formData.A3} onChange={(e) => handleInputChange('A3', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Em caso de interrupção, consegue voltar ao que estava fazendo com facilidade?</p>
                <select className='select_form' value={formData.A4} onChange={(e) => handleInputChange('A4', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Acha fácil 'ler nas entrelinhas' quando alguém está falando contigo?</p>
                <select className='select_form' value={formData.A5} onChange={(e) => handleInputChange('A5', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Sabe dizer se alguém que está te ouvindo está ficando entediado?</p>
                <select className='select_form' value={formData.A6} onChange={(e) => handleInputChange('A6', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Quando está lendo uma história, acha difícil descobrir as intenções dos personagens?</p>
                <select className='select_form' value={formData.A7} onChange={(e) => handleInputChange('A7', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Gosta de coletar informações sobre categorias das coisas? (ex: tipos de carro, pássaro, trem, planta etc.)</p>
                <select className='select_form' value={formData.A8} onChange={(e) => handleInputChange('A8', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'> Acha fácil descobrir o que alguém está pensando ou sentindo apenas olhando no rosto da pessoa?</p>
                <select className='select_form' value={formData.A9} onChange={(e) => handleInputChange('A9', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Tem dificuldade em compreender as intenções das pessoas?</p>
                <select className='select_form' value={formData.A10} onChange={(e) => handleInputChange('A10', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Concordo totalmente</option>
                    <option value={2}>Concordo</option>
                    <option value={3}>Discordo</option>
                    <option value={4}>Discordo totalmente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Você tem icterícia?</p>
                <select className='select_form' value={formData.jundice} onChange={(e) => handleInputChange('jundice', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Sim</option>
                    <option value={0}>Não</option>
                </select>
            </div>
            {/* Submit Button */}
            <button className='ui_btn' type="submit">Enviar</button>
        </form>
            )}
            <br />
            <br />
        </section>
    );
}

export default FormTesting;
