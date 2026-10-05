// Keep the FAQ easy to scan: opening an answer closes the others.
document.querySelectorAll('details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('details').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});
