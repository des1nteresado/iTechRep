import React from 'react';

const Account = (props) => {
    return (
        <React.Fragment>
            <button onClick={() => { if (confirm('Вы уверены что хотите выйти?')) props.logout() }}>Выход</button>
            <span>Привет, {props.user.name}</span>
        </React.Fragment>
    );
};

export default Account;