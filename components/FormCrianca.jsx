"use client";

import React, { useState } from 'react';
import axios from 'axios';

const FormCrianca = () => {
    const [formData, setFormData] = useState({
        Ethnicity: "",
        Jaundice: 1,
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
        ASD_Family: 0,
        Age_Mons: 0,
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
            const response = await fetch('https://python-api-autinosis.onrender.com/predict_child', {
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
            setResposta(responseData['Result']);
            console.log('Response:', responseData);
            console.log('This was the Response:', responseData['Result'])
            console.log('heyyyyyy:', responseData.prediction);
            // Handle predictions as needed
        } catch (error) {
            console.error('Error making prediction:', error);
        }
    };

    return (
        <section className=''>
            <h1 className='head_text orange_gradient'>Teste para crianças.</h1>
            { resposta || resposta === 0 ? (
                <div>
                    {resposta}
                </div>
            ) : (
<form className='flex-col gap-4' onSubmit={handleSubmit}>
        <div className='my-10 flex-col'>
                <p className=''>Qual a idade da criança (em meses)</p>
                <input 
                    className='number_input'
                    type="number" 
                    placeholder="18"
                    value={formData.Age} 
                    onChange={(e) => handleInputChange('Age', e.target.value)} 
                />
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança olha para você quando chama pelo nome dela?</p>
                <select className='select_form' value={formData.A1} onChange={(e) => handleInputChange('A1', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Sempre</option>
                    <option value={2}>Habitualmente</option>
                    <option value={3}>As vezes</option>
                    <option value={4}>Raramente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>O quão fácil é para você conseguir contato visual com a criança?</p>
                <select className='select_form' value={formData.A2} onChange={(e) => handleInputChange('A2', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muito fácil</option>
                    <option value={2}>Bastante fácil</option>
                    <option value={3}>Bastante difícil</option>
                    <option value={4}>Muito difícil</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A sua criança aponta para indicar que quer alguma coisa?</p>
                <select className='select_form' value={formData.A3} onChange={(e) => handleInputChange('A3', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muitas vezes por dia</option>
                    <option value={2}>Algumas vezes por dia</option>
                    <option value={3}>Algumas vezes por semana</option>
                    <option value={4}>Menos de uma vez por semana</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança aponta para compartilhar interesse com você? (ex: apontar para um local interessante)</p>
                <select className='select_form' value={formData.A4} onChange={(e) => handleInputChange('A4', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muitas vezes por dia</option>
                    <option value={2}>Algumas vezes por dia</option>
                    <option value={3}>Algumas vezes por semana</option>
                    <option value={4}>Menos de uma vez por semana</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança 'faz de conta'? (ex: ao cuidar de bonecas ou usar um telefone de brinquedo)</p>
                <select className='select_form' value={formData.A5} onChange={(e) => handleInputChange('A5', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muitas vezes por dia</option>
                    <option value={2}>Algumas vezes por dia</option>
                    <option value={3}>Algumas vezes por semana</option>
                    <option value={4}>Menos de uma vez por semana</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança acompanha o seu olhar?</p>
                <select className='select_form' value={formData.A6} onChange={(e) => handleInputChange('A6', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muitas vezes por dia</option>
                    <option value={2}>Algumas vezes por dia</option>
                    <option value={3}>Algumas vezes por semana</option>
                    <option value={4}>Menos de uma vez por semana</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Se você ou alguém da família estiver visivelmente aborrecido, a criança mostra sinais de querer confortá-lo?</p>
                <select className='select_form' value={formData.A7} onChange={(e) => handleInputChange('A7', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Sempre</option>
                    <option value={2}>Habitualmente</option>
                    <option value={3}>As vezes</option>
                    <option value={4}>Raramente</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>Descreveria as primeiras palavras da sua criança como?</p>
                <select className='select_form' value={formData.A8} onChange={(e) => handleInputChange('A8', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muito comuns</option>
                    <option value={2}>Bastante comuns</option>
                    <option value={3}>Ligeiramente comuns</option>
                    <option value={4}>Muito incomuns</option>
                    <option value={5}>Minha criança não fala</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança usa gestos simples (ex: acenar adeus)?</p>
                <select className='select_form' value={formData.A9} onChange={(e) => handleInputChange('A9', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muitas vezes por dia</option>
                    <option value={2}>Algumas vezes por dia</option>
                    <option value={3}>Algumas vezes por semana</option>
                    <option value={4}>Menos de uma vez por semana</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança olha fixamente para o nada sem razão aparente?</p>
                <select className='select_form' value={formData.A10} onChange={(e) => handleInputChange('A10', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Muitas vezes por dia</option>
                    <option value={2}>Algumas vezes por dia</option>
                    <option value={3}>Algumas vezes por semana</option>
                    <option value={4}>Menos de uma vez por semana</option>
                </select>
            </div>
            <div className='my-10 flex-col'>
                <p className='desc'>A criança possui icterícia?</p>
                <select className='select_form' value={formData.Jaundice} onChange={(e) => handleInputChange('Jaundice', e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value={1}>Sim</option>
                    <option value={0}>Não</option>
                </select>
            </div>

            <div className='my-10 flex-col'>
                <p className='desc'>Alguem na família possuí TEA?</p>
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

export default FormCrianca;
