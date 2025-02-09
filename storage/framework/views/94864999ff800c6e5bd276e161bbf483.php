<?php $__env->startSection('title', 'Tabs'); ?>

<?php $__env->startSection('content'); ?>
<div class="container mt-5">
    <!-- Tab content -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="log-chat-tab" data-toggle="tab" href="#log" role="tab" aria-controls="log" aria-selected="true">Log Chat</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="riwayat-gejala-tab" data-toggle="tab" href="#bio" role="tab" aria-controls="bio" aria-selected="false">Riwayat Gejala</a>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="log" role="tabpanel" aria-labelledby="log-chat-tab">
            <div id="log-content">
                <?php echo $__env->make('pointakses.admin.dashboard.log', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            </div>
            <button id="printLogButton" class="btn btn-primary">Cetak Log</button>
        </div>
        <div class="tab-pane fade" id="bio" role="tabpanel" aria-labelledby="riwayat-gejala-tab">
            <div id="bio-content">
                <?php echo $__env->make('pointakses.admin.dashboard.bio', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            </div>
            <button id="printBioButton" class="btn btn-primary">Cetak Bio</button>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="/assets/admin/dashboard/tabs/main.js"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('pointakses.admin.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\chatbot\resources\views\pointakses\admin\dashboard\tabs.blade.php ENDPATH**/ ?>