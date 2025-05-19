interface ButtonProps {
  variant?: "solid" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  variant = "solid",
  children,
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-semibold transition-all duration-150 ease-in-out";

  const solid =
    "text-white bg-gradient-to-r from-secondary2 to-secondary hover:bg-none hover:bg-white hover:text-secondary2 border-2 hover:border-secondary2";

  const outline =
    "bg-white border-2 border-secondary2 text-secondary2 hover:bg-gradient-to-r from-secondary2 to-secondary hover:text-white";

  const styles = variant === "solid" ? solid : outline;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
