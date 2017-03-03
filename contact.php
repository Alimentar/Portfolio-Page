<!doctype HTML>
<html lang="pl">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Aleksander Bartnikowski - portfolio</title>
	<meta name="description" content="Fotograf Kraków. Zdjęcia przedmiotów, fotografia reklamowa. Krajobrazy.">
	<meta name="author" content="Aleksander Bartnikowski">
	<link rel="stylesheet" href="reset.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<link rel="stylesheet" href="main.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="script1.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet">
</head>

<body>
	<div class="fixedham">
	<div id="hamburger">
				<span></span>
				<span></span>
				<span></span>
			</div>
	</div>
	<nav class="menu">
		<ul>
			<a href="index.html" class="border"><li>Home</li></a>
			<a href="projekty.php" class="border"><lI>Projekty</li></a>
			<a href="photo.php" class="border"><li>Fotografia</li></a>
			<a href="contact.php" class="border"><li>Kontakt</li></a>
		</ul>
	</nav>
	<div class="home1" id="overflow">
<h1 id="kontakt">Kontakt</h1>
<div class="line"></div>


		<?php
//if "email" variable is filled out, send email

  if (isset($_REQUEST['email']))  {

  //Email information

  $admin_email = "aleksander.bartnikowski@gmail.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'] ;
 $subject= "=?UTF-8?B?".base64_encode($subject = $_REQUEST['subject'])."?=";

  //send email


  mail("$admin_email", "$subject", $comment,
  "Content-type: text/plain; charset=utf-8\n"
  ."Content-Transfer-Encoding: 8bit\n"
  ."From: $email <$email>\n"
  ."X-Mailer: my_own/");

  //Email response
   header('Location: thank.html');


  }

  //if "email" variable is not filled out, display the form
  else  {
?>
<p id="tel">600 249 821</p>
<p id="mail">aleksander.bartnikowski@<br>gmail.com</p>
<div class="contact">
 <form method="post" id="contactform" class="formularz">
 <input name="email" type="email" placeholder="E-mail" required><br>
 <input name="subject" type="text" placeholder="Temat" required><br>
  <textarea name="comment" placeholder="Wiadomość" required></textarea><br>
  <input type="submit" value="Wyślij" id="submit"/>
  </form>
</div>
<?php
  }
?>
	</div>


</body>
</html>
