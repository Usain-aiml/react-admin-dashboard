// import { createContext, useContext, useState } from "react";

// const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formFields, setFormFields] = useState([]);
//   const [selectedField, setSelectedField] = useState(null);

//   // Add Component
//   const addField = (field) => {
//     setFormFields((prev) => [
//       ...prev,
//       {
//         ...field,
//         id: Date.now(),
//       },
//     ]);
//   };

//   // Select Component
//   const selectField = (id) => {
//     const field = formFields.find((item) => item.id === id);
//     setSelectedField(field);
//   };

//   return (
//     <FormContext.Provider
//       value={{
//         formFields,
//         setFormFields,
//         selectedField,
//         setSelectedField,
//         addField,
//         selectField,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useForm = () => useContext(FormContext);
