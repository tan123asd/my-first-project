import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Chip,
} from '@mui/material';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Nhận biết các dấu hiệu nghiện ma túy',
    description: 'Hướng dẫn chi tiết về cách nhận biết các dấu hiệu khi người thân có nguy cơ nghiện ma túy và cách can thiệp kịp thời.',
    image: '/blog/signs-of-addiction.jpg',
    category: 'Kiến thức',
    date: '2024-05-15',
  },
  {
    id: 2,
    title: 'Phương pháp giáo dục phòng chống ma túy trong trường học',
    description: 'Chia sẻ các phương pháp hiệu quả để giáo dục học sinh về tác hại của ma túy và kỹ năng từ chối.',
    image: '/blog/education-methods.jpg',
    category: 'Giáo dục',
    date: '2024-05-12',
  },
  {
    id: 3,
    title: 'Câu chuyện hồi phục: Hành trình chiến thắng nghiện ngập',
    description: 'Những câu chuyện thật về những người đã vượt qua nghiện ngập và xây dựng lại cuộc sống.',
    image: '/blog/recovery-stories.jpg',
    category: 'Câu chuyện',
    date: '2024-05-10',
  },
  // Add more blog posts here
];

function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Blog chia sẻ
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Thông tin, kinh nghiệm và kiến thức về phòng chống ma túy
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={post.category}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog; 