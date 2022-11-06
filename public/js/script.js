const login = document.getElementById("login");
const register = document.getElementById("register");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
if(register){
    register.onsubmit = async e =>{
        e.preventDefault();
        try{
            const body ={
                username: username.value,
                email: email.value,
                password: password.value
            }
            const res = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify(body)
            })
            const json = await res.json();
            if(!json.ok) throw new Error(json.message);
            window.location.href = "/";
        }
        catch(error){
            alert(error.message);
        }
    }
}else if (login){
    login.onsubmit = async e =>{
        e.preventDefault();
        try{
            const body ={
                username: username.value,
                password: password.value
            }
            const res = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify(body)
            })
            const json = await res.json();
            if(!json.ok) throw new Error(json.message);
            window.location.href = "/";
        }
        catch(error){
            alert(error.message);
        }
    }
}