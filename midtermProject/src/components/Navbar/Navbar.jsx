import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Badge, Box, Button, ButtonBase, Icon, IconButton, Typography, Menu, MenuItem, Toolbar, Link } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import App from '../../App';

const Navbar = props => {
  return (
    <AppBar>
      <Typography position={'static'}>
        Welcome to Fake Shop!
      </Typography>

    </AppBar>
  )
}

Navbar.propTypes = {}

export default Navbar