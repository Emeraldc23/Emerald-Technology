import blackBizWoman from "./testimony_images/black-bizwoman.jpg";
import confidentwoman from "./testimony_images/confident-bizwoman.jpg";
import profilepics from "./testimony_images/profile_pics.jpg";
import marketingSpecialist from "./testimony_images/stylish-bizman.jpg";

const testimonials = [
  {
    id: 1,
    name: "Client One",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vel velit efficitur tincidunt.",
    profession: "Web Developer",
    img: profilepics,
  },
  {
    id: 2,
    name: "Client Two",
    review:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    profession: "Graphic Designer",
    img: blackBizWoman,
  },
  {
    id: 3,
    name: "Client Three",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    profession: "Project Manager",
    img: marketingSpecialist,
  },
  {
    id: 4,
    name: "client 4",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profession: "Marketing Specialist",
    img: confidentwoman,
  },
];

export default testimonials;
