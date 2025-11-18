import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import '../style/button.css';

type Buttonprops = {
    to ?: string;
    text: string;
} & HTMLAttributes<HTMLButtonElement> & HTMLAttributes<HTMLLinkElement>;

export default function Button({to, text}: Buttonprops){
    return (
        !to ? 
        <button className="btn">
            {text}
        </button>
        :
        <Link to={to} className="btn">
            {text}
        </Link>
    );
}