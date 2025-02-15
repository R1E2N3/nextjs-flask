"use client";

import React, { useState } from 'react';

const FormAdolescent = () => {
  const [processando, setProcessando] = useState(false);
  const [resposta, setResposta] = useState(null);

  // Collect all your form fields, including renamed "email" (previously "Target").
  const [formData, setFormData] = useState({
    Ethnicity: "",
    jundice: "",
    Gender: "f",
    Relation: "",
    Autism: 1,
    Result: 1,
    email: "",  // Renamed from "Target" to "email"
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

  // Updates formData with the given field name and value
  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    setProcessando(true);

    try {
      // 1) Get the prediction from your Python API
      const response = await fetch('https://python-api-autinosis.onrender.com/predict_adolescent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prediction');
      }

      const responseData = await response.json();
      // Python returns { "Result": someNumber }
      const result = responseData['Result'];
      setResposta(result);

      // 2) Send the email with the result to your new Flask endpoint
      // Adjust the URL if your Flask server is hosted elsewhere
      const emailResponse = await fetch('https://python-api-autinosis.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          result: result,
        }),
      });
      

      const emailData = await emailResponse.json();
      if (!emailResponse.ok) {
        console.error('Failed to send email:', emailData.error);
      } else {
        console.log('Email sent successfully');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    } finally {
      setProcessando(false);
    }
  };

  return (
    <section className=''>
      <h1 className='head_text orange_gradient'>Teste para adolescentes.</h1>

      {/* If resposta has a value, show the result; otherwise show the form */}
      {resposta || resposta === 0 ? (
        <div>
          <p className='desc'>O seu resultado foi:</p>
          <p className='head_text'>{Math.trunc(resposta)}%</p>
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
            <p className='desc'>Você sempre percebe padrões nas coisas?</p>
            <select
              className='select_form'
              value={formData.A1}
              onChange={(e) => handleInputChange('A1', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Normalmente concentra-se mais no todo, em vez de pequenos detalhes?</p>
            <select
              className='select_form'
              value={formData.A2}
              onChange={(e) => handleInputChange('A2', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>
              Quando está em um grupo social, consegue facilmente acompanhar conversas de várias pessoas?
            </p>
            <select
              className='select_form'
              value={formData.A3}
              onChange={(e) => handleInputChange('A3', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Em caso de interrupção, consegue voltar ao que estava fazendo com facilidade?</p>
            <select
              className='select_form'
              value={formData.A4}
              onChange={(e) => handleInputChange('A4', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Frequentemente nota que não consegue manter uma conversa?</p>
            <select
              className='select_form'
              value={formData.A5}
              onChange={(e) => handleInputChange('A5', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Socialmente, é bom em tagarelar?</p>
            <select
              className='select_form'
              value={formData.A6}
              onChange={(e) => handleInputChange('A6', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>
              Quando mais novo, gostava de brincar de faz-de-conta com outras crianças?
            </p>
            <select
              className='select_form'
              value={formData.A7}
              onChange={(e) => handleInputChange('A7', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Tem dificuldades em imaginar como seria ser outra pessoa?</p>
            <select
              className='select_form'
              value={formData.A8}
              onChange={(e) => handleInputChange('A8', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Acha situações sociais algo fácil?</p>
            <select
              className='select_form'
              value={formData.A9}
              onChange={(e) => handleInputChange('A9', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Tem dificuldade em fazer novos amigos?</p>
            <select
              className='select_form'
              value={formData.A10}
              onChange={(e) => handleInputChange('A10', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Concordo totalmente</option>
              <option value={2}>Concordo</option>
              <option value={3}>Discordo</option>
              <option value={4}>Discordo totalmente</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Você tem icterícia?</p>
            <select
              className='select_form'
              value={formData.jundice}
              onChange={(e) => handleInputChange('jundice', e.target.value)}
            >
              <option value="">Selecione uma opção</option>
              <option value={1}>Sim</option>
              <option value={0}>Não</option>
            </select>
          </div>

          <div className='my-10 flex-col'>
            <p className='desc'>Qual é o seu email?</p>
            <input
              className='text_input'
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button className='ui_btn' type="submit">Enviar</button>
          {processando && !resposta ? (
            <div>
              <p className='text-xl font-semibold'>Processando...</p>
            </div>
          ) : null}
        </form>
      )}
      <br />
      <br />
    </section>
  );
};

export default FormAdolescent;
