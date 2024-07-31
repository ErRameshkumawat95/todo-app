import React from 'react'

import AddNewMemberForm from './AddNewMemberForm';

function ToggleButton({onChange}) {
  const [show, setShow] = React.useState(false);

  const toggle = () => {
    setShow(!show);
  };

  React.useEffect(() => {
    onChange(show);
  }, [show])

  return (
     <button onClick={toggle}>
        {show ? 'Hide' : 'show form for add new member' }
      </button>
  );
}

export default ToggleButton;

 

  
