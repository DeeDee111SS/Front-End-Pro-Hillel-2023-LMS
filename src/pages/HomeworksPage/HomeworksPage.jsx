import { useGetHomeworksQuery } from '../../store/homeworksApi';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import Title from "../../components/Title";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { capitalizeFirstLetter, articlePreview } from "../../utils/helperfunctions";
import { Link } from "react-router-dom";

function HomeworksPage() {    
    const {data, isLoading} = useGetHomeworksQuery();

    if(isLoading) return <h3>Loading ...</h3>;

    return  <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 120,
                        }}
                    >
                        <Title>Homeworks</Title>
                        
                    </Paper>
                </Grid>   
                {data.slice().reverse().map(hw => (
                    <Grid item xs={12} md={4} lg={3} key={hw.id}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 340,
                            }}
                        >
                            <Title>#{hw.id} {capitalizeFirstLetter(hw.title)}</Title>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                {capitalizeFirstLetter(articlePreview(hw.description))}
                            </Typography>
                            <Link to={`/homeworks/${hw.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                    Go to homework
                                </Button>
                            </Link>
                        </Paper>
                    </Grid>
                ))} 
            </Grid>    
}

export default HomeworksPage;

