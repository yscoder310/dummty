import { TESTIMONIALS } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="relative container min-h-[673px]  py-14">
        <h1 className="text-4xl text-center text-textPrimary font-bold">
          Our Happy Clients
        </h1>

        <div className=" mt-14 gap-8  flex justify-center flex-wrap">
          {TESTIMONIALS.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ testimonial }) => {
  return (
    <div className="w-full sm:w-[30%]">
      <div className="flex flex-col justify-center items-center p-6 gap-6">
        <div className="w-[98px] h-[98px] rounded-[50%] overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src={testimonial.avatar}
            alt={testimonial.author}
          />
        </div>

        <p className="text-center">{testimonial.text}</p>
        <p className="text-center">{testimonial.author}</p>
        <Ratings rating={testimonial.ratings} />
      </div>
    </div>
  );
};

const Ratings = ({ rating }) => {
  return (
    <div className="flex items-center">
      <svg
        className={`w-5 h-5 ${
          rating >= 1 ? "text-yellow-300" : "text-gray-300"
        } ms-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={`w-5 h-5 ${
          rating >= 2 ? "text-yellow-300" : "text-gray-300"
        } ms-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={`w-5 h-5 ${
          rating >= 3 ? "text-yellow-300" : "text-gray-300"
        } ms-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={`w-5 h-5 ${
          rating >= 4 ? "text-yellow-300" : "text-gray-300"
        } ms-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={`w-5 h-5 ${
          rating === 5 ? "text-yellow-300" : "text-gray-300"
        } ms-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
};

export default Testimonials;
