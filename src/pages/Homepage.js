import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'

const Homepage = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__body">
                <Sidebar />
            </div>
        </div>
    )
};

export default Homepage;