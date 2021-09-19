export const RESOURCES = {
    COMMENTS: (id: number) => `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    PHOTOS: 'https://jsonplaceholder.typicode.com/photos',
    POSTS: (id: number) => `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    USERS: 'https://jsonplaceholder.typicode.com/users',

}