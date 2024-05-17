<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Validate email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit;
  }

  // Email content
  $to = "antoninpomies@gmail.com"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>