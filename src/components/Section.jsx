export default function Section(props) {
  return (
    <section>
      <div className='divSection'>
         <h2 className='h2Section'>{props.title}</h2>
         <h2 className='h2TableSelected'>{props.tableSelected}</h2>
         <h2 className='h2TableBill'>{props.tableBill}</h2>
         
         <p className='pSection'>{props.subtitle}</p>
         <ul className='tableList'>{props.children}</ul>
      </div>
    </section>
  )

} 


