export const validate = values => {
    const errors = {}
    const requiredFields = [
        'username',
        'password'
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
    return errors
}