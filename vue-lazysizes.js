export default {
  bind(el, binding, vnode) {
    if (vnode.tag !== 'img') {
      throw new Error(
        `${vnode.tag} is wrong tag, use img tag for this directive`,
      );
    }

    el.classList.add('lazyload');
  },
  update(el) {
    el.classList.remove('lazyloaded');
    el.classList.add('lazyload');
  },
};
