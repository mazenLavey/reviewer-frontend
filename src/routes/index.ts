

type RoutesType = {
    home: string,
    admin: string,
    login: string,
    register: string,
    profile: string,
    newPost: string,
    review: string,
}

const route: RoutesType = {
    home: '/',
    admin: '/admin',
    login: '/login',
    register: '/register',
    profile: '/profile',
    newPost: '/new_post',
    review: '/review/:id',
}

export default route;