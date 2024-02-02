import React from 'react'
import './projects.css'
import warehouseImg from '../../images/warehouse.jpg'
import portfolioImg from '../../images/portfolioImg.jpg'
import financeImg from '../../images/finance_fraud.jpg'
import matnureImg from '../../images/smart-farming.jpg'

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>My Projects</h2>
        <span className='projectsDescription'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='projectsImgs'>
            <div className='project'>
                <img src={warehouseImg} alt='Warehouse Img' className='projectsImg' /> 
                <h2 className='projectHeading'>CargoHive - Supply Chain Management</h2>
                <h3><span className='stack'>Stack Used : </span> <span className='used'>HTML5, CSS3, JAVASCRIPT, PYTHON, SOLIDITY</span></h3>
                <ul className='ul'>
                    <li><b>Engineered SaaS Solution : </b> Developed at a Hackathon in DTU.</li><br/>
                    <li><b>Product Tracker & Blockchain Deployment : </b> Boosted Supply Chain Visibility with a product tracker feature and ensured transparency via deployment on a blockchain platform.</li><br/>
                    <li><b>Advanced Forecasting Model : </b> Integrated accurate forecasting model for future product demand.</li>
                </ul>
                <button class="button-85" onClick={() => {
                    window.open("https://github.com/tanmay-0017/Supply-Chain-Management-CargoHive");
                }}>GITHUB</button>
            </div>
            <div className='project' id = 'portfolio'>
                <img src={portfolioImg} alt='Portfolio Img' className='projectsImg' />
                <h2 className='projectHeading'>My Portfolio</h2>
                <h3><span className='stack'>Stack Used : </span> <span className='used'>REACT, CSS, JAVASCRIPT</span></h3>
                <ul className='ul'>
                    <li><b>React.js Portfolio Development : </b> Developed a sleek, responsive portfolio using React.js, showcasing projects and skills. Implemented efficient components and state management for seamless user interaction.</li><br/>
                    <li><b>Innovative UI/UX Integration : </b> Integrated innovative UI/UX elements with React.js, enhancing user experience. Applied a keen design eye for a visually compelling representation of technical proficiency.</li><br/>
                    <li><b>Demonstrated Technical Proficiency : </b> Independently created a dynamic React.js portfolio, highlighting modern web development skills. Demonstrates ability to leverage cutting-edge technologies for effective solutions.</li>
                </ul>
                <button class="button-85" onClick={() => {
                    window.open("https://github.com/tanmay-0017/Portfolio-Website");
                    
                }}>GITHUB</button>
            </div>
            <div className='project'>
                <img src={financeImg} alt='Fincure Img' className='projectsImg' />
                <h2 className='projectHeading'>FinCure - Fraud Detection</h2>
                <h3><span className='stack'>Stack Used : </span> <span className='used'>HTML5, CSS3, JAVASCRIPT, PYTHON</span></h3>
                <ul className='ul'>
                    <li><b>Fraud Detection AI/ML Model : </b> Developed advanced model to detect policy fraud, utilizing cutting-edge techniques for effective detection and prevention.</li><br/>
                    <li><b>T&C Framing and NFT Integration : </b> Assisted companies in creating their own terms and conditions(T&C), Integrated affiliate NFTs to enhance customer engagement and loyalty.</li><br/>
                    <li>Grabbed 2nd position after showcasing this model to the judges.</li>
                </ul>
                <button class="button-85" onClick={() => {
                    window.open("https://github.com/tanmay-0017/FinCure-NSUTHack");
                }}>GITHUB</button>
            </div>
            <div className='project' id = 'matnure'>
                <img src={matnureImg} alt='Matnure Img' className='projectsImg' />
                <h2 className='projectHeading'>Matnure - Soil Fertility</h2>
                <h3><span className='stack'>Stack Used : </span> <span className='used'>HTML5, CSS3, PYTHON, IoT</span></h3>
                <ul className='ul'>
                    <li><b>IoT-based Soil Fertility Detection Software : </b> Designed a software in which an IoT device with optical and electrochemical sensors, including NPK sensors, can measure soil fertility. Collected real-time data for accurate analysis.</li><br/>
                    <li><b>AI/ML application : </b> Predicted soil nutrient deficiencies and provided tailored recommendations for optimal nutrients and fertilizers. Enhanced agricultural practices and increased crop productivity.</li><br/>
                    <li>Won a Hackathon (TecHacks3.0) at Chitkara University,Punjab on shocasing this model.</li>
                </ul>
                <button class="button-85" onClick={() => {
                    window.open("https://github.com/tanmay-0017/Matnure_page");
                }}>GITHUB</button>
            </div>
        </div>
        <button className='projectsBtn'>See More</button>
    </section>
  )
}

export default Projects
