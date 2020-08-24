class Comment {
  constructor(content, author = "anonymous") {
    this.content = content;
    this.author = author;
  }
  isEmpty() {
    const content = this.content;
    const regex = /\S+/g; // matches any non-whitespace character
    const match = content.match(regex) || []; // we use || [] because match returns null if there is no match and throws an error
    if (match.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default Comment;
