<?php if($errors ->any()): ?>
    <div class="alert alert-danger">
        <ul>
            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                 <li><?php echo e($item); ?></li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
<?php endif; ?>

<?php if(Session::get ('success')): ?>
    <div class="alert alert-success alert-dismissible fade show">
        <ul>
            <li><?php echo e(session::get ('success')); ?></li>
        </ul>
    </div>
<?php endif; ?>
<?php /**PATH C:\laragon\www\chatbot\resources\views\template\pesan\alert.blade.php ENDPATH**/ ?>