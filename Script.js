function toggleDescription(index) {
    const descriptions = document.querySelectorAll('.description');
    const description = descriptions[index];

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}
