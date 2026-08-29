import useHover  from "../hooks/useHover";

export default function Cards({ children }) {

 const [element, hovered] = useHover()
 
  const style = {
    boxShadow: hovered ? "5px 5px 10px rgba(0.3, 0.3, 0.3, 0.3)" : "none",
  };

  return (
    <>
      <div className="card" style={style} ref={element}>
        {children}
      </div>
    </>
  );
}
