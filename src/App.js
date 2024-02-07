 import { Box, Button, Container, Paper, Typography } from '@mui/material';
const serviceList = ["Service 1", "Service 2", "Service 3"];
 function App() {
  //  sx={{background: 'tomato', height: '100vh' }}
  return (
    <Container sx={{my: 4, textAlign: 'center', color: "primary.main" }}>
      <Typography variant='h1'>
        Services
      </Typography>
      <Typography variant='h2'>Overview</Typography>
      <Box sx={{ pt: 4, display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 4, justifyContent: 'space-between'}}>
      {
        serviceList.map((service) => (
          <Paper elevation={3} sx={{height: 'auto', my: 3, p: 2, textAlign: 'left'}}>
            <Typography variant='h3' sx={{mb: 2}}>
              {service}
            </Typography>
            <Typography variant='paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <div>
              <Button variant='contained' sx={{mt: 2}}>LEARN MORE...</Button>
            </div>
          </Paper>
        ))
      }
      </Box>
    </Container>
  );
}

export default App;
