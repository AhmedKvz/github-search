const avatarGit = document.querySelector(".avatar");
const nameGit = document.querySelector(".name");
const date = document.querySelector(".date");
const usernameGit = document.querySelector(".username");
const biography = document.querySelector(".biography");
const repository = document.querySelector(".repository");
const follower = document.querySelector(".follower");
const following = document.querySelector(".following");
const city = document.querySelector(".city");
const blogGit = document.querySelector(".blog");
const blogUrl = document.getElementById('website');
const twitter = document.querySelector(".twitter");
const company = document.querySelector(".company"); 
const companyUrl = document.getElementById("company");
const body = document.querySelector("body");
const button = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");
const colorLight = document.querySelector(".color-light");




const loadUser = (username) => {
    fetch(`https://api.github.com/users/${username}`).then((response)=>{
        credentials: 'include'
    if(response.ok)
        {
            return response.json();
        }
        else
        {
            document.querySelector(".no-result").classList.add("visible");
        }
    }
    ).then((data)=>{
        console.log(data);
        const dateGit = new Date(data.created_at);
        avatarGit.querySelector("img").src = data.avatar_url;
        nameGit.innerHTML = data.name === "" || data.name === null ? data.login : data.name;
        date.innerHTML = dateGit.getDate()+" "+dateGit.toLocaleString("default", { month: "short" })+" "+dateGit.getFullYear();
        usernameGit.innerHTML = "@" + data.login;
        biography.innerHTML = data.bio === "" || data.bio === null ? "This Profile has no bio" : data.bio;
        repository.innerHTML = data.public_repos;
        follower.innerHTML = data.followers;
        following.innerHTML = data.following;
        city.innerHTML = data.location === "" || data.location === null ? "Not Available" : data.location;
        blogGit.innerHTML =  data.blog === "" || data.blog === null ? "Not Available" : data.blog;
        blogUrl.innerHTML = `<a target="_blank" href="${data.blog}">${data.blog}</a>`;
        twitter.innerHTML = data.twitter_username === null || data.twitter_username === "" ? (twitter.parentElement.classList.add("not-available"),"Not Available") : data.twitter_username;
        // company.innerHTML = data.company === "" || data.company === null ? "Not Available" : data.company;
        companyUrl.innerHTML = `<a target="_blank" href="${data.company}">${data.company}</a>` 

    }).catch((error)=>{
        console.log(error);
    })
}


window.addEventListener("load",(e)=>{
    loadUser("octocat");
    if(localStorage.getItem('theme')==='light')
    {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
    }
    else if(localStorage.getItem('theme')==='dark')
    {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    }
    else
    {
        if(window.matchMedia('(prefers-color-scheme: dark)'))
        {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme','dark');
        }
        else
        {
            document.documentElement.classList.add("light");
            localStorage.setItem('theme','light');
        }
    }
    console.log(localStorage);
})
button.addEventListener("click",function(){
    loadUser(input.value);
})
input.addEventListener("keypress",function(e){
    if(e.key==="Enter")
    {
        loadUser(input.value);
    }
})


colorLight.addEventListener("click",function(){
    if(localStorage.getItem('theme')==='light')
    {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme','dark');
    }
    else if(localStorage.getItem('theme')==='dark')
    {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem('theme','light');
    }
    else
    {
        if(window.matchMedia('(prefers-color-scheme: dark)'))
        {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme','dark');
        }
        else
        {
            document.documentElement.classList.add("light");
            localStorage.setItem('theme','light');
        }
    }
    console.log(localStorage);
})

