function logincheck() {
	if (document.getElementById("username").value == "" || document.getElementById("password").value == "") {
		alert("请填写用户名和密码");
		return false;
	}
	if(document.form1.rblUserType[1].checked) {
		document.getElementById("ParameterLoginId").value = document.getElementById("username").value;
		document.getElementById("ParameterPassword").value = document.getElementById("password").value;
		document.getElementById("oa").submit();
		
		document.getElementById("fr_username").value = document.getElementById("username").value;
		document.getElementById("fr_password").value = document.getElementById("password").value;
		document.getElementById("bilogin").submit();
		return false;
	}
}
function openUrl(optionid) {
	var selectedvalue = document.getElementById(optionid).options[document.getElementById(optionid).selectedIndex].value;
	if (selectedvalue != "") window.open(selectedvalue);
	return false;
}