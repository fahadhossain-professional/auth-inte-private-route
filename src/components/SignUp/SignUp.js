import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
      <div className="col-xl-6 col-sm-12 border rounded p-md-4 mt-4 mx-auto">
        <div className="m-3">
          <button type="submit" className="btn btn-primary mb-2  w-100">Sign up with Google</button>
          <button type="submit" className="btn btn-primary mt-2 w-100">Sign up with Github</button>
        </div>
      </div>
      <div className="col-xl-6 col-sm-12 border rounded p-md-4 mt-4 mx-auto">
        <form className="m-3">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
            <input type="name" className="form-control" id="exampleInputName1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
      <div className="col-xl-6 col-sm-12 border rounded p-md-4 mt-4 mx-auto">

        <p className="text-center m-0">
          Have an account?
          <Link className="px-2" to="/signin">Sign in</Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
