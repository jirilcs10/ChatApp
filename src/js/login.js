const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",login);



async function login(e)
{  
    e.preventDefault();
    const obj={
        email:"abc",
        password:"abc",
    }
    obj.email=document.getElementById('email').value;
    obj.password=document.getElementById('password').value;
    console.log(obj);
    let resp;
    try
    {
       resp =await axios.post(`/user/login`,obj);
       console.log(resp);
    //    alert("Logged in Successfully");
       alert(resp.data.message);
       localStorage.setItem('token',resp.data.token)
    }
    catch(err){
        const error=JSON.stringify(err.message);
        
        if(error.includes(404))
        alert("User not Found");
        else if(error.includes(401))
        alert("Not Authorized, check you password and email");
        else
        {
          alert(error);
        }
  }
    
    
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    
    
}

