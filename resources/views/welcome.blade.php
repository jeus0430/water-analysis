<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Water Difference Analytics</title>
    <link rel="icon" type="image/x-icon" href="<?= asset('favicon.ico') ?>">

    <script>
        window.baseURI = "<?= config('app.url') ?>";
    </script>
    <!-- Scripts -->
    <script src="{{ config('app.url') . mix('/js/app.js') }}" defer></script>
    <script src="{{ config('app.url') . mix('/js/manifest.js') }}" defer></script>
    <script src="{{ config('app.url') . mix('/js/vendor.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ config('app.url') . mix('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <router-view></router-view>
    </div>
</body>

</html>