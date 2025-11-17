import { HTMLAttributes } from "react";
import '../style/countdown.css';

type CountdownCellProps = {
    digits: Array<number>;
    label: string;
} & HTMLAttributes<HTMLDivElement>;
type CountdownProps = {
    cells:  Array<CountdownCellProps>;
} & HTMLAttributes<HTMLDivElement>;

export default function Countdown ({cells}:CountdownProps){
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
        <div className="digits-container">
            <div className="digits">
                {digits.map((digit: number, i: number)=>
                    <span className='digit' key={'digit-'+i}>{digit}</span>
                )}
            </div>
            <span className='d-label'>{label}</span>
        </div>
    );
}