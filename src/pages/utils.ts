import icon1 from "../assets/Group.svg";
import icon2 from "../assets/Group (1).svg";
import icon3 from "../assets/Vector (2).svg";
import icon4 from "../assets/Vector (3).svg";
import emekaPP from '../assets/Ellipse 5 (2).svg'
import amandaPP from '../assets/amanda.svg'
import michealPP from "../assets/micheal.svg";

export const features = [
  {
    title: "Conference Navigator",
    desc: " Stay informed about conferences tailored to your specific career interests. ",
    icon: icon1,
  },
  {
    title: "CV Review",
    desc: "Need expert eyes on your resume? Pascal offers a CV review service to ensure your application shines. ",
    icon: icon2,
  },
  {
    title: "Exclusive Networking",
    desc: "As a Pascal Premium member, you gain access to our unique networking feature. Connect with others who share similar career interests",
    icon: icon3,
  },
  {
    title: "Curated Article Suggestions",
    desc: `Stay ahead in your industry with Pascal's curated article suggestions. Get access to handpicked content that directly relates to your career niche, so you can stay informed and grow your expertise.`,
    icon: icon4,
  },
];

export const testimonials = [
  {
    img: emekaPP,
    name: "Emeka",
    desc: `As a newbie to the tech world, I can't express how grateful I am for this app.`,
    star: [1, 2, 3, 4],
  },
  {
    img: amandaPP,
    name: "Amanda",
    desc: `It has been an absolute game-changer for someone like me who is just starting to dip their toes into the vast ocean of technology.`,
    star: [1, 2, 3, 4],
  },
  {
    img: michealPP,
    name: "Micheal",
    desc: `This app is the future. It is the most beginner friendly app any newbie can ever have access to.`,
    star: [1, 2, 3, 4],
  },
];

export function scrollToSection (sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
