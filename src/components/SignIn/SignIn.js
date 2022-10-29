import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="container">
      <div className="col-xl-6 col-sm-12 border rounded p-md-4 mt-4 mx-auto">
        <div className="m-3">
          <button type="submit" className="btn btn-primary mb-2 w-100">Sign in with Google</button>
          <button type="submit" className="btn btn-primary mt-2 w-100">Sign in with Github</button>
        </div>
      </div>
      <div className="col-xl-6 col-sm-12 border rounded p-md-4 mt-4 mx-auto">
        <form className="m-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
      <div className="col-xl-6 col-sm-12 border rounded p-md-4 mt-4 mx-auto">

        <p className="text-center m-0">
          Don't have an account?
          <Link className="px-2" to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
};

export default SignIn;
