export const toggleMenu = () => {
    console.log("done");

    const links = document.querySelector('.links');
    const logo = document.querySelector('.logo');
    const menuIcon = document.querySelector('.menu-icon');
    var element = document.querySelector("#myNav");
    element.classList.toggle('navigation-menu');
    links.classList.toggle('active');
    logo.classList.toggle('disabled');
    menuIcon.classList.toggle('active');
  }