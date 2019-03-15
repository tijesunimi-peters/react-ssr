import '../styles/skeletons.scss';

window.skeleton = new Event('skeleton');

document.querySelectorAll('.skeleton').forEach(elem => {
  elem.addEventListener('skeleton', (e) => {
    console.log("removing the skeleton");
    e.target.classList.remove('skeleton');
    e.target.removeEventListener('skeleton', () => {});
  });
});

