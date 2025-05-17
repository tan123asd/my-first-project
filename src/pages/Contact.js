import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Box,
  Alert,
  MenuItem,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const contactReasons = [
  'Tư vấn chung',
  'Đăng ký khóa học',
  'Hỗ trợ khẩn cấp',
  'Góp ý, phản hồi',
  'Khác',
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Liên hệ
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Thông tin liên hệ
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography>
                  123 Đường ABC, Quận XYZ
                  <br />
                  TP.HCM, Việt Nam
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>
                  Hotline: 1800-xxxx
                  <br />
                  Tel: (028) xxxx-xxxx
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>contact@drugprevention.com</Typography>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Giờ làm việc
            </Typography>
            <Typography>
              Thứ 2 - Thứ 6: 8:00 - 17:00
              <br />
              Thứ 7: 8:00 - 12:00
              <br />
              Chủ nhật: Nghỉ
              <br />
              <strong>Hotline hỗ trợ khẩn cấp 24/7</strong>
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Gửi tin nhắn cho chúng tôi
            </Typography>
            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Họ và tên"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Lý do liên hệ"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                  >
                    {contactReasons.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Tin nhắn"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Gửi tin nhắn
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact; 