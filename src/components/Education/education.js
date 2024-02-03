import React from 'react';
import './education.css';

const education = () => {
  return (
    <div>
      <h2 className='educationTitle'>Education Background</h2>
      <div className='educationAbout'>
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </div>
      <div className='educationContent'>
        <ul className='unorderedList'>
            <li className='list'>
                <div className='educationContent2'>
                    <div className='educationContent3'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/800px-Netaji_Subhas_University_of_Technology.svg.png' alt = 'NSUT' className='img1'/>
                        </div>
                        <div>
                            <div className='name'>
                                Netaji Subhas University of Technology (NSUT), Delhi
                            </div>
                            <div className='branch'>
                                Bachelor of Technology - BTech, Information Technology
                            </div>
                            <div className='timeperiod'>
                                Dec 2021 - May 2025 (expected)
                            </div>
                        </div>
                    </div>
                    <div className='grade'>
                        <b>Grade: </b>
                        "7.77 CGPA"
                    </div>
                    <div>
                        <span className='about'>
                            "I am currently pursuing a Bachelor's degree in Information Technology at Netaji Subhas University of Technology (NSUT), Delhi. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others."
                        </span>
                    </div>
                </div>
                <div>
                    <span className='muiTimelineDot'></span>
                    <span className='muiTimelineConnector'></span>
                </div>
            </li>
            <li className='list'>
                <div className='educationContent2'>
                    <div className='educationContent3'>
                        <div>
                            <img src='https://play-lh.googleusercontent.com/tSa3S3eNMTVOxuedT0vTDcvnoTRKy8uN9PKl6kp35hz63wIC4PZl9LX4VdtRrjDBpS5o=w600-h300-pc0xffffff-pd' alt = 'Abhinav Public School' className='img2'/>
                        </div>
                        <div>
                            <div className='name'>
                                Abhinav Public School, Delhi
                            </div>
                            <div className='branch'>
                                CBSE(XII), Science
                            </div>
                            <div className='timeperiod'>
                                March 2021
                            </div>
                        </div>
                    </div>
                    <div className='grade'>
                        <b>Grade: </b>
                        "94.8%"
                    </div>
                    <div>
                        <span className='about'>
                            "I completed my class 12 education at Abhinav Public School, Delhi and achieved 94.8 percent."
                        </span>
                    </div>
                </div>
                <div>
                    <span className='muiTimelineDot'></span>
                    <span className='muiTimelineConnector'></span>
                </div>
            </li>
            <li className='list'>
                <div className='educationContent2'>
                    <div className='educationContent3'>
                        <div>
                            <img src='data:image/png;base64,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' alt = 'Bal Bharti School' className='img3'/>
                        </div>
                        <div>
                            <div className='name'>
                                Bal Bharti School, Bahadurgarh
                            </div>
                            <div className='branch'>
                                CBSE(X), Science
                            </div>
                            <div className='timeperiod'>
                                March 2019
                            </div>
                        </div>
                    </div>
                    <div className='grade'>
                        <b>Grade: </b>
                        "97%"
                    </div>
                    <div>
                        <span className='about'>
                            "I completed my class 10 education at Bal Bharti School, Bahadurgarh (Haryana) and achieved 97 percent."
                        </span>
                    </div>
                </div>
                <div>
                    <span className='muiTimelineDot'></span>
                    <span className='muiTimelineConnector'></span>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default education