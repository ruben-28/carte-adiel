<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'envoyeurdemails@gmail.com';            // SMTP username
    $mail->Password   = 'bajl phja cxsf aftg';                  // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable implicit TLS encryption
    $mail->Port       = 465;                                    // TCP port to connect to

    // Enable verbose debug output
    // $mail->SMTPDebug  = SMTPS::DEBUG_SERVER;                // Enable SMTP debugging
    $mail->Debugoutput = 'html';

    // Recipients
    $mail->setFrom('envoyeurdemails@gmail.com', 'Réponse Bar Mitsvah');
    $mail->addAddress('rubensbensimon@gmail.com', 'Joe User');  // Add a recipient

    // Gather form data
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];

    $assisstepas = isset($_POST['absence']) && $_POST['absence'] === 'absent';
    $assisste = isset($_POST['presence']) && $_POST['presence'] === 'present';


    if ($assisste) {
        $presence .= "<b>Assistera à la Bar Mitsvah :</b> Oui<br>";
    }

    if ($assisstepas) {
        $presence .= "<b>N'assistera pas à la Bar Mitsvah ";
    }


    $assisstepas = isset($_POST['absence']) ? "Oui" : "Non";
    $assisste = isset($_POST['presence']) ? "Oui" : "Non";
    $numofguest = $_POST['nbPers'];
    $messagepourlebm = $_POST['msg'];

    // Create email body
    $mailbody = "
    <html>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
        <div style='max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;'>
            <h2 style='text-align: center; color: #444;'>Nouvelle réponse à la Bar Mitsvah d'Adiel Yossef</h2>
            <p><strong>Nom :</strong> $nom</p>
            <p><strong>Prénom :</strong> $prenom</p>
            <p> $presence</p>
            <p><strong>Nombre d'invités :</strong> $numofguest</p>
            <p><strong>Message :</strong></p>
            <blockquote style='background-color: #f0f0f0; padding: 10px; border-left: 5px solid #ccc;'>
                $messagepourlebm
            </blockquote>
        </div>
    </body>
    </html>
    ";

    // Content
    $mail->isHTML(true);  // Set email format to HTML
    $mail->Subject = "Nouvelle réponse de $nom $prenom";
    $mail->Body    = $mailbody;  // HTML formatted email body
    $mail->AltBody = strip_tags($mailbody);  // Plain text version for non-HTML clients

    // Send the email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
