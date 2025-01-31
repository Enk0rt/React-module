export const baseUrl = import.meta.env.VITE_API_URL

export const urls = {
    users: baseUrl+'/auth/users',
    recipes: baseUrl+'/auth/recipe',
}