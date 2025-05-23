import { motion } from "framer-motion";

interface DashboardCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const DashboardCard = ({
  title,
  description,
  buttonText,
  onClick,
}: DashboardCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h2 className="text-xl font-semibold text-[#001f5b] mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onClick}
        className="mt-auto px-4 py-2 bg-gradient-to-r from-secondary2 to-secondary text-white font-medium rounded-full hover:opacity-90 transition-all"
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

export default DashboardCard;
