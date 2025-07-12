import { useState } from 'react';

type Toast = {
  id: string;
  message: string;
  title?: string; // Optional title
  description?: string; // Optional description
  variant?: string; // Optional variant
};

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, duration: number = 3000) => {
    const id = new Date().getTime().toString(); // Generate a unique ID
    const newToast = { id, message };
    setToasts((prev) => [...prev, newToast]);

    // Auto-dismiss toast after specified duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // The toast function that can accept an object
  const toast = ({
    message,
    title,
    description,
    variant,
  }: {
    message: string;
    title?: string;
    description?: string;
    variant?: string;
  }) => {
    addToast(message); // You can customize how you want to handle title and variant
  };

  return {
    toast,      // The toast function
    toasts,     // Current toasts
    removeToast  // Function to remove a toast
  };
};

export default useToast;
export { useToast };