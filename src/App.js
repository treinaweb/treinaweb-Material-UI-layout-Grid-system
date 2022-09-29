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
        <Grid item xs={2} sm={3}>
          <Item>LOGO</Item>
        </Grid>
        <Grid item xs={10} sm={9} component={'nav'}>
          <Item>MENU</Item>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paragrafo />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paragrafo />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paragrafo />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paragrafo />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paragrafo />
        </Grid>

        <Grid item xs={12} sm={8}>
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

function TabelaDeBreakpoints() {

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={2} md={3} >
        <Item>ITEM 1</Item>
      </Grid>

      <Grid item xs={2} sm={2} md={9} >
        <Item>ITEM 2</Item>
      </Grid>

      <Grid item xs={2} sm={2} md={3} >
        <Item>ITEM 3</Item>
      </Grid>

      <Grid item xs={2} sm={2} md={9} >
        <Item>ITEM 4</Item>
      </Grid>

    </Grid>

  )
}

function App() {
  return (
    <TabelaDeBreakpoints />
  );
}

export default App;
