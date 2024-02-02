import React, { useEffect, useState } from "react"; 

export default function ProfilGitHub() { 

  const [user, setUser] = useState([]); 

  const getUser = async () => {     
    const res = await fetch("https://api.github.com/users/github-john-doe");     
    const json = await res.json();     
         
    setUser(json);   
  };   

  useEffect(() => {     
    getUser();
  }, []);   



  const [avatar, setAvatar] = useState([]); 

  const getAvatar = async () => {     
    const res = await fetch("https://avatars.githubusercontent.com/u/19842736?v=4");     
    const json = await res.json();     
         
    setAvatar(json);   
  };   

  useEffect(() => {     
    getAvatar();
  }, []); 
  


  return (  
    
    <div className="text-center text-break bg-light border rounded mx-md-5 mx-4">
     
        <h3 className="titre-color m-4">Utilisateur GitHub</h3>
     
      <div className="text-color m-4">
          <p className="my-4 mx-2 fs-3">{user.name}</p>

          <p className="my-4 mx-2">{user.avatar_url}</p>
          <div className="my-4 mx-2">{<img src="avatar" alt="" />}</div>
          <img src="https://avatars.githubusercontent.com/u/19842736?v=4" alt="Avatar John Doe" />

          <p className="my-4 mx-2">{user.bio}</p>
          <p className="my-4 mx-2">Abonnés: {user.followers}</p>
          <p className="my-4 mx-2">Abonnements: {user.following}</p>
          <p className="my-4 mx-2">Créé le: {user.created_at}</p>
          <p className="my-4 mx-2">Modifié le: {user.updated_at}</p>
          <p className="my-4 mx-2">URL repositories:{user.repos_url}</p>
      </div>
    </div>
  );
} 
