import React from 'react';
import '../styles/Feed.component.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4"
                message='Wow it works'
                timestamp='thisis a time stamp'
                username='zander'
                image='https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4'
            />
            <Post 
                profilePic="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4"
                message='Wow it works'
                timestamp='thisis a time stamp'
                username='zander'
                image='https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4'
            />
        </div>
    )
}

export default Feed
