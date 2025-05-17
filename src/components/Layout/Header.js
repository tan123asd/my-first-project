import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Phòng Chống Ma Túy
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">
            Trang Chủ
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/courses">
            Khóa Học
          </Button>
          <Button color="inherit" component={Link} to="/survey">
            Khảo Sát
          </Button>
          <Button color="inherit" component={Link} to="/appointment">
            Đặt Lịch Hẹn
          </Button>
          <Button color="inherit" component={Link} to="/programs">
            Chương Trình
          </Button>
          <Button color="inherit" component={Link} to="/prevention">
            Phòng Ngừa
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Liên Hệ
          </Button>
          
          <IconButton
            size="large"
            color="inherit"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/dashboard" onClick={handleClose}>
              Dashboard
            </MenuItem>
            <MenuItem component={Link} to="/login" onClick={handleClose}>
              Đăng Nhập
            </MenuItem>
            <MenuItem component={Link} to="/register" onClick={handleClose}>
              Đăng Ký
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header; 