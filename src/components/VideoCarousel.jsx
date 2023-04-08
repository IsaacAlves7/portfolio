import "../../public/VideoCarousel.css";
import {Carousel} from "react-bootstrap";
import Vid1 from "../assets/videos/1.mp4";
import Vid2 from "../assets/videos/2.mp4";
import Vid3 from "../assets/videos/3.mp4";
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
    const videoProperties = [
        {
            id: 1,
            title: "Welcome to my portfolio website!",
            src: Vid1,
            credit: "Video by cottonbro from Pexels",
        },
        {
            id: 2,
            title: "Video 2",
            src: Vid2,
            credit: "Video by cottonbro from Pexels",
        },
        {
            id: 3,
            title: "Video 3",
            src: Vid3,
            credit: "Video by cottonbro from Pexels",
        }
    ]

    return <div class="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
            return(
                <Carousel.Item key={videoObj.id}> 
                    <ReactPlayer
                        url={videoObj.src}
                        pip={true}
                        controls={false}
                        playing={true}
                        muted={true}
                        height='100vh'
                    />
                    <Carousel.Caption>
                       {/* <h3>{videoObj.title}</h3>
                       <p>{videoObj.credit}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })}
      </Carousel>
    </div>;
}

export default VideoCarousel;