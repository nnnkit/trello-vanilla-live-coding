class Board {
  constructor(title){
    this.title = title;
    this.lists = [];

    // UI for board
    this.node = createNode('div');
    this.node.classList.add('board');
    this.titleNode = createNode('h2');

    // UI for collection of nodes
    this.listNodes = createNode('div');
    this.listNodes.classList.add('lists');
    this.listForm = listForm();
  }
  render() {
    // Board
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode);

    // List
    this.lists.push(new List(this, 'Add new list..', 0, true));
    this.lists.forEach(list => {
      this.listNodes.appendChild(list.node);
    });
    this.lists[this.lists.length - 1].node.appendChild(this.listForm);
    this.lists[this.lists.length - 1].listTitleNode.addEventListener('click',() => addList(this));
    this.node.appendChild(this.listNodes);
    
  }
}