document.querySelectorAll('.filter-bar button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-bar button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards
    const filter = btn.dataset.filter;
    document.querySelectorAll('.photo-card').forEach(card => {
      const colors = card.dataset.colors;
      card.style.display =
        filter === 'all' || colors.includes(filter) ? 'block' : 'none';
    });
  });
});
