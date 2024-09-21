import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToUrl = () => {
  const navigate = useNavigate();
  return (url: string) => {
    navigate(url);
  };
};