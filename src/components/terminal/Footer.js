export const Footer = () => {
  
  let date = new Date()

  return (
    <div className='footer'>
      <div className="social">
        <div className='item' >Social:</div>
          <a 
            className='item' 
            href="https://github.com/ripterdust" 
            target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          <a className='item' href="https://www.linkedin.com/in/bryan-ar%C3%A9valo-353901182/" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className='item' href="mailto:bryantello2010@hotmail.com" target='_blank' rel="noreferrer">
              <i className="fa-solid fa-at"></i>
            </a>
      </div>
      <div className="time">
        {
          date.toLocaleDateString()
        }
      </div>
    </div>
  )
}
