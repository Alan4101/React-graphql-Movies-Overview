import { useState } from "react";

export function useControlModal(): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToogleModal = () => setIsOpen(!isOpen);
  return [isOpen, handleToogleModal];
}
