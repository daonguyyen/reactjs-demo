import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/2/1/8121477a14f8f82e4b9d43877ec97b9f.jpg'
        },
        {
            id: 2,
            name: 'Rap Việt Chất Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/0/f/4/50f478b452dd8bf0e9223ec239728d95.jpg'
        },
        {
            id: 3,
            name: 'Có Hay Không Có',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/c/d/0/dcd041dd0e2a3abba01eead69ad15239.jpg'
        },
    ]
    return (
        <div>
            <h2>May Be You Like This</h2>
            <AlbumList danhsachNhac={albumList} />
        </div>
    );
}

export default AlbumFeature;