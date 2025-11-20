import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TestCarousel() {
    return (
        <Carousel
            responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                tablet:  { breakpoint: { max: 1024, min: 464 }, items: 2 },
                mobile:  { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
        >
            <div style={{background: "red", height: 200}}>1</div>
            <div style={{background: "green", height: 200}}>2</div>
            <div style={{background: "blue", height: 200}}>3</div>
        </Carousel>
    );
}
