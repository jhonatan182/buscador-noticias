import { Container , Typography, Grid } from '@mui/material';
import Formulario from './Formulario';
import ListadoNoticias from './ListadoNoticias';

const AppNoticas = () => {

    return (

        <Container>

            <header>
                <Typography 
                    component='h1' 
                    variant="h3" 
                    marginY={5}
                    align= 'center'
                    >
                    Buscador de Noticias
                </Typography>
            </header>

            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    
                >
                    <Formulario />
                </Grid>
            </Grid>

            <ListadoNoticias />

        </Container>
    )
}

export default AppNoticas