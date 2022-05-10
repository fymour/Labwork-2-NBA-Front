import './signup.css'
import logotype from '../../Assets/Logo.png'

export default function Sign() {
    return (
        <div className='shait'>
            <div className=" form-container sign-up-container">
                <form action="#">
                    <img src={logotype}></img>
                    <h1>Get News and Offers from Nike</h1>
                    <p>Sign up for emails to get special news and Offers
                        from the nike family for brands</p>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook"></i></a >
                        <a href="#" className=" social"><i className="fab fa-google-plus-g"></i></a >
                        <a href="#" className=" social"><i className="fab fa-linkedin-in"></i></a >
                    </div >
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                    <p className="privacy">By logging in, you agree to the Nike's Privacy Policy and Terms of use.</p>
                </form >
            </div >
        </div>

    )
}