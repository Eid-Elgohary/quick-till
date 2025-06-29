"use client";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose, width = "w-[400px]" }: { 
  children: React.ReactNode; 
  onClose: () => void; 
  width?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Hook to close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed  inset-0 z-[1000] bg-black/30  flex items-center justify-center transition-all">
      <div
        ref={ref}
        className={`relative bg-white rounded-lg pb-8 p-2 md:p-4 transition-all overflow-y-auto max-h-[90vh] ${width}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X  className="w-6 h-6" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}
