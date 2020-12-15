import React from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'

import './login.css'

export default function Login() {
  const Submit = () => {
    console.log('handleSubmit dos meninos')
  }

  return (
    <div className='form'>
      <Formik
        initialValues={{
          email: '',
          name: '',
          cpf: '',
          telephone: '',
        }}
        onSubmit={Submit}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required()
            .min(3, 'email precisa ter no minimo 6 caracteres')
            .max(130, 'email excedeu o maximo de caracteres'),
          name: Yup.string().required('bota o nome ai '),
          cpf: Yup.number().required('cpf ai meu bom').max(11, 'cpf meu bom'),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <div>
            <p>Login</p>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Endereço de email'
              />
              {errors.email && touched.email && <h5>{errors.email}</h5>}
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor='name'>Nome</label>
              <input
                type='name'
                id='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Insira seu Nome'
              />
              {errors.name && touched.name && <h5>{errors.name}</h5>}
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor='cpf'>Cpf</label>
              <input
                type='cpf'
                id='cpf'
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Insira seu Nome'
              />
              {errors.cpf && touched.cpf && <h5>{errors.cpf}</h5>}
            </div>
            <input
              type='submit'
              onClick={handleSubmit}
              disabled={isSubmitting}
              value='Logar'
            />
          </div>
        )}
      </Formik>
    </div>
  )
}
