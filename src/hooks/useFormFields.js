import { useState } from "react";

export default function useFormFields(initialValues) {
  const [fields, setFields] = useState(initialValues);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    console.log(fields);
  };

  return [fields, handleFieldChange];
}
