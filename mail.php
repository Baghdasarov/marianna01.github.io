<?php

if(isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    $to = "way2up.armenia@gmail.com";
    $subject = 'Way2Up message';
    $body = <<<EMAIL

    Hi Way2Up team!
    
    We have new request from $name.
    
    His/Her email is $email.
    
    Here is the text.
    
    $text
    
    Kind Regards
EMAIL;

    if(mail($to, $subject, $body)){
        echo true;
    }else{
        echo false;
    }
}
