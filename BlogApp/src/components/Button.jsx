import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "", // classname is empty string becuase use can insert thier style too
  ...props // i used "...props" spread operator to spread all the props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props} // whichever the props passed by user, i can display here that all props
    >
      {children}
    </button>
  );
};

export default Button;
