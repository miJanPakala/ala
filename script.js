const searchBox = document.getElementById('searchBox');

function arrowKey(direction) {
  const start = searchBox.selectionStart;
  const end = searchBox.selectionEnd;
  const value = searchBox.value;

  switch (direction) {
    case 'left':
      searchBox.setSelectionRange(Math.max(0, start - 1), Math.max(0, start - 1));
      break;
    case 'right':
      searchBox.setSelectionRange(Math.min(value.length, start + 1), Math.min(value.length, start + 1));
      break;
    case 'up':
      // For single-line input, up = move to start
      searchBox.setSelectionRange(0, 0);
      break;
    case 'down':
      // For single-line input, down = move to end
      searchBox.setSelectionRange(value.length, value.length);
      break;
  }

  searchBox.focus();
}

function searchGoogle() {
  const query = searchBox.value;
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
}

