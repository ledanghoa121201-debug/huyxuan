document.addEventListener('DOMContentLoaded', () => {
    // Tìm nút có class là 'cta-button'
 /*   const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        // Thêm sự kiện lắng nghe khi nút được nhấp
        ctaButton.addEventListener('click', () => {
            // 1. Thay đổi nội dung và kiểu dáng của nút
            ctaButton.textContent = 'Đã Đăng Ký Tư Vấn!';
            ctaButton.style.backgroundColor = '#4CAF50'; // Màu xanh lá cây
            ctaButton.disabled = true; // Vô hiệu hóa nút để tránh nhấp lần nữa

            // 2. Hiện thông báo đơn giản cho người dùng
            alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ sớm nhất.');
        });
    }
});*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Code cho CTA Button cũ của bạn (Nếu có) ---
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ctaButton.textContent = 'Đã Đăng Ký Tư Vấn!';
            ctaButton.style.backgroundColor = '#4CAF50';
            ctaButton.disabled = true;
            alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ sớm.');
        });
    }

    // --- CODE MỚI CHO ACCORDION DỊCH VỤ ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Lấy phần nội dung ngay sau header (accordion-content)
            const content = header.nextElementSibling;
            
            // Lấy biểu tượng mũi tên
            const icon = header.querySelector('.toggle-icon');

            // 1. Chuyển đổi trạng thái hiển thị của nội dung
            if (content.classList.contains('active')) {
                // Nếu đang mở, đóng lại
                content.classList.remove('active');
                icon.classList.remove('rotate');
            } else {
                // Nếu đang đóng, mở ra
                
                // (Tùy chọn) Đóng tất cả các mục khác trước khi mở mục mới
                accordionHeaders.forEach(otherHeader => {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherIcon = otherHeader.querySelector('.toggle-icon');
                    if (otherContent.classList.contains('active')) {
                        otherContent.classList.remove('active');
                        otherIcon.classList.remove('rotate');
                    }
                });

                // Mở mục hiện tại
                content.classList.add('active');
                icon.classList.add('rotate');
            }
        });
    });
});