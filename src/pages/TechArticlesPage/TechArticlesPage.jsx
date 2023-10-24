import { useGetPostsQuery } from "../../store/articlesApi";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import Title from "../../components/Title";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TechArticlesPage() {
    const [numberOfPosts, setNumberOfPosts] = useState('');
    const {data, isLoading} = useGetPostsQuery(numberOfPosts);

    if(isLoading) return <h3>Loading ...</h3>;

    const changeNumberOfPosts = ({target}) => setNumberOfPosts(target.value);

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
                        <Title>Tech Articles Page</Title>
                        <div className="Articles">
                            <label>
                                <span>Number for articles to show: |{numberOfPosts || 'all' }| :</span>
                                <input type="number" onInput={changeNumberOfPosts} value={numberOfPosts}/>
                            </label>
                        </div>
                    </Paper>
                </Grid>   
                {data.map(post => (
                    <Grid item xs={12} md={4} lg={3} key={post.id}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 380,
                            }}
                        >
                            <Title>{post.title}</Title>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                {post.body}
                            </Typography>
                            <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                Read
                            </Button>
                        </Paper>
                    </Grid>
                ))} 
            </Grid>    
}

export default TechArticlesPage;

