import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Nulla ut dolore dolor ad incididunt esse do aute. Ea reprehenderit magna eu irure sunt laboris qui nisi sunt est ad nisi. Commodo mollit Lorem cillum consectetur qui culpa voluptate Lorem anim. Commodo est anim nisi ut enim duis et mollit et ea proident dolor consectetur.</p>
            </div>
        </div>
    )
}

export default BlogItem
