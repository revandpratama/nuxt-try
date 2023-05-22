export default defineEventHandler(async () => {
    const user = await $fetch('https://fakestoreapi.com/users/1')

    // return user;

    return `Hello ${user.name.firstname}, your email is ${user.email}`;
})