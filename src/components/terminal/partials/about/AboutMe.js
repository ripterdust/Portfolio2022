import React from 'react'

export const AboutMe = () => {
  return (
    <div className='aboutMe'>

        <div className="text">
            /* <br />
            * About Me <br />
            * Hi, I'm Bryan. A multi-talent human with <br />
            * More of 3 years of experience working with <br />
            * Frontend and backend technologies. <br />   
            */
        </div>

        <div className="technologies">
            <div>
                <i class="fa-brands fa-js"></i>
                Javascript & Typescript
            </div>
            <div>
                <i class="fa-brands fa-python"></i>
                Python & Django
            </div>
            <div>
                <i class="fa-brands fa-react"></i>
                React
            </div>
            <div>
                <i class="fa-brands fa-node"></i>
                Node & Express.js
            </div>
            <div>
                <i class="fa-brands fa-git"></i>
                Git
            </div>
            <div>
                <i class="fa-solid fa-database"></i>
                MySQL & MongoDB
            </div>
            
        </div>

    </div>
  )
}
