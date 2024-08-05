
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        var content = this.querySelector('.dropdown-content');
        if (content.style.display === 'block') {
            content.style.display = 'none';s
        } else {
            content.style.display = 'block';
        }
    });
});
