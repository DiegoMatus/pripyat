<?php 
	$destino = $_POST['email'];
	$asunto = "mensaje";

	$comentario = "
		Email:$_POST[email]
		Comentario:$_POST[mensaje]
	";

	$headers = 'From:'.$_POST['email']."\r\n".
				'Reply-To:'.$_POST['email']."\r\n".
				'X-Mailer: PHP/'.phpversion();

	mail($destino, $asunto, $comentario, $headers);

	echo "Mensaje enviado";
?>