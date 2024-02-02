import React from 'react'
import './about.css'
import winner from '../../images/winner.png'
import second_place from '../../images/2nd-place.png'
import dsaImg from '../../images/computerImg.png'
import finalist from '../../images/finalist.png'
import mains from '../../images/mains.png'

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>About Me</span>
        <span className='aboutDescription'> I am a dedicated and passionate <span className='interests'>programmer</span> and <span className='interests'>web developer</span>, skilled at crafting visually appealing and user-friendly websites.<br/><br/>Currently in my <span className='interests'>prefinal year</span> of <span className='interests'>Information Technology</span> branch at <span className='interests'>NSUT Delhi</span>, slated to graduate in <span className='interests'>2025</span>, I bring a unique blend of technical proficiency, design sensibility, and a keen eye for detail. My journey has equipped me with a deep understanding of <span className='interests'>software development</span> and <span className='interests'>problem solving</span>. Eager to contribute to <span className='interests'>innovative</span> projects, I am poised to leverage my skills to create impactful digital experiences. <br/><br/>  I'm proficient in <span className='interests'>HTML</span>, <span className='interests'>CSS</span>, <span className='interests'>Javascript</span>, <span className='interests'>NodeJS</span>, <span className='interests'>React</span>, <span className='interests'>C++</span>, <span className='interests'>SQL</span>, as well as other design softwares </span>
        
        <div className="box-1">
            <div className="btn-1 btn-one">
                <a href='https://drive.google.com/file/d/1SXeITYUJyveATi4lv9qDH6ashEOFEE5o/view?usp=sharing' target='_blank' rel="noreferrer" className="aclass">
                    <span>DOWNLOAD RESUME</span>
                </a>
            </div>
        </div>

        <span className='achievementsTitle'>Achievements</span>

        <div className='achievementBars'>
            <div className='achievementBar'>
                <img src={winner} alt='TrophieImg' className='achievementBarImg'/>
                <div className='achievementBarText'>
                    <h2><span className='interests'>Winner</span> at <span className='interests'>TecHacks 3.0</span> Hackathon.</h2>
                    <br/>
                    <p>Rank 1 in our domain in a National Level Hackathon TecHacks 3.0 in Chitkara University.</p>
                </div>
            </div>
            <div className='achievementBar'>
                <img src={second_place} alt='Second-Place' className='achievementBarImg'/>
                <div className='achievementBarText'>
                    <h2>Achieved <span className='interests'>Rank 2</span> at a Hackathon at Annual Business Conclave of NSUT.</h2>
                    <br/>
                    <p>Participated in Annual Business Conclave of NSUT in a Hackathon, and won the Second prize for our project.</p>
                </div>
            </div>
            <div className='achievementBar'>
                <img src={finalist} alt='FinalistImg' className='achievementBarImg'/>
                <div className='achievementBarText'>
                    <h2><span className='interests'>Finalist</span> in a Hackathon at DTU.</h2>
                    <br/>
                    <p>Engineered SaaS Solution while participating at a Hackathon in DTU and presented our project in front of judges in the final round.</p>
                </div>
            </div>
            <div className='achievementBar'>
                <img src={mains} alt='99.2-Percentile-Img' className='achievementBarImg'/>
                <div className='achievementBarText'>
                    <h2>Scored <span className='interests'>99.2 Percentile</span> in JEE Mains.</h2>
                    <br/>
                    <p>Attempted JEE Mains and JEE Advanced and came in top 1 percentile among all students.</p>
                </div>
            </div>
            <div className='achievementBar'>
                <img src={dsaImg} alt='dsaImg' className='achievementBarImg'/>
                <div className='achievementBarText'>
                    <h2>Solved <span className='interests'>500+</span> DSA problems on Leetcode.</h2>
                    <br/>
                    <p>Solved conceptual Data Structures and Algorithm 500+ problems on Leetcode.</p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About
