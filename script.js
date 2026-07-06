// Simple client-side password check
(function(){
  const CORRECT = '143'; // change this password as desired
  const form = document.getElementById('login-form');
  const passInput = document.getElementById('password');
  const error = document.getElementById('error');
  const loginCard = document.getElementById('login-card');
  const protectedCard = document.getElementById('protected-card');
  const logoutBtn = document.getElementById('logout');

  function showProtected(){
    loginCard.classList.add('hidden');
    protectedCard.classList.remove('hidden');
    sessionStorage.setItem('authed','1');
  }

  function showLogin(){
    protectedCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
    passInput.value = '';
    sessionStorage.removeItem('authed');
  }

  // persist within session
  if(sessionStorage.getItem('authed') === '1') showProtected();

  form.addEventListener('submit', function(e){
    e.preventDefault();
    error.textContent = '';
    const val = passInput.value || '';
    if(val === CORRECT){
      showProtected();
    } else {
      error.textContent = 'Incorrect password — access denied.';
      passInput.value = '';
      passInput.focus();
    }
  });

  logoutBtn.addEventListener('click', function(){
    showLogin();
  });
})();
