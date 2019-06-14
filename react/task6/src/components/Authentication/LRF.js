import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { FormStyle } from '../../views/Counter/style';
import LoginReduxForm from './LoginReduxForm';

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                '& p': {
                    fontSize: 12,
                    border: 0,
                    marginTop: 2,
                    padding: 0
                }
            }
        },
        MuiSelect: {
            select: {
                paddingBotton: 10
            }
        }
    }
})


const LRF = () => {
    const showResults = values =>
        new Promise(resolve => {
            setTimeout(() => {
                // simulate server latency
                window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
                resolve()
            }, 500)
        })
    return (
        <div style={FormStyle}>
            <MuiThemeProvider theme={theme}>
                <LoginReduxForm onSubmit={showResults} />
            </MuiThemeProvider>
        </div>
    )
};

export default LRF;