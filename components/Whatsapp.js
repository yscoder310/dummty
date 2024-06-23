import { FaWhatsapp } from "react-icons/fa";

export default function Whastapp() {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=7696062833"
        className="fixed bottom-[20px] right-[20px] bg-white p-2 rounded-full shadow-4xl z-[999]"
      >
        <FaWhatsapp className="text-green-500" size={36} />
      </a>
    );
  }