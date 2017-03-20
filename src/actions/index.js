import Firebase from 'firebase';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_CONTAINER_STYLE = 'SET_CONTAINER_STYLE';

const Posts = new Firebase('https://the-opalescent.firebaseio.com/');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      console.log(snapshot);
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
  return dispatch => Posts.push(post);
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}

export function setContainerStyle(containerStyle) {
  return {
    type: SET_CONTAINER_STYLE,
    payload: containerStyle
  }
}
