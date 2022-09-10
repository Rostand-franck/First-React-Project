import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
      console.log('click'); 
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'close' : 'Add'} 
          onClick={onAdd}/>
        {/* <Button color='blue' text='hello 1'/>
        <Button color='yellow' text='hello 2'/> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

//CSS in Js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header