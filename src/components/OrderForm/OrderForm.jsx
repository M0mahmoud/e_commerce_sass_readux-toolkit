import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import "../../pages/orderSummary/orderSummary.scss";

function OrderForm({ onSubmit }) {
  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Form>
        <div>
          <label className="order-summary__form-label" htmlFor="fullName">
            Full Name
          </label>
          <Field
            className="order-summary__form-input"
            type="text"
            id="fullName"
            name="fullName"
          />
          <ErrorMessage name="fullName" />
        </div>

        <div>
          <label className="order-summary__form-label" htmlFor="email">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="order-summary__form-input"
          />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label className="order-summary__form-label" htmlFor="address">
            Address
          </label>
          <Field
            type="text"
            id="address"
            name="address"
            className="order-summary__form-input"
          />
          <ErrorMessage name="address" />
        </div>

        <div>
          <label className="order-summary__form-label" htmlFor="city">
            City
          </label>
          <Field
            type="text"
            id="city"
            name="city"
            className="order-summary__form-input"
          />
          <ErrorMessage name="city" />
        </div>

        <div>
          <label className="order-summary__form-label" htmlFor="zipCode">
            Zip Code
          </label>
          <Field
            type="text"
            id="zipCode"
            name="zipCode"
            className="order-summary__form-input"
          />
          <ErrorMessage name="zipCode" />
        </div>

        <button type="submit" className="order-summary__submit-button">
          Save Your Data
        </button>
      </Form>
    </Formik>
  );
}

export default OrderForm;
