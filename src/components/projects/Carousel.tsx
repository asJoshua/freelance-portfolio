import { useEffect, useRef } from "react";
import "../../styles/carousel.css";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Card } from "./Card";
import dummyImage from '../../assets/DummyImage.png'

gsap.registerPlugin(Observer);


//TO:DO convert to dynamic with backed - lngterm
const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
  {
    id: 1,
    title: "Developer Portfolio",
    description: "My personal website to display who I am.",
    image: dummyImage,
    tech: ["React.js", "TypeScript", "GSAP"],
    link: "https://example.com/chil",
  },
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const progress = useRef({ value: 0 });

  // Assign divs to the array ref
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
            ? self.deltaY * -0.0005
            : self.deltaX * 0.05;

        gsap.to(progress.current, {
          duration: 2,
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
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            link={project.link}
            style={{ width: "250px", margin: "4px", overflow: "hidden" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
