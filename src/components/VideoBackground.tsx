// import anniv1 from '../assets/videos/anniv1.mp4';
import '../assets/style/videobg.css';

export default function VideoBackground(){
    return (
      <div className="video-bg">
        <video src={require("../assets/videos/anniv1.mp4")} autoPlay loop muted></video>
      </div>  
    );
}