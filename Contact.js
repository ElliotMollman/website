/*
#############################
#                           #
# Javascript for Contact.   #
#                           #
#############################
https://www.emailjs.com/docs/sdk/init/

Note: using emailjs.com to send email. Must use template provided by them, and any variable such as {{name}} in the template must be provided by javascript code.
This is done in the templateParams values.

*/

function get_message() {
  let sender_name = document.getElementById("sender_name").value;
  let message_body = document.getElementById("message_body").value;

  if (`${message_body}` || null){
    send_email(message_body, sender_name);

  } 
  else if (`${message_body}` == ""){
    alert("Please enter a message.");
  }
}


function send_email(message_body, sender_name) {
  let service_ID = "service_xgvuuui";
  let template_ID = "template_vmxsndu";
  console.log("sending message....");
  emailjs.init({
    publicKey: 'u7ZurD_SGAuxjceJ6',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['elliotmollman@yahoo.com', 'emollman27@gmail.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });


  let templateParams = {
    name: sender_name,
    message: message_body,
  };
  
  emailjs.send(service_ID, template_ID, templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert(`message has been sent ${sender_name}`);
      document.getElementById("sender_name").value = '';
      document.getElementById("message_body").value = '';
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );



}
