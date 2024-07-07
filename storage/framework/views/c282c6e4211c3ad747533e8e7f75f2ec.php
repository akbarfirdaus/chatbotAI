<!-- resources/views/dashboard/index.blade.php -->

<?php $__env->startSection('title', 'content'); ?>

<?php $__env->startSection('content'); ?>
<?php echo $__env->make('template.admin.style', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<div class="head-title">
	<div class="left">
		<h1>Dashboard</h1>
		<ul class="breadcrumb">
			<li>
				<a class="active" href="#">Admin</a>
			</li>
			<li><i class='bx bx-chevron-right'></i></li>
			<li>
				<a href="#">Dashboard</a>
			</li>
		</ul>
	</div>
</div>

<ul class="box-info">
    <li>
		<i class='bx bx-plus-medical'></i>
		<span class="text">
			<h3>72</h3>
			<p>Normal</p>
		</span>
	</li>
	<li>
		<i class='bx bx-plus-medical'></i>
		<span class="text">
			<h3>48</h3>
			<p>Depresi Ringan</p>
		</span>
	</li>
	<li>
		<i class='bx bx-plus-medical'></i>
		<span class="text">
			<h3>31</h3>
			<p>Depresi Sedang</p>
		</span>
	</li>
	<li>
		<i class='bx bx-plus-medical'></i>
		<span class="text">
			<h3>23</h3>
			<p>Depresi Berat</p>
		</span>
	</li>
</ul>

<div class="container">
    <table id="tbpasien">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>usia</th>
                <th>Jenis Kelamin</th>
                <th>Diagnosa</th>
                <th>Keterangan</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Afir</td>
                <td>20</td>
                <td>Laki - Laki</td>
                <td>Depresi Ringan</td>
                <td style="background:#87CEFA"></td>
                <td>
                    <a href="<?php echo e(route('tabs')); ?>">
                       <button class="view">View</button>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('pointakses.admin.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\chatbot\resources\views\pointakses\admin\dashboard\index.blade.php ENDPATH**/ ?>