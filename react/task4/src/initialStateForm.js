export default  {
    data: null,
    formControls: {
        email: {
            id: 'outlined-email-input',
            value: '',
            type: 'email',
            label: 'Email',
            name: 'email',
            margin: 'normal',
            variant: 'outlined',
            autoComplete: 'email',
            helperText: '',
            error: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            id: 'outlined-password-input',
            value: '',
            type: 'password',
            label: 'Password',
            name: 'password',
            margin: 'normal',
            variant: 'outlined',
            autoComplete: "current-password",
            helperText: '',
            error: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    }
}