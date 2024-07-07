     // Fungsi Print
     $(document).ready(function(){
        // Event listener untuk tombol cetak log
        $('#printLogButton').on('click', function() {
            printElement($('#log-content').html());
        });

        // Event listener untuk tombol cetak bio
        $('#printBioButton').on('click', function() {
            printElement($('#bio-content').html());
        });

        function printElement(content) {
            var printWindow = window.open('', '_blank');
            printWindow.document.open();
            printWindow.document.write('<html><head>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(content);
            printWindow.document.write('</body></html>');
            printWindow.document.close();

            printWindow.onload = function() {
                printWindow.print();
                printWindow.close();
            };
        }
    });
