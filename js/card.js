class Card {
  constructor(list, title, dummyCard) {
    this.list = list;
    this.id = list.getNextId();
    this.title = title;
    this.node = createNode('div');
    this.node.setAttribute('data-id', this.id);
    this.node.className = 'card';
    this.titleNode = createNode('p');
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode);
    if(!dummyCard){
      this.cross = createNode('span');
      this.cross.textContent = 'x';
      this.cross.setAttribute('data-id', this.id);
      this.node.appendChild(this.cross);
      this.node.onclick = (e) => deleteCard(this, e);
    }
  }
}
