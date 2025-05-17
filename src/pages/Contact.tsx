import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log(formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Liên Hệ Với Chúng Tôi
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Thông Tin Liên Hệ
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone color="primary" sx={{ mr: 2 }} />
              <Typography>
                Hotline: 1800 xxxx
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email color="primary" sx={{ mr: 2 }} />
              <Typography>
                Email: support@prevention.org
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn color="primary" sx={{ mr: 2 }} />
              <Typography>
                Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Gửi Tin Nhắn
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Họ và tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Số điện thoại"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Nội dung tin nhắn"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                margin="normal"
              />
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Gửi Tin Nhắn
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Tin nhắn của bạn đã được gửi thành công!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 