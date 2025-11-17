import '../assets/style/home.css';
import moi from '../assets/images/moi.png';
type CountdownCellProps = {
    digits: Array<number>;
    label: string;
};
type CountdownProps = {
    cells:  Array<CountdownCellProps>;
};
export default function Home(){
    return (
        <div className="container">
            <section className='section'>
                <div className="s-text">
                    <h1><span className="t-line-1">25ieme anniversaire de</span></h1>
                    <h2>Sarah</h2>
                    <p className='t-description'>
                        You're invited to an afternoon of laugh, games, and sweet
                        memories as we celebrate Zara's special day!
                    </p>
                    <div className="t-countdown-container">
                        <Countdown cells={
                            [
                                {
                                    digits: [0,1],
                                    label: "Days"
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
        </div>
    );
}
const Countdown = ({cells}:CountdownProps) =>{
    return (
        <div className="t-countdown">
            {cells.map((el: CountdownCellProps, i:number)=> 
                <CountdownCell digits={el.digits} label={el.label}/>
            )}
        </div>
    );
}
const CountdownCell = ({digits, label}:CountdownCellProps)=>{
    return (
        <div className="number">
            <div className="digits">
                {digits.map((digit: number, i: number)=>
                    <span className='digit' key={'digit-'+i}>{digit}</span>
                )}
            </div>
            <span className='label'>{label}</span>
        </div>
    );
}