import React from 'react'
import { Button, ChevronRightIcon } from 'native-base'

const Secondarybutton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      background='white'
      variant='outline'
      shadow='RedOutlineShadow'
      borderRadius=' 100px'
      rightIcon={<ChevronRightIcon size='sm' color='black' />}
    >
      {children}
    </Button>
  )
}
export default React.memo(Secondarybutton)
