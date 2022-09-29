import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

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
    <Grid container spacing={2}>
      <Grid item xs={'auto'}  >
        <Item>
          <Paragrafo />
        </Item>
      </Grid>

      <Grid item xs={6}  >
        <Item>
          <Paragrafo />
        </Item>
      </Grid>

      <Grid item xs={5}  >
        <Item>
          ITEM 3
        </Item>
      </Grid>

      <Grid item xs  >
        <Item>
          <Paragrafo />
        </Item>
      </Grid>

    </Grid>

  )
}

const message = `Sunt amet ex anim pariatur proident eiusmod magna Lorem deserunt esse ipsum labore. Est ut in enim minim sint labore exercitation in exercitation in commodo reprehenderit proident. Enim veniam enim reprehenderit aliquip eiusmod veniam commodo dolore sit. Adipisicing officia elit eu et veniam cillum est. Aliquip mollit nulla adipisicing tempor. Ipsum veniam exercitation sint incididunt reprehenderit quis fugiat deserunt nostrud.`

function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, bgcolor: 'blue' }}>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Grid container spacing={2} wrap='nowrap'>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Item>

      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Grid container spacing={2} wrap='nowrap'>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item >
            <Typography >{message}</Typography>
          </Grid>
        </Grid>
      </Item>

      <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Grid container spacing={2} wrap='nowrap'>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item >
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Item>
    </Box>
  )
}

const GridStyled = styled(Grid)`
  background-color: #1A2027;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

function TemplateGrid() {
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      sx={{ bgcolor: '#0a5483', height: '50vh' }}

    >
      <GridStyled item order={{ sm: 3 }} sx={{ p: 2 }}>
        ITEM 1
      </GridStyled>

      <GridStyled item order={{ sm: 1 }} sx={{ p: 2 }}>
        ITEM 2
      </GridStyled>

      <GridStyled item order={{ sm: 2 }} sx={{ p: 2 }}>
        ITEM 3
      </GridStyled>
    </Grid>
  )
}

function App() {
  return (
    <TemplateGrid />
  );
}

export default App;
