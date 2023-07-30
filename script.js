// Get the HTML, CSS, and JavaScript editors
const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');

// Get the code output iframe
const codeOutput = document.getElementById('code-output');

// Function to update the iframe content with the code from editors
function updateOutput() {
    const htmlCode = htmlEditor.value;
    const cssCode = `<style>${cssEditor.value}</style>`;
    const jsCode = `<script>${jsEditor.value}</script>`;

    const fullCode = `${htmlCode}${cssCode}${jsCode}`;
    codeOutput.srcdoc = fullCode;
}

// Listen for changes in the editors and update the output
htmlEditor.addEventListener('input', updateOutput);
cssEditor.addEventListener('input', updateOutput);
jsEditor.addEventListener('input', updateOutput);

// Initial update to display default content in the output
updateOutput();




