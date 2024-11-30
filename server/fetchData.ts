function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchData = async (url: string) => {
    try {
        await delay(2000);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};
