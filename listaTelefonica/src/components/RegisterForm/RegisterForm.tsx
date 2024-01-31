import React from 'react';
import './Register.css'
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

import { FormValues } from './RegisterInterface.s';


// Defina o esquema Yup para validação
const validationSchema = Yup.object({
  nome: Yup.string().max(100, 'No máximo 100 caracteres').required('Campo obrigatório'),
  num: Yup.string()
    .max(13, 'No máximo 13 caracteres')
    .matches(/^\d+$/, 'Deve conter apenas números')
    .required('Campo obrigatório'),
  obs: Yup.string(),
});

const RegisterForm: React.FC = () => {

  // Função de envio do formulário
  const onSubmit = (values: FormValues) => {
    axios.post('https://backend-telefonica.onrender.com/lista',{
      "nome_pessoa": values.nome,
      "numero_pessoa": values.num,
      "observacao": values.obs
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <Formik
      initialValues={{ nome: '', num: '', obs: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Field type="text" id="nome" name="nome" placeholder="Digite o nome..." />
          <ErrorMessage name="nome" component="div" className='erro' />
        </div>
        <div>
          <label htmlFor="num">Número:</label>
          <Field type="text" id="num" name="num" placeholder="Digite o numero..." />
          <ErrorMessage name="num" component="div" className='erro' />
        </div>
        <div>
          <label htmlFor="obs">Observação:</label>
          <Field type="text" id="obs" name="obs" placeholder="Opcional" />
          <ErrorMessage name="obs" component="div" className='erro' />
        </div>

        <button className='submit-bottom' type="submit">Cadastrar</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
