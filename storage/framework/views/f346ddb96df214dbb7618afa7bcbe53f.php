<!-- resources/views/kerangka/master.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
	<!-- My CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo e(asset('assets/client/style.css')); ?>">

    <!-- My js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

	<title><?php echo $__env->yieldContent('title'); ?></title>
</head>
<body>
	<?php echo $__env->make('template.admin.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

	<section id="content">
		<?php echo $__env->make('template.admin.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
		<main>
			<?php echo $__env->yieldContent('content'); ?>
		</main>
	</section>

    <script src="<?php echo e(asset('assets/client/script.js')); ?>"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
<?php /**PATH C:\laragon\www\chatbot\resources\views\pointakses\admin\index.blade.php ENDPATH**/ ?>