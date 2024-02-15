

const sendBtn=document.getElementById("send");
sendBtn.addEventListener("click",sendMsg);

async function sendMsg(e){
    e.preventDefault();
    const token=localStorage.getItem('token');
    const obj={
        msg:"abc",
    }
    obj.msg=document.getElementById('msg').value;
    console.log(obj);
    let resp;
    try
    {
       resp =await axios.post(`/user/send`,obj,{headers:{"Authorization":token}});
       console.log(resp);
    }
    catch(err){
        const error=JSON.stringify(err.message);
        
       
          alert(error);
        
}
}