const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users:[
        
    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map (user => {
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
            users: state.users.map (user => {
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
                users: [...action.users, ],
                totalUserCount: action.totalUserCount,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
      }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
      }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users.items,
        totalUserCount: users.totalCount
      }
}

export const setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page,
    }
}

export default usersReducer;