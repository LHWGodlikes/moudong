class Register {
  constructor () {
    this.inputUserName = document.querySelector("#inputUserName");
    this.inputPassword = document.querySelector("#inputPassword");
    this.btn = document.querySelector("#btn");
    this.bindEvent();
  }

  bindEvent () {
    this.btn.onclick = () => {
     let username = this.inputUserName.value,
          password = this.inputPassword.value;
			this.yhm = false;
			this.mm = false;
			
      
      // 数据验证
				// 用户名验证
				var	checkUser = () => {
			   var reg = /^[a-z][a-z0-9]{5}$/i;    
			    if(reg.test(username)==false){
			      alert("用户名首位为字母,后5位为位数字和字母");
			    return this.yhm=false;
			      }
			      return this.yhm=true;
			    }					
			/*密码验证*/    
			 var checkPwd = () => {
			  var reg=/^[a-zA-Z0-9]{4,16}$/;    
			    if(reg.test(password)==false){
			       alert("密码不能含有非法字符，长度在4-16之间");
			    return this.mm=false;
			      }
			      return this.mm = true;
			    }					
					checkUser();
					checkPwd();
					if(this.yhm==true&&this.mm==true){
						 tools.ajax("POST", "../api/v1/register.php", {username, password}, data => {
						  console.log(data);
							if(data.res_code ===1){
								alert(data.res_message);
							}else{
								alert(data.res_message);
							}
						});
					}
					
      return false;
    }

  }


}

new Register();