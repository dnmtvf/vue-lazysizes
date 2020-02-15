export default {
  bind(el, binding, vnode) {
    if (vnode.tag !== 'img') {
      throw new Error(
        `${vnode.tag} is wrong element, use img element instead`,
      );
    }

    el.classList.add('lazyload');
  },
  update(el) {
    el.classList.remove('lazyloaded');
    el.classList.add('lazyload');
  },
};
