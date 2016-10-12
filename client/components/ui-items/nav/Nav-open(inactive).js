
export default function openNav(e) {
  e.preventDefault();

  var contextMenu = this.refs.contextMenu;
  var navLinkWidth = 174;
  var bodyWidth = document.body.offsetWidth;
  var bodyHeight = document.body.offsetHeight;

  if (this.state.isOpen) {
    this.setState({
      isOpen: false,
      styles: {
        left: e.clientX,
        top: e.clientY
      }
    });
  } else {

    this.setState({
      isOpen: true,
      styles: {
        left: e.clientX,
        top: e.clientY
      }
    });

    if ((e.clientX + (contextMenu.offsetWidth + navLinkWidth)) > bodyWidth) { // Right
      this.setState({
        styles: {
          left: e.clientX - contextMenu.offsetWidth + 1,
          top: e.clientY
        }
      });

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].children[0].classList.remove('align-right');
        this.links[i].children[0].classList.add('align-left');
      }
    } else { // Right and Bottom
      this.setState({
        styles: {
          left: e.clientX,
          top: e.clientY
        }
      });

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].children[0].classList.remove('align-left');
        this.links[i].children[0].classList.add('align-right');
      }
    }

    if (contextMenu.offsetLeft <= this.borderLeft.offsetWidth) { // Left
      this.setState({
        styles: {
          left: this.borderLeft.offsetWidth,
          top: e.clientY
        }
      });
    }

    if ((e.clientY + contextMenu.offsetHeight) > bodyHeight &&
        (e.clientX + (contextMenu.offsetWidth + navLinkWidth)) > bodyWidth)
    {
      this.setState({
        styles: {
          left: e.clientX,
          top: e.clientY - contextMenu.offsetHeight
        }
      });

      for (let i = 0; i < this.links.length; i++) {
        this.links[i].children[0].classList.remove('align-right');
        this.links[i].children[0].classList.add('align-left');
      }
    } else if ((e.clientY + contextMenu.offsetHeight) > bodyHeight) { // Left and Bottom
      this.setState({
        styles: {
          left: e.clientX + this.borderLeft.offsetWidth,
          top: e.clientY - contextMenu.offsetHeight
        }
      });
    }

    if ((e.clientY + contextMenu.offsetHeight) > bodyHeight &&
        (e.clientX + (contextMenu.offsetWidth + navLinkWidth)) > bodyWidth)
    {
      this.setState({
        styles: {
          left: e.clientX - contextMenu.offsetWidth + 1,
          top: e.clientY - contextMenu.offsetHeight
        }
      });
    }

  }
}
