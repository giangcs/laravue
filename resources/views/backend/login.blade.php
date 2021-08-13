<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<script> window.Laravel = {csrfToken: '{{ csrf_token }}'}</script>
	<title>Login</title>
	{{-- <base href="{{ asset("") }}backend/"> --}}
	<link href="{{ asset('backend/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('backend/css/styles.css') }}" rel="stylesheet">
</head>
<body>
	<div id="app">
		<v-login></v-login>
	</div>
	<script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>