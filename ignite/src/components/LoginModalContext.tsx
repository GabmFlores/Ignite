import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type LoginModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const LoginModalContext = createContext<LoginModalContextType | undefined>(
  undefined
);

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <LoginModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoginModal = () => {
  const context = useContext(LoginModalContext);
  if (!context)
    throw new Error("useLoginModal must be used within LoginModalProvider");
  return context;
};
