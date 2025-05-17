import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'Nhận Biết Các Dấu Hiệu Nghiện Ma Túy',
    description: 'Hướng dẫn chi tiết cách nhận biết các dấu hiệu khi người thân có nguy cơ nghiện ma túy và cách can thiệp kịp thời.',
    image: '/images/blog/signs.jpg',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Kỹ Năng Từ Chối Ma Túy Cho Giới Trẻ',
    description: 'Các kỹ năng và phương pháp hiệu quả giúp giới trẻ tự tin từ chối ma túy trong các tình huống cụ thể.',
    image: '/images/blog/skills.jpg',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'Vai Trò Của Gia Đình Trong Phòng Chống Ma Túy',
    description: 'Phân tích vai trò quan trọng của gia đình trong việc phòng ngừa và phát hiện sớm việc sử dụng ma túy.',
    image: '/images/blog/family.jpg',
    date: '2024-01-05'
  }
];

function Blog() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Blog Chia Sẻ Kinh Nghiệm
      </Typography>
      
      <Typography variant="h5" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Kiến thức và kinh nghiệm về phòng chống ma túy
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  Ngày đăng: {post.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Đọc thêm
                </Button>
                <Button size="small" color="primary">
                  Chia sẻ
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary">
          Xem Thêm Bài Viết
        </Button>
      </Box>
    </Container>
  );
}

export default Blog; 