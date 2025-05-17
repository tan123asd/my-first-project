import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import { Warning, School, Group, LocalHospital, Security } from '@mui/icons-material';

const Prevention: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Phòng Ngừa Sử Dụng Ma Túy
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Dấu Hiệu Nhận Biết
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Warning color="error" />
            </ListItemIcon>
            <ListItemText 
              primary="Thay đổi hành vi đột ngột"
              secondary="Thay đổi tính cách, tâm trạng thất thường, xa lánh gia đình và bạn bè"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Warning color="error" />
            </ListItemIcon>
            <ListItemText 
              primary="Suy giảm sức khỏe"
              secondary="Mất ngủ, ăn uống thất thường, sụt cân không rõ nguyên nhân"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Warning color="error" />
            </ListItemIcon>
            <ListItemText 
              primary="Khó khăn về tài chính"
              secondary="Thường xuyên xin tiền, bán đồ đạc cá nhân, có dấu hiệu trộm cắp"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Biện Pháp Phòng Ngừa
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <School color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Giáo dục nhận thức"
              secondary="Trang bị kiến thức về tác hại của ma túy và kỹ năng từ chối"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Group color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Hoạt động cộng đồng"
              secondary="Tham gia các hoạt động xã hội, thể thao, văn hóa lành mạnh"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Security color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Giám sát và bảo vệ"
              secondary="Theo dõi và bảo vệ người thân khỏi các tác động tiêu cực"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Hỗ Trợ Y Tế
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocalHospital color="error" sx={{ mr: 2 }} />
          <Typography variant="h6">
            Đường dây nóng hỗ trợ: 1800 xxxx
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          Nếu bạn hoặc người thân có dấu hiệu sử dụng ma túy, hãy liên hệ ngay với các cơ sở y tế chuyên môn để được tư vấn và hỗ trợ kịp thời. Việc phát hiện và điều trị sớm sẽ giúp tăng khả năng phục hồi và giảm thiểu các tác hại lâu dài.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Prevention; 