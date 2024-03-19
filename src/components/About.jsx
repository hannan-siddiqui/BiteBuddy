import { useEffect, useState } from "react";

const About = ()=>{
    const [user, setuser] = useState([]);

    useEffect[()=>{
        fetchdata();

    }, []];

    const fetchdata = async ()=>{
        const data = await fetch("https://api.github.com/users/hannan-siddiqui");
        const json = data.json();
        setuser(json);


        
    }

    const {name} = user;

    const userData = 
        {
            "login": "hannan-siddiqui",
            "id": 115110479,
            "node_id": "U_kgDOBtxyTw",
            "avatar_url": "https://avatars.githubusercontent.com/u/115110479?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/hannan-siddiqui",
            "html_url": "https://github.com/hannan-siddiqui",
            "followers_url": "https://api.github.com/users/hannan-siddiqui/followers",
            "following_url": "https://api.github.com/users/hannan-siddiqui/following{/other_user}",
            "gists_url": "https://api.github.com/users/hannan-siddiqui/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/hannan-siddiqui/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/hannan-siddiqui/subscriptions",
            "organizations_url": "https://api.github.com/users/hannan-siddiqui/orgs",
            "repos_url": "https://api.github.com/users/hannan-siddiqui/repos",
            "events_url": "https://api.github.com/users/hannan-siddiqui/events{/privacy}",
            "received_events_url": "https://api.github.com/users/hannan-siddiqui/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Hannan Siddiqui",
            "company": null,
            "blog": "",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": "just a student........",
            "twitter_username": null,
            "public_repos": 6,
            "public_gists": 0,
            "followers": 4,
            "following": 5,
            "created_at": "2022-10-05T19:04:34Z",
            "updated_at": "2024-03-15T21:40:37Z"
          }
    



    return (
        <div>
            <h1>{userData.name}</h1>
            <h1>this is about us page</h1>
            <h1>this is about us page</h1>
        </div>
    )
}

export default About;