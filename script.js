const dark_mode = document.querySelector('.mode_btn');
const light_mode =document.querySelector('.mode_btn1');
const main_content = document.querySelector('.main');
const followers_info = document.querySelector('.followers_info');
const search_section = document.querySelector('.search_section');
const search_input = document.querySelector('input');
const search_button = document.querySelector('button');
const user_dp = document.querySelector('.dp_img');
const user_naam = document.querySelector('.user_naam');
const github_id = document.querySelector('.github_id');
const join_date = document.querySelector('.join_date');
const user_bio = document.querySelector('.user_bio');
const repos_box =document.querySelector('.repos_box');
const followers_box =document.querySelector('.followers_box');
const following_box =document.querySelector('.following_box');
const location_box =document.querySelector('.location');
const web_link =document.querySelector('.web_link');
const twitter_link =document.querySelector('.twitter_link');
const company =document.querySelector('.company');




light_mode.classList.add('active1');
default_mode();

function second_mode() {
    document.body.style.background = "#f6f8ff";
    main_content.style.background = "white";
    followers_info.style.background = "#f6f8ff";
    search_section.style.background = "white";
    search_input.style.background ="white";
    document.body.style.color = "grey";
    location_box.style.fontSize ="1rem";
    location_box.style.color ="black";
    web_link.style.fontSize ="1rem";
    web_link.style.color ="black";
    twitter_link.style.fontSize ="1rem";
    twitter_link.style.color ="black";
    company.style.fontSize ="1rem";
    company.style.color ="black";
    
}

function default_mode() {
    document.body.style.background = "#141D2F";
    main_content.style.background = "#1E2A47";
    followers_info.style.background = "#141D2F";
    search_section.style.background = "#1E2A47"
    search_input.style.background ="#1E2A47";
    document.body.style.color = "white"; 
    location_box.style.fontSize ="1.3rem";
    location_box.style.color ="white";
    web_link.style.fontSize ="1.3rem";
    web_link.style.color ="white";
    twitter_link.style.fontSize ="1rem";
    twitter_link.style.color ="white";
    company.style.fontSize ="1rem";
    company.style.color ="white";
    

}

light_mode.addEventListener('click',function() {
    light_mode.classList.remove('active1');
    dark_mode.classList.add('active');
    second_mode();
    
    
})


dark_mode.addEventListener('click',function() {
    light_mode.classList.add('active1');
    dark_mode.classList.remove('active'); 
    default_mode();
    
})

const url = 'https://api.github.com/users/';





async function fetch_data() {
    try {
        
        let user_id = search_input.value;
        let API = url+user_id;
        const response = await fetch(API);
        if(response.status===404){
            alert('wrong user name');
            return Promise.reject();
            
        }
        console.log(response);
        
        const data = await response.json();        
         rederinfo(data);
        
    } 
    
    catch (error) {
        
    }
    

    
}

search_button.addEventListener('click',function(){
    if(search_input.value!==""){
        fetch_data();
    }
})

search_input.addEventListener('keypress',function(event) {
    if(event.key==="Enter" && search_input.value!==""){
        fetch_data();
    }
})

function rederinfo(data) {
    
        user_dp.src = `${data?.avatar_url}`;
    user_naam.textContent = `${data?.name}`;
    github_id.href =`${data?.html_url}`;
    github_id.textContent =`@${data?.login}`;
    join_date.textContent =`${data?.created_at}`.split("T").shift();
    user_bio.textContent = data.bio == null ? "This profile has no bio" : `${data?.bio}`;
    repos_box.textContent = `${data?.public_repos}`;
    followers_box.textContent =`${data?.followers}`;
    following_box.textContent =`${data?.following}`;
    location_box.textContent =`${data?.location}`;
    if(data?.blog==""){
        web_link.style.pointerEvents="none"; 
    }
    else{
        web_link.href = `${data?.blog}`;
        web_link.style.pointerEvents="auto";

    }
    web_link.textContent = data?.blog == "" ? "no blog":"blog link";
    if(data?.twitter_username==null){
        twitter_link.style.pointerEvents="none"; 
    }
    else{
        twitter_link.href =`https://twitter.com/${data.twitter_username}`;
        twitter_link.style.pointerEvents="auto";
    } 
    twitter_link.textContent = data.twitter_username==null?"not available":"Twitter";
    company.textContent = data?.company == null ? "no company":`${data?.company}`;   
}



async function fetch_data2() {
    try {
        
        let user_id = search_input.value;
        let API = url+"lovebabbar";
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        rederinfo(data);
        
    } catch (error) {
        
    }
}

fetch_data2();







    
