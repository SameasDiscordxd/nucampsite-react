const validateUserLoginForm = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = "Required";
    } else if (values.username.length < 6) {
        errors.username = "Username must be at least 6 characters";
    } else if (values.username.length > 15) {
        errors.username = "Username must be at most 15 characters";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    return errors;
};

export default validateUserLoginForm;
