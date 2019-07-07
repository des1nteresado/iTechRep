import React from 'react';

export default class Account extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => { if (confirm('Вы уверены что хотите выйти?')) this.props.logout() }}>Выход</button>
                <span>Привет, {this.props.user.name}</span>
            </React.Fragment>
        );
    }
};