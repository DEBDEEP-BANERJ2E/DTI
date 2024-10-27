import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');

    if (token) {
      // Verify the token and log the user in
      loginWithToken(token).then(() => {
        history.push('/dashboard'); // Redirect after login
      }).catch(error => {
        console.error('Login failed:', error);
      });
    }
  }, []);

  return (
    <div>
      <h2>Logging in...</h2>
    </div>
  );
};

export default LoginPage;
