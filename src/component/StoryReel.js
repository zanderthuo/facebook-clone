import React from 'react'
import '../styles/StoryReel.component.css'
import Story from './Story'

const img = 'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={img} 
                profileSrc="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4" 
                title="Alexander Zander" 
            />
            <Story 
                image={img} 
                profileSrc="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4" 
                title="Alexander Zander" 
            />
            <Story 
                image={img} 
                profileSrc="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4" 
                title="Alexander Zander" 
            />
            <Story 
                image={img} 
                profileSrc="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4" 
                title="Alexander Zander" 
            />
            <Story 
                image={img} 
                profileSrc="https://avatars0.githubusercontent.com/u/21181649?s=460&u=9f26d8140b9f770bd9fed1f8fdc1338ae05fa713&v=4" 
                title="Alexander Zander" 
            />
        </div>
    )
}

export default StoryReel
