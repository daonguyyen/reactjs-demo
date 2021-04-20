import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';

PostFeature.propTypes = {
    
};

function PostFeature(props) {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPostList(){
            try {
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                console.log({responseJSON});

                const data = responseJSON.data;
                setPostList(data)

            } catch (error) {
                console.log('Failed to fetch Post list', error.message);
            }
            
        }

        fetchPostList();
    }, [])

    return (
        <PostList posts={postList} />
    );
}

export default PostFeature;