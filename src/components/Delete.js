import axios from "axios";

function Delete() {
    const user ={
        username:"",
        age:0,
        email:"",
        password:"",
    }

    const deleteUser = () => {
        axios.delete("/api/deleteUser",user).then((res) => {console.log(res.data);});
    };
    return(
        <div className="container-fuild">
            <h1>Delete UserData</h1><br/>
            <label>UserName:</label>
            <input placeholder="Enter UserName" onChange={(e) => user.username = e.target.value}/><br/>
            <button onClick={deleteUser}>Delete</button>

        </div>
    );
}

export default Delete;