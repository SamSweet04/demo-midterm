import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {

    const [post, setPost]  = useState({title : '', body : ''});


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({title: '', desc: ''})
    }
    return (
        <div>
            <form>
                <MyInput
                    value = {post.title}
                    onChange = {e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Title"
                />
                <MyInput
                    value = {post.desc}
                    onChange = {e => setPost({...post, desc: e.target.value})}
                    type="text"
                    placeholder="Description"
                />
                <MyButton  onClick = {addNewPost} >Create post</MyButton>
            </form>
            {/*<PostList posts = {posts} title = "List of posts 1"/>*/}
            {/*<PostList posts = {posts2} title = "List of posts 2"/>*/}
        </div>
    );
};

export default PostForm;