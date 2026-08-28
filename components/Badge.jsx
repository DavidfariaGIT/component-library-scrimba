
export default function Badge({children, backgroundColor, variant}) {


  return (
    <div className={`sqaure-badge ${backgroundColor} ${variant || ""}`}>
        {children}
    </div>
  )
}
