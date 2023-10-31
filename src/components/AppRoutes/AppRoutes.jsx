import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import TechArticlesPage from "../../pages/TechArticlesPage";
import SingleArticlePage from "../../pages/SingleArticlePage";
import HomeworksPage from "../../pages/HomeworksPage";
import LessonsPage from "../../pages/LessonsPage";

const AppRoutes = () => {
    return <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/articles" element={<TechArticlesPage />} /> 
            <Route path="/articles/:articleId" element={<SingleArticlePage />} /> 
            <Route path="/homeworks" element={<HomeworksPage />} /> 
            <Route path="/lessons" element={<LessonsPage />} /> 
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here! Go to previous page.</p>
                    </main>
                }
            />
        </Routes>
}

export default AppRoutes;