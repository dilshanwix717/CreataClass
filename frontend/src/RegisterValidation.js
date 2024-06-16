function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //const password_pattern = /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z]) [a-zA-Z0-9]{8,}$/;
  const password_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

  if (values.name === "") {
    error.name = "Name should not be empty";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Enter a valid Email";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Enter a valid password";
  }
  return error;
}

export default Validation;
