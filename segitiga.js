function goBack() {
    window.history.back();
}

document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    const area = 0.5 * base * height;

    document.getElementById('result').innerText = `Luas Segitiga : ${area} cm²`;
});