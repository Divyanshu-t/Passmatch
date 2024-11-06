let pass = prompt("Enter Pass") ;         // Prompt for the password as a string
let matchpass = prompt("Enter pass for Unlock") ;  // Prompt for the password again as a string

if(pass === matchpass){                  // Use strict equality for accurate comparison
    document.write("Phone Unlocked") ;
}else{
    document.write("Entered Wrong Pass") ; // Small correction in the message for clarity
}
