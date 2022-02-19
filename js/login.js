let auth_ck = Cookies.get("ck");

if(auth_ck){
  window.location.replace("/page/dashboard.html");
}

const login = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if(email && password){
    Cookies.set('ck', '1');
  }
}