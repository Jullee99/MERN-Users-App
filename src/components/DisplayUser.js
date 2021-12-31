import axios from "axios"
function DisplayUser(){
    const user = {
        username:"",
        age:0,
        email:"",
        password:"",
    }

    var getData  = "";
    const userDatas = () => {
        //console.log(user);
        axios.post("/api/userData",user).then((res) => {getData = res.data;console.log(getData)});
    };
    return(
        <div className="container-fuild">
            <h1>User Data</h1>
            <label>User Name:</label>&nbsp;&nbsp;&nbsp;
            <input placeholder="Enter User Name" onChange={(e) => user.username = e.target.value}/><br/>
            <button onClick={userDatas}>Display</button>
        </div>
    );
}

export default DisplayUser;