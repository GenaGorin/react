const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [

    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true,
                        }
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: false,
                        }
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users,],
                totalUserCount: action.totalUserCount,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users.items,
        totalUserCount: users.totalCount
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page,
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}

export default usersReducer;