import { RefObject, useEffect } from "react";

export function useHandleOutsideClick({refs, onOutsideClick }: {refs: RefObject<any>[], onOutsideClick: () => void}) {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) { 
        if (!refs.find((ref) => ref.current.contains(e.target))) {
          onOutsideClick()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [refs, onOutsideClick]);
  }
