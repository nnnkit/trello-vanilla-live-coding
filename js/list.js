class List {
  constructor(board, title, index, dummyList) {
    this.board = board;
    this.title = title;
    this.index = index;
    let cardId = 0;
    this.getNextId = function(){
      return cardId++;
    }

    // UI elm
    this.node = createNode('div');
    this.node.className = "three columns list";
    this.listTitleNode = createNode('h5');
    this.listTitleNode.textContent = this.title;
    this.node.appendChild(this.listTitleNode);

    // UI elm for cards
    this.cardNodes = createNode('div');
    this.cardNodes.className = 'cards';

    if(!dummyList) {
      this.cards = [new Card(this, 'Add New Card..', true)];
      this.cardForm = cardForm();
      this.cards[this.cards.length - 1].node.appendChild(this.cardForm);
      this.cards.forEach(card => {
        this.cardNodes.appendChild(card.node);
      });
      this.node.appendChild(this.cardNodes);
      this.cards[this.cards.length - 1].titleNode.addEventListener('click', () => addCard(this));
    }
  }
}
