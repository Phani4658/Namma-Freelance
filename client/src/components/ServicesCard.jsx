import { Link } from "react-router-dom";

const ServicesCard = () => {
  return (
    <li>
      <Link to="">
        <img
          src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715471472/web_development_1_oyj0lp.png"
          className="bg-blue-900 rounded-md mb-3"
        />
        <h3 className="text-white font-semibold">Kuchipudi Dancer</h3>
        <p className="text-white">
          <span className="text-blue-500">Avg Price: </span> 12000-14000
        </p>
      </Link>
    </li>
  );
};

export default ServicesCard;
