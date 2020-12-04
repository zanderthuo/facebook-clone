import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Feed from '../component/Feed'

import '../styles/Homepage.css'

const Homepage = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__body">
                <Sidebar />
                <Feed />
            </div>
        </div>
    )
};

export default Homepage;