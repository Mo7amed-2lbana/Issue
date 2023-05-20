import { createContext } from "react";

export const HandleActiveContext = createContext();
export function HandleActiveContextProvider({ children }) {
  function handleActive(parent) {
    document.querySelectorAll(`.${parent} .item`).forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelectorAll(`.${parent} .item`).forEach((el) => {
          el.classList.remove("active");
        });
        el.classList.add("active");
      });
    });
  }
  function handleDelete() {
    document.querySelectorAll(`.item`).forEach((el) => {
      el.classList.remove("active");
    });
  }

  return (
    <>
      <HandleActiveContext.Provider value={{ handleActive, handleDelete }}>
        {children}
      </HandleActiveContext.Provider>
    </>
  );
}
