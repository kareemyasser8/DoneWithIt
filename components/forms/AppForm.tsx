import { Formik, FormikHelpers, FormikState } from 'formik';
import React, { ReactNode } from 'react';
import * as Yup from 'yup';
interface Props {
  initialValues: any
  onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void
  validationSchema: Yup.ObjectSchema<any>
  children: ReactNode
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  )
}

export default AppForm
