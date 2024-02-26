import { Portfolio } from "./Home/Portfolio"

export const Home = () => {
    
    return <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
           <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Chris Maylor</h1>
           <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
           <p className="text-small max-w-xl mb-6 font-bold">This is my bio...</p>
           <img src="portfolio-website/src/assets/background2.png"></img>
           <Portfolio/>
        </div>
}