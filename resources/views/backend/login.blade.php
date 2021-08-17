<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login</title>
	{{-- <base href="{{ asset("") }}backend/"> --}}
	<link href="{{ asset('backend/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('backend/css/styles.css') }}" rel="stylesheet">
</head>
<body>
	<div id="app">
		<b-login>{{ csrf_field() }}</b-login>
	</div>
	<script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>