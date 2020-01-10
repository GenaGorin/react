import React, { Component, PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, test } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FromsControls/FormControls';
import sound from '../../../assets/sounds/69880c1f5e57698.mp3';


const MyPosts = React.memo( props => {
  let componentsPost = props.posts.map(post => <Post message={post.post} id={post.id} key={post.id} url_image={post.photo_url} likesCount={post.likes} />);

  let createNewWallPost = (formData) => {
    console.log(formData);
    //props.updateNewPostText(formData.wallPostText);
    props.addPost(formData.wallPostText);
  }
  

  return (
    <div className={s.mypostMainWrapp}>
      <h3>My posts</h3>
      <div>
        <WallPostFormRedux onSubmit={createNewWallPost} />
      </div>
      <div className={s.postWrapper}>
        {componentsPost}
      </div>
    </div>
  );
});


/*
class MyPosts extends PureComponent {
  render() {

    console.log('RENDER');
    let componentsPost = this.props.posts.map(post => <Post message={post.post} id={post.id} key={post.id} url_image={post.photo_url} likesCount={post.likes} />);

    let createNewWallPost = (formData) => {
      console.log(formData);
      //props.updateNewPostText(formData.wallPostText);
      this.props.addPost(formData.wallPostText);
    }
    return (
      <div className={s.mypostMainWrapp}>
        <h3>My posts</h3>
        <div>
          <WallPostFormRedux onSubmit={createNewWallPost} />
        </div>
        <div className={s.postWrapper}>
          {componentsPost}
        </div>
      </div>
    );
  }
}*/


const maxLength5 = maxLengthCreator(5);


const WallPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" placeholder='АУе челяба' name='wallPostText' component={Textarea} validate={[required, maxLength5]} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

const WallPostFormRedux = reduxForm({ form: 'addWallPost' })(WallPostForm);

export default MyPosts;