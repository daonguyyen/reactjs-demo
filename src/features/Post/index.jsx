import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import Pagination from '../../components/Pagination';
import queryString from 'query-string';

PostFeature.propTypes = {
    
};

function PostFeature(props) {

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page : 1,
        _limit : 10,
        _totalRows : 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1

    })

    function handlePageChange(newPage){
        console.log('New page', newPage)
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    useEffect(() => {
        async function fetchPostList(){
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                console.log({responseJSON});

                const {data, pagination} = responseJSON;
                setPostList(data)
                setPagination(pagination)

            } catch (error) {
                console.log('Failed to fetch Post list', error.message);
            }
            
        }

        fetchPostList();
    }, [filters])

    return (
        <div>
            <h1>React Hook - Post List</h1>
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
        
    );
}

export default PostFeature;