import React, { useEffect, useState } from  'react';
import { useHistory } from 'react-router';
import PostService from '../API/PostService';
import PorsFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';



function Posts() {
  const [posts, setPosts] = useState([ ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false); 
  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
    const posts = await PostService.getAll();
     setPosts(posts);
  }) 

  useEffect(() => {
    fetchPosts()
  }, []);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Створити пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm visible={modal} setVisible={setModal} create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0px'}}/>
      <PorsFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      {postError &&
        <h1>Виникла помилка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <Loader/>
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постів 1'/>
      }
      
    </div>
  );
}

export default Posts;
