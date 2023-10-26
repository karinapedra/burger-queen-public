export default function Section(props) {
  return (
    <section>
      <div className='divSection'>
         <h2 className='h2Section'>{props.title}</h2>
         <p className='pSection'>{props.subtitle}</p>
         <ul className='tableList'>{props.children}</ul>
      </div>
    </section>
  )

} 


