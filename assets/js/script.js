const avatarGit = document.querySelector(".avatar")
const nameGit = document.querySelector(".name")
const date = document.querySelector(".date")
const usernameGit = document.querySelector(".username")
const biography = document.querySelector(".biography")
const repository = document.querySelector(".repository")
const follower = document.querySelector(".follower")
const following = document.querySelector(".following")
const city = document.querySelector(".city")
const blog = document.querySelector(".blog")
const twitter = document.querySelector(".twitter")
const company = document.querySelector(".company")
const body = document.querySelector("body")
const button = document.querySelector(".search-btn")
const input = document.querySelector(".search-input")

const loadUser = (username) => {
    fetch(`https://api.github.com/users/${username}`).then((response)=>{
        if(response.ok)
        {
            return response.json()
        }
        else
        {
            console.log("Error")
        }
    }
    ).then((data)=>{
        console.log(data)
        const dateGit = new Date(data.created_at)
        //avatarGit.style.backgroundImage = url(data.avatar_url)
        nameGit.innerHTML = data.name === "" || data.name === null ? data.login : data.name
        date.innerHTML = dateGit.getDate()+" "+dateGit.toLocaleString("default", { month: "short" })+" "+dateGit.getFullYear()
        usernameGit.innerHTML = "@" + data.login
        biography.innerHTML = data.bio === "" || data.bio === null ? "This User has no bio" : data.bio
        repository.innerHTML = data.public_repos
        follower.innerHTML = data.followers
        following.innerHTML = data.following
        city.innerHTML = data.location === "" || data.location === null ? "Not Available" : data.location
        blog.innerHTML = data.blog === "" || data.blog === null ? "Not Available" : data.blog
        twitter.innerHTML = data.twitter === "" || data.twitter === null ? "Not Available" : data.twitter
        company.innerHTML = data.company === "" || data.company === null ? "Not Available" : data.company
    }).catch((error)=>{

    })
}

body.addEventListener("load",loadUser("octocat"))