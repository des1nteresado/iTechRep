import React from 'react';

const Account = (props) => {
    return (
        <React.Fragment>
            <div className="account">
                <div className="account__header">
                    <p>Hello, {props.user.name}!</p>
                    <button className='account__button' onClick={() => { if (confirm('Вы уверены что хотите выйти?')) props.logout() }}>Выход</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Account;