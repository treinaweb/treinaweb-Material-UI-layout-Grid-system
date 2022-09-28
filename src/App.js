import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)`
  background-color: #1A2027;
  text-align: center;
  color: white;
`

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

function Layout() {
  return (
    <Container >
      <Grid container spacing={2} component={'header'}>
        <Grid item xs={2}>
          <Item>LOGO</Item>
        </Grid>
        <Grid item xs={10} component={'nav'}>
          <Item>MENU</Item>
        </Grid>
      </Grid>

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
        <Grid item xs={4}>
          <Paragrafo />
        </Grid>

        <Grid item xs={12}>
          <Paragrafo />
        </Grid>
      </Grid>
      <Grid container component={'footer'}>

        <Grid item xs={12}>
          <Item>Footer</Item>
        </Grid>
      </Grid>
    </Container>

  )
}

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3} md={8} lg={12} xl={4}>
        <Item>ITEM 1</Item>
      </Grid>

      <Grid item xs={6} sm={3} md={4} lg={12} xl={4}>
        <Item>ITEM 2</Item>
      </Grid>

      <Grid item xs={6} sm={3} md={4} lg={12} xl={4}>
        <Item>ITEM 3</Item>
      </Grid>

      <Grid item xs={6} sm={3} md={8} lg={12} xl={4}>
        <Item>ITEM 4</Item>
      </Grid>

    </Grid>
  );
}

export default App;
