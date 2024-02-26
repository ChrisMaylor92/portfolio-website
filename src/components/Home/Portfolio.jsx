import { BlogAPI } from "./Portfolio/BlogAPI"
import { PortfolioItem } from "./Portfolio/PortfolioItem"
import portfolio from "../../data/portfolio"


export const Portfolio = () => {
    return <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
                <PortfolioItem key={project.title}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                />
            ))}
        </div>
        
        
    </div>
}