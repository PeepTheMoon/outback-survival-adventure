// save user info in local storage

export function saveUser(user) {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
}

// get user data from local storage

export function getUser() {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) return null;
    const user = JSON.parse(storedUser);
    return user;
    // console.log(user);
}
