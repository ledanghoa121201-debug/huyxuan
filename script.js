document.addEventListener('DOMContentLoaded', () => {
    // Tìm nút có class là 'cta-button'
    const ctaButton = document.querySelector('.cta-button');

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
});