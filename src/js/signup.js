const signupForm=document.getElementById("signupForm");

signupForm.addEventListener("submit",signup);


async function signup(e)
{  
    e.preventDefault();
    const obj={
        name:"abc",
        email:"abc",
        password:"abc",
        phno:123
    }
    obj.name=document.getElementById('name').value;
    obj.email=document.getElementById('email').value;
    obj.password=document.getElementById('password').value;
    obj.phno=document.getElementById('phno').value;
    console.log(obj);
    let resp;
    try
    {
       resp =await axios.post(`/user/signup`,obj);
       console.log(resp);
       alert("Sign Up Successfull")
    }
    catch(err){
        const error=JSON.stringify(err.message);
         console.log(err);
         if(error.includes(414))
         alert("User already exists, Please Login");
    }
    
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    document.getElementById('phno').value="";
    
}

