import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { FaHouseChimney, FaUserLarge, FaVideo, FaRegNewspaper } from "react-icons/fa6";

const ButtonNavigasi = ({ property, className, icon, text }) => {
  const [state, dispatch] = useReducer(reducer, {
    property: property || "idle",
  });

  const getButtonStyles = () => {
    if (state.property === "hovered") {
      return " text-white hover:bg-[#3EBB5C]";
    } else {
      return "bg-[#C3EACC]";
    }
  };

  const getIconStyles = () => {
    if (state.property === "hovered") {
      return "text-white";
    } else {
      return "text-green-500";
    }
  };

  return (
    <div
      className={`w-[233px] flex items-center relative p-2 rounded-md cursor-pointer justify-between  ${getButtonStyles()} ${className}`}
      onMouseLeave={() => {
        dispatch({ type: "mouseLeave" });
      }}
      onMouseEnter={() => {
        dispatch({ type: "mouseEnter" });
      }}
    >
      <div className="w-[168px] flex items-center gap-[12px] h-[48px] rounded-[10px] ">
        <div className={`flex-1 h-[24px] relative ${getIconStyles()} `}>{renderIcon(icon)}</div>
        <span className={`relative w-fit text-[15px] font-medium text-center whitespace-nowrap leading-[22px] ${state.property === "hovered" ? "text-white" : "text-slate-700"}`}>{text}</span>
      </div>
    </div>
  );
};

function renderIcon(icon) {
  switch (icon) {
    case "dashboard":
      return <FaHouseChimney />;
    case "user":
      return <FaUserLarge />;
    case "video":
      return <FaVideo />;
    case "news":
      return <FaRegNewspaper />;
    default:
      return null;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "mouseEnter":
      return {
        ...state,
        property: "hovered",
      };
    case "mouseLeave":
      return {
        ...state,
        property: "idle",
      };
    default:
      throw new Error();
  }
}

ButtonNavigasi.propTypes = {
  property: PropTypes.oneOf(["idle", "hovered"]),
  className: PropTypes.string,
  icon: PropTypes.oneOf(["dashboard", "user", "video", "news"]).isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonNavigasi;
