export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "fh468gk1jth7894kjdh78sgf89n1",
                user: {
                    name: 'Username',
                    email: 'email@email.com'
                }
            })
        }, 100)
    })
}