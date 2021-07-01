import { useState, useCallback } from "react";

const useOpen = (initial = false) => {
  const [open, setOpen] = useState(initial);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen(prevOpen => !prevOpen), []);
  return {
    open,
    onOpen,
    onClose,
    toggle,
  };
};
export default useOpen;
