import { useEffect, useRef } from "react";
import "../../styles/carousel.css";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Card } from "./Card";
import { Project } from "../../data/types";

gsap.registerPlugin(Observer);

interface CarouselProps {
  projects: Project[];
}

const Carousel = ({ projects }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const progress = useRef({ value: 0 });

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      imagesRef.current[index] = el;
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const images = imagesRef.current;

    if (!carousel) return;

    Observer.create({
      target: carousel,
      type: "wheel,pointer",
      onPress: () => {
        carousel.style.cursor = "grabbing";
      },
      onRelease: () => {
        carousel.style.cursor = "grab";
      },
      onChange: (self) => {
        gsap.killTweensOf(progress.current);
        const delta =
          self.event.type === "wheel"
            ? self.deltaY * -0.0003
            : self.deltaX * 0.03;

        gsap.to(progress.current, {
          duration: 3,
          ease: "power4.out",
          value: progress.current.value + delta,
        });
      },
    });

    const animate = () => {
      images.forEach((el, index) => {
        const theta = index / images.length - progress.current.value;
        const radius = 242;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;
        el.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${
          360 * -theta
        }deg)`;

        const opacity = Math.max(0, Math.min(1, (y + radius) / (2 * radius)));
        el.style.opacity = opacity.toString();
      });
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="carousel-image"
          ref={(el) => setImageRef(el, i)}
        >
          <Card
            project={project}
            style={{ width: "250px", margin: "4px", overflow: "hidden" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
