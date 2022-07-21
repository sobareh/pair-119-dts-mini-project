import Navbar from './Components/Navbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImagePoster from './assets/111.jpeg';

function App() {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex' }} disableGutters>
      <Navbar />
      <Box sx={{ width: '100%', marginTop: 10 }}>
        <Box
          component='img'
          sx={{
            height: 408,
            width: 320,
            maxWidth: 345,
            objectFit: 'cover',
          }}
          alt='Logo'
          src={ImagePoster}
        />
        {/* <MovieCard /> */}
        <Box
          sx={{
            display: 'flex',
            height: 228,
            width: '100%',
            backgroundColor: '#141414',
            position: 'absolute',
          }}
        ></Box>
      </Box>
    </Container>
  );
}

export default App;
