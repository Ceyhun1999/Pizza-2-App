import { Banner, CategoryMenu, HeroSection, HeroSectionSlider, PizzaItems, SearchPanel } from "./components";

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
                <Banner />
                <PizzaItems />
            </main>
        </>
    );
};

export default App;
