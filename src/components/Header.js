import React from 'react'
import { Card } from '@mui/material'

const Header = ({ name }) => {
  return (
    <Card sx={{ position: 'fixed', top: 0, opacity: 0 }}>
      { name }
    </Card>
  )
}

export default Header