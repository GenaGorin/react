import { userAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';
const FOLLOW_OR_UNFOLLOW = 'users/FOLLOW_OR_UNFOLLOW';

let initialState = {
    users: [

    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followLoad: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: action.isFollowed,
                        }
                    }
                    return user;
                }),
            };
        /*
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
        };*/
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
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followLoad: action.followLoad ? [...state.followLoad, action.userId] : state.followLoad.filter(id => id != action.userId),
            }
        default:
            return state;
    }
}
/*
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
*/
const followOrUnfollow = (userId, bool) => {
    return {
        type: FOLLOW_OR_UNFOLLOW,
        userId: userId,
        isFollowed: bool,
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

export const toggleFollowLoad = (followLoad, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        followLoad: followLoad,
        userId: userId,
    }
}


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response));
    dispatch(toggleIsFetching(false));
}

export const followThunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowLoad(true, userId));
    let response = await userAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followOrUnfollow(userId, true));
    }
    dispatch(toggleFollowLoad(false, userId));
}

export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowLoad(true, userId));
    let response = await userAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followOrUnfollow(userId, false));
    }
    dispatch(toggleFollowLoad(false, userId));
}

export default usersReducer;