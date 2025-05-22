import { useLoginModal } from "../components/LoginModalContext";

const LoginModal = () => {
  const { isOpen, closeModal } = useLoginModal();

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    closeModal();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing when clicking inside modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleOverlayClick}
      />

      {/* modal content */}
      <div
        className="relative z-60 bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md"
        onClick={handleModalClick}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-primary2">Sign In</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <button className="w-full bg-primary2 text-white py-2 rounded mb-3 cursor-pointer">
          Sign In
        </button>
        <div className="text-center text-sm mb-3 text-gray-500">or</div>
        <button className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100 cursor-pointer">
          Sign in with Google
        </button>

        {/* Registration prompt */}
        <div className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary2 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
