import React from 'react';
import { useId } from 'react';
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import css from './OrderForm.module.css';
import * as Yup from 'yup';

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: '' | 'morning' | 'afternoon' | 'evening';
  delivery: ('pickup' | 'courier' | 'drone')[];
  restrictions: string[];
  message: string;
}

const initialValues: OrderFormValues = {
  username: '',
  email: '',
  deliveryTime: '',
  delivery: [],
  restrictions: [],
  message: '',
};

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export default function OrderForm() {
  const fieldId = useId();
  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>,
  ) => {
    console.log('Order data:', values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderFormSchema}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>

          <label className={css.label} htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`${fieldId}-username`}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />

          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`${fieldId}-email`}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </fieldset>
        <label htmlFor={`${fieldId}-deliveryTime`}>
          Preferred delivery time
        </label>
        <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </Field>
        <label>
          <Field type="radio" name="delivery" value="pickup" />
          Pickup
        </label>
        <label>
          <Field type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <Field type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>

        <label>
          <Field type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <Field type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <Field type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
        <label htmlFor="message">Comment or instructions</label>
        <Field as="textarea" name="message" id="message" rows={5} />

        <button className={css.btn} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
