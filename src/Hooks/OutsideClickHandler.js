import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref, handleBlur) {
  useEffect(() => {
    //Function that checks if the click is outside of wrapped element and triggers function
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!handleBlur) return;
        handleBlur();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    //Clean up function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleBlur, ref]);
}

//Component that will trigger given function if clicked outside out wrapped element
function OutsideClickHandler(props) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, props.handleBlur);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideClickHandler.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideClickHandler;
