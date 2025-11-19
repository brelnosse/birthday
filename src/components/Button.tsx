import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../assets/style/button.css';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
    name: IconDefinition;
    position: string;
};

type Buttonprops = {
    icon ?: IconProps;
    to ?: string;
    text: string;
} & HTMLAttributes<HTMLButtonElement> & HTMLAttributes<HTMLLinkElement>;

export default function Button({icon, to, text}: Buttonprops){
    return (
        !to ? 
        <button className="btn">
            {!icon ? text:
                icon.position === 'beforeText' ?
                <>
                    <FontAwesomeIcon icon={icon.name} className="btn-icon"/>
                    {text}
                </>:
                <>
                    {text}
                    <FontAwesomeIcon icon={icon.name} className="btn-icon"/>
                </>            
            }
        </button>
        :
        <Link to={to} className="btn">
            {!icon ? text:
                icon.position === 'beforeText' ?
                <>
                    <FontAwesomeIcon icon={icon.name} className="btn-icon"/>
                    {text}
                </>:
                <>
                    {text}
                    <FontAwesomeIcon icon={icon.name} className="btn-icon"/>
                </>            
            }
        </Link>
    );
}