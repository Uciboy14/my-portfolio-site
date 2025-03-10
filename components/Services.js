import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaShoppingCart,
  FaCreditCard,
} from "react-icons/fa";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const colors = [
    "bg-[#ff5380]",
    "bg-[#fbdd62]",
    "bg-[#0bceaf]",
    "bg-[#0bceaf]",
    "bg-[#ff5380]",
    "bg-[#fbdd62]",
  ];

  const services1 = [
    {
      title: "Full-Stack Devs.",
      description: "Building scalable web apps using modern frontend and backend technologies.",
      icon: "/backend.png",
    },
    {
      title: "Mobile Devs.",
      description: "Creating cross-platform mobile applications using Flutter and Firebase.",
      icon: "/mobile-development.png",
    },
    {
      title: "Backend & APIs",
      description: "We create secure and scalable backends. APIs power web and mobile apps.",
      icon: "/backend.png",
    },
  ];
  
  const services2 = [
    {
      title: "Cloud & DevOps",
      description: "Deploying applications to AWS and managing cloud infrastructure.",
      icon: "/cloud-devops.png",
    },
    {
      title: "E-commerce Devs.",
      description: "Building e-commerce platforms with seamless payment integration.",
      icon: "/ecommerce.png",
    },
    {
      title: "Payment Systems",
      description: "Integrating PayPal, Bitcoin, and USDT payment solutions for secure transactions.",
      icon: "/payment.png",
    },
  ];
  
  return (
    <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container">
        <div className="col-lg-full">
          <div className="title-content">
            <p className="title">get support for the services</p>
            <h2 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
              My Services
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {services1.map((service, index) => (
            <ServiceItem key={index} {...service} color={colors[index % colors.length]} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {services2.map((service, index) => (
            <ServiceItem key={index} {...service} color={colors[(index + services1.length) % colors.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
