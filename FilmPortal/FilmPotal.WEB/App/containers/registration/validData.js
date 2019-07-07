export const validate = values => {
    const errors = {}
    const requiredFields = [
        'username',
        'password',
        'confirmPassword'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if ((values.password && !(values.password.length >= 4))) {

        errors.password = 'Too short'
    }
    if (values.username && !(values.username.length >= 3)) {
        errors.username = 'Too short'
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password mismatched';
    }
    return errors
}