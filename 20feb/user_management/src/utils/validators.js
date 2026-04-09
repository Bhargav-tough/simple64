export const validateUser = (form) => {
  const errors = {};
  
  if (!form.name.trim()) errors.name = "Full name is required";
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Valid email is required";
  }
  if (!form.contact.trim()) errors.contact = "Contact number is required";
  if (!form.designation.trim()) errors.designation = "Designation is required";
  if (!form.company.trim()) errors.company = "Company name is required";
  
  return errors;
};