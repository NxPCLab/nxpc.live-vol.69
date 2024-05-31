document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // スクロール処理
        targetElement.scrollIntoView({
            behavior: 'smooth' // スムーズスクロールを有効にする
        });
    });
});