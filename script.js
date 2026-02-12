// נצנצים כלליים ברקע
for(let i=0; i<100; i++){
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * 200 + 'px';
  sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
  sparkle.style.backgroundColor = Math.random() > 0.5 ? 'gold' : 'silver';
  document.body.appendChild(sparkle);
}

// אנימציה + ניצוצי pop לחלקים
const sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
  setTimeout(() => {
    section.classList.add('animate');

    for(let i=0; i<10; i++){
      const spark = document.createElement('div');
      spark.classList.add('section-sparkle');
      spark.style.left = (Math.random() * section.offsetWidth) + 'px';
      spark.style.top = (Math.random() * section.offsetHeight) + 'px';
      section.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 800);
    }
  }, index * 700);
});
