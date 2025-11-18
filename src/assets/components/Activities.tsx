import Activity from "./Activity";
import '../style/activities.css';

type Activityprops = {
    image: string;
    title: string;
};

type ActivitiesProps = {
    activities: Array<Activityprops>;
};

export default function Activities({activities}: ActivitiesProps){
    return (
        <div className="activity-container">
            {
                activities.map((el: Activityprops, i: number)=>
                    <Activity image={el.image} title={el.title}/>
                )
            }
        </div>
    );
}