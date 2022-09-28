import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

function Paragrafo() {
  return (
    <p>
      Est commodo aute duis ad voluptate. Aute proident ex officia ea pariatur id sit ipsum nisi nisi
      adipisicing. Amet in et labore irure adipisicing. Tempor commodo commodo exercitation dolore.
      Dolore dolor dolore et magna. In et consectetur laborum ex esse aliqua culpa ut. Sunt sint labore
      proident consequat.
    </p>
  )
}

function App() {
  return (
    <Container >
      <h1>Exemplo</h1>
      <Grid container spacing={4}>

        <Grid item xs={6}>
          <Paragrafo />
        </Grid>

        <Grid item xs={6}>
          <Paragrafo />
        </Grid>

        <Grid item xs={12}>
          <Paragrafo />
        </Grid>

        <Grid item xs={8}>
          <Paragrafo />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
