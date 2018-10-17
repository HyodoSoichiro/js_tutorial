let emailParts = (eAddress) => {
  let emailArray = eAddress.toLowerCase().split("@");

  // return emailArray[0];
  // return emailArray[1];

  let emailList = Array();
  emailList.username = emailArray[0];
  emailList.domain = emailArray[1];

  return emailList
}