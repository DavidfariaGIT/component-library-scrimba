
export default function Testimonials({children, photoless}) {
  return (
    <>
    {photoless ? 
    ( <div className='testimonial-photoless'>
     {children}
    </div>
    )  :  (
    <div className='testimonial'>
     {children}
    </div>
    )
    }
    </>
  )
}
