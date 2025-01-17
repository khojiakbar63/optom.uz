import React, { FC } from "react";
import './_style.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const Search: FC<InputProps> = ({ suffix, className, ...props }) => {
  return (
    <div className="input-container">
      <input {...props} className={`input-field ${className}`} />
      {suffix && <button className="suffix-btn">{suffix}</button>}
    </div>
  );
};

export default Search;
