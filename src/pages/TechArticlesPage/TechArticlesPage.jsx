import { useGetPostsQuery } from "../../store/articlesApi";
import { useState } from "react";
import Grid from '@mui/material/Grid';

function TechArticlesPage() {
    const [numberOfPosts, setNumberOfPosts] = useState('');
    const {data, isLoading} = useGetPostsQuery(numberOfPosts);

    if(isLoading) return <h3>Loading ...</h3>;

    const changeNumberOfPosts = ({target}) => setNumberOfPosts(target.value);

    return <Grid container spacing={3}>
                <div>TechArticlesPage</div>
                <div className="Articles">
                    <label>
                        <span>Number for posts to show: |{numberOfPosts || 'all' }| :</span>
                        <input type="number" onInput={changeNumberOfPosts} value={numberOfPosts}/>
                    </label>
                    <ul>
                        {data.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            </Grid>
    
}

export default TechArticlesPage;

