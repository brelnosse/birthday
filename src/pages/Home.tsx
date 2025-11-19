import '../assets/style/home.css';
import Countdown from '../components/Countdown';
import moi from '../assets/images/moi.png';
import Activities from '../components/Activities';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import EventsTree from '../components/EventsTree';
import { Confetti } from '../components/Confetti';
import VideoBackground from '../components/VideoBackground';

export default function Home(){
    return (
        <>
            <Confetti />
            <Navbar />
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
                    <VideoBackground />
                    <h1>Qu'est ce qui vous attends ?</h1>
                    <Activities 
                        activities={[
                            {
                                image: moi,
                                title: 'Course'
                            },
                            {
                                image: moi,
                                title: 'Camping cart'
                            },
                                                    {
                                image: moi,
                                title: 'Course'
                            },
                            {
                                image: moi,
                                title: 'Camping cart'
                            },
                                                    {
                                image: moi,
                                title: 'Course'
                            },
                            {
                                image: moi,
                                title: 'Camping cart'
                            }
                        ]}
                    />
                </section>
                <section className="section" id='third'>
                    <h1>Détails de l'évènement</h1>
                    <h5>50 rue de rochechouart, 87000 limoges</h5>
                    <EventsTree branches={[
                        'Arrivée des invités',
                        'Discours de bienvenue',
                        'Déjeuné',
                        'Diner'
                    ]}/>
                </section>
                <section className="section" id='fourth'>
                    <h1>Invitation</h1>
                    <form className="invitation-form">
                        <div className="inv-header">
                            <div className="inv-group">
                                <label htmlFor="inv-name">Nom et prenom</label>
                                <input type="text" id="inv-name"/>
                            </div>
                            <div className="inv-group">
                                <label htmlFor="inv-email">Adresse email</label>
                                <input type="text" id='inv-email'/>
                            </div>
                            <div className="inv-group">
                                <label htmlFor="inv-tel">Numéro de téléphone</label>
                                <input type="text" id='inv-tel'/>
                            </div>
                            <div className="inv-group">
                                <label htmlFor="inv-option">options de participation</label>
                                <select name="" id="inv-option">
                                    <option value="">Vous seul</option>
                                    <option value="">Avec un invité</option>
                                </select>
                            </div>
                        </div>
                        <div className="inv-body">
                            <div className="inv-group">
                                <label htmlFor="inv-option">Serrez-vous présent ?</label>
                                <div className="inv-s-group-container">
                                    <span className="inv-s-group">
                                        <input type="radio" value="yes" name='attendance' id='yes'/>
                                        Oui
                                    </span>
                                    <span className='inv-s-group'>
                                        <input type="radio" value="no" name='attendance' id='no'/>
                                        Non
                                    </span>
                                    <span className='inv-s-group'>
                                        <input type="radio" value="maybe" name='attendance' id='maybe'/>
                                        Peut-être
                                    </span>
                                </div>
                            </div>
                            <div className="inv-group">
                                <label htmlFor="message">Vous souhaitez nous faire une précision ?</label>
                                <textarea name="" id="message" placeholder='Saisissez votre message ici...'>

                                </textarea>
                            </div>
                        </div>
                        <div className="inv-footer">
                            <Button text="Recevoir mon invitation"/>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}