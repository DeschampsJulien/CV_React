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


  return (  
    
    <div className="text-center text-break bg-light border rounded mx-md-5 mx-4">
     
        <h3 className="titre-color m-4">Utilisateur GitHub</h3>
     
      <div className="text-color m-4">
        
          {/* RECUPERATION D'UN TEXTE */}
          <p className="my-4 mx-2 fs-3">{user.name}</p>

          {/* RECUPERATION D'UNE IMAGE */}
          <div className="my-4 mx-2">{<img className="img-fluid" src={user.avatar_url} alt="Avatar John Doe" />}</div>

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
