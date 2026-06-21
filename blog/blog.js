const blogFilters = document.querySelectorAll('.blog-filter');
const blogItems = document.querySelectorAll('[data-category]');
const blogEmpty = document.getElementById('blogEmpty');

blogFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;

    blogFilters.forEach((f) => f.classList.remove('active'));
    filter.classList.add('active');

    let visibleCount = 0;
    blogItems.forEach((item) => {
      const matches = category === 'all' || item.dataset.category === category;
      item.style.display = matches ? '' : 'none';
      if (matches) visibleCount += 1;
    });

    if (blogEmpty) blogEmpty.classList.toggle('visible', visibleCount === 0);
  });
});
