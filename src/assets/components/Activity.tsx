import '../style/activity.css';

type Activityprops = {
    image: string;
    title: string;
};

export default function Activity({image, title}: Activityprops){
    return (
        <div className="activity">
            <img src={image} alt={title} />
            <h4>{title}</h4>
        </div>
    );
}