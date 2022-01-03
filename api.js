export async function fetchImage(id) {
    const response = await fetch(`http://api.disneyapi.dev/characters/${id}`);
    const data = await response.json();
    return data.imageUrl;
}