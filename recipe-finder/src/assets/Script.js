export const getRecipe = async (query) => {
    const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
    const apiKey = "tAm7eY3d3Tnfzx2liDhy9A==ksCEcJqB4K1DZYLE";

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the recipe:', error);
        throw error;  // rethrow the error to handle it in the calling function
    }
};
