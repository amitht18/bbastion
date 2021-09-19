export const RESOURCES = {
    COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
    PHOTOS: 'https://jsonplaceholder.typicode.com/photos',
    POSTS: (id: number) => `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    USERS: 'https://jsonplaceholder.typicode.com/users',

}