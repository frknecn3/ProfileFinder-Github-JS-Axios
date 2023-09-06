const API_URL='https://api.github.com/users/'

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#main')
const username = document.querySelector('.user-name')
const bio = document.querySelector('#bio')
const image = document.querySelector('.user-image')
const details = document.querySelector('ul')
const repos = document.querySelector('#repos')

const reposElement = document.querySelector('.repos')
var returnedRepos = []

const renderProfileData=(user)=>{

    const cardHTML = `

    <div class="card">
    <img src=${user.avatar_url} class="user-image" alt=${user.name}>
    <div class="user-info">
        <div class="user-name">
            <h2>${user.name}</h2>
            <small>${user.login}</small>
        </div>
    </div>

    <p>${user.bio}</p>
    
    <ul>
        <li>
          <i class="fa-solid fa-user-group"></i> ${nFormatter(user.followers)} <br>
          <strong>Followers</strong>
        </li>
        <li>${user.following}<br><strong>Following</strong></li>
        <li>
          <i class="fa-solid fa-bookmark"></i> ${user.public_repos}<br><strong>Repositories</strong>
        </li>
      </ul>
        <h4 style='color:rgb(255,255,255);margin-bottom:16px'> ${user.name}'s Repos </h4>
    <div class="repos" id="repos"></div>
</div>
    
    `;
    main.innerHTML = cardHTML;
}

async function getUser(username){
    try{
        const {data} = await axios(API_URL + username)
        repos.innerHTML=''
        getRepos(username)
        renderProfileData(data)
        console.log(data)
    }catch(error){
        console.log(error)
        throwError()
    }

}


const getRepos = async (username) => {
    try {
        const {data} = await axios(API_URL+username+"/repos")
        
        addReposToCard(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

function addReposToCard(data){

    const reposEl = document.getElementById('repos');
    if(data instanceof Array)
    {
    data.slice(0,5).forEach((repo) => {
        const reposLink = document.createElement('a')
        reposLink.href = repo.html_url;
        reposLink.target = "_blank";
        reposLink.innerHTML = `
        
        <i class="fa-solid fa-book-bookmark"></i>${repo.name}
        
        ` 
        reposEl.appendChild(reposLink);
    })

}
}



const nFormatter=(num)=>{
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let user = search.value

    if(user){
        getUser(user)
        console.log('enter')
        search.value=''
    }
    
})



const throwError = ()=>{
    let htmlErrorCard=`
    <div class='card'>
        <h2> Sorry, the person you searched couldn't be found on GitHub.</h2>
    </div>`

    main.innerHTML=htmlErrorCard


}
