export const validateForm = (form) => {
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
};