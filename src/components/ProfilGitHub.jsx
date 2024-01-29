import React, { useState, useEffect} from "react"; 
 

export default function Profil() { 

  // MAIN Liste des utilisateurs GitHub
  const [users, setUsers] = useState([]); 

  const getUsers = async () => {     
    const res = await fetch("https://api.github.com/users");     
    const json = await res.json();     
    // On stocke le résultat dans le state     
    setUsers(json);   
  };   

  useEffect(() => {     
    getUsers();   
  }, []);   
  
    
  return (     
        
      // <div>         
      //   {users.map((user) => (           
      //     <article key={user.id} className="card">             
      //       <h2>{user.login}</h2>             
      //       <img src={user.avatar_url} alt="{user.login}" />             
      //       <p>               
      //         <a href="{user.html_url}" target="_blank">                 
      //           {user.html_url}               
      //         </a>            
      //       </p>           
      //     </article>         
      //   ))}       
      // </div>  

          <div>         
            {users.map((user) => (           
              <article key={user.id} className="card">             
                <h2>{user.login}</h2>             
                <img src={user.avatar_url} alt="{user.login}" />             
                <p>               
                  <a href="{user.html_url}" target="_blank">                 
                    {user.html_url}               
                  </a>            
                </p>           
              </article>         
            ))}       
          </div>

      
      
  );
} 
