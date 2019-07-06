import React from 'react';

export default class Account extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <a onClick={() => { if (confirm('Вы уверены что хотите выйти?')) this.props.logout() }}>Выход</a>
                </div>
            <span>Привет, {this.props.user.name}</span>
            </React.Fragment>
        );
    }
};