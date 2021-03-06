import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styled'

const QuotesForm = ({userId}) => {
    const [message, setMessage] = useState('');
    return (
        <Container>
            <h2>Crear Quote</h2>
            <Formik
                initialValues={{ text: '', author: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.text) {
                        errors.text = 'Requerido';
                    }
                    if (!values.author) {
                        errors.author = 'Requerido';
                    }

                    return errors;
                }}
                onSubmit={
                    async (values, { setSubmitting }) => {
                        try {
                            const res = await axios.post('/api/quotes/create', {...values, user_id:userId})
                            const data = await res.data
                            setSubmitting(false);
                            setMessage(`Post creado, thanks ${data.text} (${res.status})`)
                        } catch (error) {
                            if (error.response) {
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            } else if (error.request) {
                                console.log(error.request);
                            } else {
                                console.log('Error', error.message);
                            }
                            console.log(error);
                        }
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input_row">
                            <Field type="text" name="text" placeholder="Cita" />
                            <ErrorMessage name="text" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="text" name="author" placeholder="Autore" />
                            <ErrorMessage name="author" component="div" />
                        </div>

                        <div className='btn-container'>
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
            <p className='message'>{message}</p>
            </div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default QuotesForm;