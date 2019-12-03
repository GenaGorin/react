import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import {connect} from "react-redux";
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

        componentDidMount() {
                this.props.toggleIsFetching(true);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                        this.props.setUsers(response.data);
                        this.props.toggleIsFetching(false);
                });
        }

        onPageChanged =(page) => {
                //let pageNum = Number(page.target.innerHTML);
                this.props.toggleIsFetching(true);
                this.props.setCurrentPage(page);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                        this.props.setUsers(response.data);
                        this.props.toggleIsFetching(false);
                });
        }

        render() {
                return (<>
                        {this.props.isFetching ? <Preloader />: null}
                        <Users 
                        follow ={this.props.follow} 
                        unfollow = {this.props.unfollow} 
                        users= {this.props.users} 
                        totalUserCount = {this.props.totalUserCount} 
                        pageSize ={this.props.pageSize} 
                        onPageChanged = {this.onPageChanged} 
                        currentPage ={this.props.currentPage}/>
                        </>
                )
        }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (page) => {
            let action = setCurrentPageAC(page);
            dispatch(action);
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);