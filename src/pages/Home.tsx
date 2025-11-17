import '../assets/style/home.css';
import Countdown from '../assets/components/Countdown';
import moi from '../assets/images/moi.png';

export default function Home(){
    return (
        <div className="container">
            <section className='section' id='main'>
                <div className="s-text">
                    <h1><span className="t-line-1">25 ième anniversaire</span></h1>
                    <h2>De <span>Sarah</span></h2>
                    <p className='t-description'>
                        You're invited to an afternoon of laugh, games, and sweet
                        memories as we celebrate Zara's special day!
                    </p>
                    <div className="t-countdown-container">
                        <Countdown cells={
                            [
                                {
                                    digits: [0,0],
                                    label: "Days"
                                }, 
                                {
                                    digits: [2,3],
                                    label: "Hours"                                    
                                },
                                {
                                    digits: [5, 9],
                                    label: "Minutes"                                    
                                },
                                {
                                    digits: [5,9],
                                    label: "Seconds"                                    
                                }
                            ]
                        }/>
                    </div>
                </div>
                <div className="s-image">
                    <div className="s-img-container">
                        <img src={moi} alt="zara" />
                    </div>
                </div>
            </section>
            <section className="section" id='second'>

            </section>
        </div>
    );
}