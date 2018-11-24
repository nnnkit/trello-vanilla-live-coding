function deleteCard(card, e){
  if(e.target.localName !== 'span') return;
  card.node.remove();
}