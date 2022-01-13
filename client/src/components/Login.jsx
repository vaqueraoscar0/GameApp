const Login = () => {

    return (
        <div>
            <div>
                <h2>Log In</h2>
                <form action="#">
                    <div>
                        <label for="">Email: </label>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div>
                        <label for="">Password: </label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        </div>
    )
}

export default Login;