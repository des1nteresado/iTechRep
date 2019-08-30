export default {
    saveAuth: (userName, userId, token) => {
        sessionStorage.setItem(constants.tokenKey, JSON.stringify({
            userName: userName,
            userId: userId,
            access_token: token
        }));
    },

    clearAuth: () => {
        sessionStorage.removeItem(constants.tokenKey);
    },

    getLogin: () => {
        let item = sessionStorage.getItem(constants.tokenKey);
        let login = '';
        if (item) {
            login = JSON.parse(item).userName;
        }
        return login;
    },

    getUserId: () => {
        let item = sessionStorage.getItem(constants.tokenKey);
        let userId = '';
        if (item) {
            userId = JSON.parse(item).userId;
        }
        return userId;
    },

    isLogged: () => {
        let item = sessionStorage.getItem(constants.tokenKey);
        if (item) {
            return true;
        } else {
            return false;
        }
    },

    getToken: () => {
        let item = sessionStorage.getItem(constants.tokenKey);
        let token = null;
        if (item) {
            token = JSON.parse(item).access_token;
        }
        return token;
    }
}