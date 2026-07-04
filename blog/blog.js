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

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answerId = question.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    if (!answer) return;

    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    // Close all other answers
    faqQuestions.forEach((q) => {
      if (q !== question) {
        q.setAttribute('aria-expanded', 'false');
        const id = q.getAttribute('aria-controls');
        const ans = document.getElementById(id);
        if (ans) ans.hidden = true;
      }
    });

    // Toggle current answer
    question.setAttribute('aria-expanded', !isExpanded);
    answer.hidden = isExpanded;
  });
});
