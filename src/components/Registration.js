import axios from "axios";

const Registration = () => {

    const user = {
        username : "",
        age: 0,
        email: "",
        password: "",
    }

    const registerUser = () => {
        axios.post('/api/insertUser', user).then(res => console.log(res.data));
    };

    return (
        <div className="container-fuild"><br />
            <h1>Registration Page</h1>
            <label>UserName:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <input placeholder="Enter UserName" onChange={(e) => (user.username = e.target.value)} /><br /><br />
            <label>Age:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <input placeholder="Enter Password" onChange={(e) => (user.age = e.target.value)} /><br /><br />
            <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <input placeholder="Enter Email" onChange={(e) => (user.email = e.target.value)} /><br /><br />
            <label>Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <input placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)} /><br /><br />
            <button onClick={registerUser}>Register</button>
        </div>
    );
}

export default Registration;