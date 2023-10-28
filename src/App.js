import React, {useMemo, useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
function App() {
  const [ posts, setPosts] = useState( [
    {id: 1, title : "aaa", description: "dsds"},
    {id: 2, title : "fff", description: "adasa"},
    {id: 3, title : "bbb", description: "sdadsds"}
  ])
  const [ posts2, setPosts2] = useState( [
    {id: 1, title : "Python", description: "description"},
    {id: 2, title : "Python", description: "description"},
    {id: 3, title : "Python", description: "description"}
  ])

  const [ filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(()=>{
    console.log('Function worked!')

    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])


  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(posts => posts.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedPosts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style = {{marginTop: '30px'}} onClick = {() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible = {modal} setVisible = {setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
      <hr style = {{margin: '15px 0'}}/>
      <PostFilter
          filter = {filter}
          setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
      ?  <PostList posts = {sortedAndSearchedPosts} remove = {removePost} title = "Posts about JS"/>
      : <h1 style = {{textAlign: 'center', color: 'darkred'}}> Not found posts </h1>}

    </div>
  );
}

export default App;
