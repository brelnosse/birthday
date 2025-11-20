import React, { useRef, useEffect } from "react";
import Activity from "./Activity";
import "../assets/style/activities.css";

type ActivityProps = {
    image: string;
    title: string;
};

type ActivitiesProps = {
    activities: Array<ActivityProps>;
};

export default function Activities({ activities }: ActivitiesProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    // Duplication du tableau pour continuité apparente
    const duplicated = [...activities, ...activities];

    // Pas besoin d’état pour l’animation, on bouge avec du CSS (keyframes)
    // Les boutons manuels ne sont pas inclus dans ce mode (tjs possible de les ajouter)

    return (
        <div className="slider-container">
            <div className="slider-window">
                <div
                    className="slider-track infinite"
                    ref={trackRef}
                    style={{
                        width: `${(duplicated.length / 4) * 100}%`, // dépend du nombre d'éléments et visibles
                    }}
                >
                    {duplicated.map((el, i) => (
                        <div className="slider-item" key={i}>
                            <Activity image={el.image} title={el.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
