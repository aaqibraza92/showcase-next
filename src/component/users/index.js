export default async function getUsers(){
    const res=  await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json();
}