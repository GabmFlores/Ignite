import { motion } from "framer-motion";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#fefcf4] px-6 py-10 md:px-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#001f5b]">
          Welcome back,
          <span className="text-[#b48600]"> Ashton</span>!
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600">
          What would you like to explore today?
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <DashboardCard
          title="Secret Crush"
          description="Enter your school email. If your crush also enters yours, you’ll get notified!"
          buttonText="Reveal Now"
        />
        <DashboardCard
          title="Ignite Date"
          description="Find your curated match based on your onboarding answers and our algorithm."
          buttonText="Find Match"
        />
        <DashboardCard
          title="My Matches"
          description="Review and reconnect with your existing matches."
          buttonText="View Matches"
        />
        <DashboardCard
          title="Edit Profile"
          description="Update your profile information and preferences."
          buttonText="Edit Profile"
        />
      </div>
    </div>
  );
};

export default Dashboard;
