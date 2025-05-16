<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
     
    <link href="https://www.tamila.cl/img/isotipo2.png" rel="icon" />
    <meta name="developer" content="www.cesarcancino.com" />
    <meta name="designer" content="www.cesarcancino.com" />
    <meta name="author" content="yo@cesarcancino.com" /> 
    @viteReactRefresh
    @vite('resources/js/app.tsx')
    @inertiaHead
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{asset('css/app.css')}}" />
  </head>
  <body>
    @inertia
    <script src="{{asset('js/app.js')}}"></script>
  </body>
</html>