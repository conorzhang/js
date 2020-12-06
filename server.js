var html_file = '';

html_file = 12345;

try {
    document.getElementById('view').innerHTML=html_file;
} catch (error) {
    console.log(html_file);
}
