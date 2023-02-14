import { Field, Form, Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';

const InputSearch = () => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(`${values.query}`);
      }}
    >
      {(formikProps) => (
        <Form className="text-primary-grayDark wrapper w-[100%] max-w-[465px] m-1 h400-normal-13px h-[46px] border-[1px] border-primary-gray rounded-full">
          <div className="searchBar w-[100%] flex flex-row items-center rounded-[23px] bg-white h-[100%]">
            <Field
              id="searchInput"
              type="text"
              placeholder="¿Qué quieres ver en tu ciudad?"
              className="w-[100%] bg-transparent ml-[24px] focus:outline-none"
              name="query"
              onChange={formikProps.handleChange}
              value={formikProps.values.query}
            />
            <button
              type="submit"
              className="mr-[20px]"
              disabled={!formikProps.values.query}
            >
              <AiOutlineSearch className="lens text-primary-grayDark text-2xl" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InputSearch;
