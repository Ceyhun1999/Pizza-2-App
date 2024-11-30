import { Banner, CategoryMenu, HeroSection, HeroSectionSlider, PizzaItems, SearchPanel } from "./components";
import bannerSrc from "assets/images/pizzaBanner.webp";
import pastaSrc from "assets/images/bannerPasta.webp";

const App = () => {
    return (
        <>
            <header>
                <HeroSection />
                <HeroSectionSlider />
                <CategoryMenu />
            </header>
            <main className="container">
                <SearchPanel />
                <Banner bannerSrc={bannerSrc} />
                <PizzaItems />
                <Banner bannerSrc={pastaSrc} />
            </main>
        </>
    );
};

export default App;
